import { useAppContext } from "./context/Context"
import { CircleButton } from "./components/CircleButton"
import { keys } from "./constants/keys"

const App = () => {
	const { keyPressed } = useAppContext()

	return (
		<main style={{ background: `linear-gradient(180deg, white 0%, white 27%, ${keyPressed?.color} 90%` }} className="flex flex-col min-h-screen min-w-screen items-center justify-center">
			<div className="flex flex-wrap max-w-xl justify-center bg-slate-100/20 p-9 gap-4 rounded-3xl backdrop-blur-xl">
				{keys.map(({ note, color, key }) => (
					<CircleButton key={key} note={note} color={color} pressed={keyPressed?.key === key} />
				))}
			</div>
			<textarea placeholder=" type and listen to your letters..." autoFocus className="h-sm w-xl border-1 border-gray-700 mt-8 text-center back-drop-blur-xl bg-slate-50/50" />
		</main>
	)
}

export default App
