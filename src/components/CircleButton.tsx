import { motion, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import { useAppContext } from "../context/Context"
import { keys } from "../constants/keys"

type Props = {
	note: string
	color: string
	pressed?: boolean
}
export const CircleButton = ({ note, color, pressed }: Props) => {
	const { play, setKeyPressed } = useAppContext()
	const controls = useAnimationControls()
	const pressedStyle = {
		scaleY: [12, 1],
		outline: "none",
		transition: {
			duration: 0.3,
			ease: "easeInOut"
		}
	}
	const handleClick = () => {
		controls.start(pressedStyle)
		play(note)
		setKeyPressed(keys?.find(key => key.note === note))
	}
	useEffect(() => {
		if (!pressed) {
			return
		}
		play(note)
		controls.start(pressedStyle)
	}, [pressed])
	return (
		<motion.svg animate={controls} onClick={handleClick} className={"h-[40px] w-[40px] hover:cursor-pointer"}>
			<motion.circle cx="50%" cy="50%" r={15} fill={color} />
		</motion.svg>
	)
}
