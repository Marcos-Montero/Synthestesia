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
		rotate: [3600, 0],
		outline: "none",
		transition: {
			duration: 1,
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
			<motion.circle cx="50%" cy="50%" r={20} fill="rgba(255,255,255,.2)" className={"backdrop-blur-xl"} />
			<path
				d="M8.8108 23.9138C13.0253 25.3117 17.4897 23.7584 19.9919 20.3923C19.3205 20.3215 18.6437 20.1921 17.9798 19.9719C12.7443 18.2353 9.91882 12.6161 11.6689 7.42103C13.4189 2.22592 19.0818 -0.577808 24.3173 1.15873C25.1673 1.44066 25.9537 1.82494 26.6674 2.29313C22.2615 2.02598 18.0502 4.69973 16.5843 9.05139C15.1804 13.2189 16.73 17.6325 20.0978 20.1203C20.1689 19.4513 20.2995 18.7769 20.5223 18.1154C22.2724 12.9202 27.9352 10.1165 33.1707 11.8531C38.4062 13.5896 41.2318 19.2088 39.4817 24.4039C39.1976 25.2474 38.8103 26.0278 38.3385 26.7359C38.6077 22.364 35.9132 18.1851 31.5277 16.7305C27.3159 15.3335 22.8546 16.8839 20.3514 20.2456C21.0439 20.3148 21.7426 20.4453 22.4277 20.6726C27.6632 22.4091 30.4887 28.0283 28.7387 33.2234C26.9887 38.4185 21.3258 41.2222 16.0903 39.4857C15.2403 39.2038 14.4538 38.8195 13.7401 38.3513C18.146 38.6184 22.3574 35.9447 23.8233 31.593C25.2361 27.3992 23.6579 22.9561 20.2456 20.4771C20.1756 21.1615 20.0442 21.852 19.8162 22.529C18.0661 27.7241 12.4033 30.5278 7.16776 28.7913C1.93227 27.0547 -0.893247 21.4355 0.856787 16.2404C1.14091 15.397 1.52818 14.6165 2.00001 13.9084C1.73079 18.2803 4.42532 22.4592 8.8108 23.9138Z"
				fill={color}
			/>
		</motion.svg>
	)
}
