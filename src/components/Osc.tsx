import { ChangeEvent, useEffect, useState } from "react"
import { useAppContext } from "../context/Context"

export const Osc = () => {
    const { actx } = useAppContext()
    
    const osc = actx.createOscillator()
    const [ f, setF ] = useState(220)
    osc.connect(actx.destination)
    const turnOn = () => osc.start()
    const handleF = (e: ChangeEvent<HTMLInputElement>) => {
        setF(e.target.valueAsNumber)
    }
    useEffect(()=>{
        osc.frequency.value = f
    }, [osc, f])
    return (
        <div >
            <button onClick={turnOn}>play</button>
            <input type="range" onChange={handleF} max={4000} min={60} value={f}/>
            <p>{f}</p>
        </div>
    )
}