import { useCounterDispatch,inc,dec,setCounter } from "./store/CounterContext"

const CounterChanger = () =>{

    const dispatch=useCounterDispatch()

    const handleInc=()=>{
        inc(dispatch)
    }

    const handleDec=()=>{
        dec(dispatch)
    }

    function handleKeyPress(e){
        if(e.key === "Enter"){
            setCounter(dispatch,parseInt(e.target.value) )
        }
       
    }

return <div>
    <button onClick={handleInc}>Inc</button>
    <button onClick={handleDec}>Dec</button>
    <div>
        <input onKeyPress={handleKeyPress} placeholder="Enter a value" type="Number"></input>
    </div>
    
</div>
    
}

export default CounterChanger