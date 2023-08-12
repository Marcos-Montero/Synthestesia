import { TiHome } from "react-icons/ti"
export const MelmothGoTo = () => {
	return (
		<>
			<a
				href="https://melmoth.dev"
				className="group/melmoth fixed p-2 rounded-lg shadow-xl shadow-black/50 top-8 left-8 bg-yellow-700/70 hover:bg-yellow-700/80 hover:text-white cursor-pointer w-12 h-12 duration-300 hover:w-[148px] overflow-hidden flex items-center justify-between"
			>
				<p>
					<TiHome className=" text-white text-3xl" />
				</p>
				<span className="text-white opacity-0 group-hover/melmoth:opacity-100 text-md text-white/200 ease-in duration-300">Melmoth.dev</span>
			</a>
		</>
	)
}
