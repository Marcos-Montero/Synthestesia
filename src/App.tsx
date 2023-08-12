import { useAppContext } from "./context/Context"
import { CircleButton } from "./components/CircleButton"
import { keys } from "./constants/keys"
import { MelmothGoTo } from "./components/MelmothGoTo"

const App = () => {
	const { keyPressed } = useAppContext()

	return (
		<main
			style={{
				backgroundColor: "#e5e5f7",
				opacity: 0.8,
				backgroundImage: keyPressed
					? `radial-gradient(circle at center center, ${keyPressed?.color}, #e5e5f7), repeating-radial-gradient(circle at center center, ${keyPressed?.color}, ${keyPressed?.color}, 10px, transparent 20px, transparent 10px)`
					: `radial-gradient(circle at center center, gray, #e5e5f7), repeating-radial-gradient(circle at center center, gray, gray, 10px, transparent 20px, transparent 10px)`,
				backgroundBlendMode: "multiply"
			}}
			className="flex flex-col min-h-screen min-w-screen items-center justify-center"
		>
			<MelmothGoTo />
			<div className="flex flex-wrap max-w-sm justify-center bg-slate-900/05 p-9 gap-4 rounded-3xl backdrop-blur-sm shadow-xl">
				{keys.map(({ note, color, key }) => (
					<CircleButton key={key} note={note} color={color} pressed={keyPressed?.key === key} />
				))}
			</div>
		</main>
	)
}

export default App
