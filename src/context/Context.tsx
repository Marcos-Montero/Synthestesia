import { ReactNode, createContext, useContext } from "react"
import * as Tone from "tone"
interface AppContextType {
	play: (note: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

const store = () => {
	const synth = new Tone.Synth({
		envelope: {
			attack: 0.01,
			decay: 0.1,
			sustain: 0.5,
			release: 0.1
		}
	})
	synth.toDestination()

	const play = (n: string) => {
		if (Tone.context.state !== "running") {
			Tone.start()
		}
		synth.triggerAttackRelease(n, "2n")
	}
	return {
		play
	}
}

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
	const initialContext = store()
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
