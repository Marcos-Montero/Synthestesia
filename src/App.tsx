import { AppContextProvider } from "./context/Context"
import { CircleButton } from "./components/CircleButton"
import { useEffect, useState } from "react"
import { KeyProps, keys } from "./constants/keys"

const App = () => {
	const [keyPressed, setKeyPressed] = useState<KeyProps | undefined>()

	const getKey = (e: KeyboardEvent) => {
		const selectedKey = keys.find(key => key.key === e.key)
		setKeyPressed(selectedKey)
		setTimeout(() => {
			setKeyPressed(undefined)
		}, 20)
	}
	useEffect(() => {
		document.addEventListener("keydown", getKey, true)
	}, [])

	return (
		<AppContextProvider>
			<main style={{ boxShadow: "inset 0 0 1400px " + keyPressed?.color || "transparent", outline: "20px" }} className="flex flex-col min-h-screen min-w-screen items-center justify-center">
				<div className="flex flex-wrap max-w-xl justify-center">
					{keys.map(({ note, color, key }) => (
						<CircleButton key={key} note={note} color={color} pressed={keyPressed?.key === key} />
					))}
				</div>
				<textarea placeholder=" type and listen to your letters..." autoFocus className="h-sm w-xl border-1 border-gray-700 mt-8 text-center" />
			</main>
		</AppContextProvider>
	)
}

export default App
