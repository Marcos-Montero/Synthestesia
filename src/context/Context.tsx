import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import * as Tone from "tone"
import { KeyProps, keys } from "../constants/keys"
import { matchKey } from "../utils"
interface AppContextType {
	play: (note: string) => void
	keyPressed?: KeyProps
	setKeyPressed: (key?: KeyProps) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const Store = () => {
	const [keyPressed, setKeyPressed] = useState<KeyProps | undefined>()

	const getKey = (e: KeyboardEvent) => {
		const selectedKey = keys.find(key => matchKey(key.key, e.key))
		setKeyPressed(selectedKey)
		setTimeout(() => {
			setKeyPressed(undefined)
		}, 20)
	}
	const synth = new Tone.MonoSynth({
		envelope: {
			attack: 0.01,
			decay: 0.1,
			sustain: 0.5,
			release: 0.1
		},
		filter: {
			type: "lowpass",
			frequency: 12000,
			rolloff: -12
		}
	}).toDestination()

	const play = (n: string) => {
		if (Tone.context.state !== "running") {
			Tone.start()
		}
		synth.triggerAttackRelease(n, "2n")
	}
	useEffect(() => {
		document.addEventListener("keydown", getKey, true)
	}, [])
	return {
		keyPressed,
		play,
		setKeyPressed
	}
}

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	const initialContext = Store()
	return <AppContext.Provider value={initialContext}>{children}</AppContext.Provider>
}
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextType => {
	const ctx = useContext(AppContext)
	if (!ctx) {
		throw new Error("useAppContext must be used within a AppProvider")
	}
	return ctx
}
