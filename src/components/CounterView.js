
import { useCounterState } from "./store/CounterContext"

const CounterView=()=>{
    const {counter,title}=useCounterState()
    return <div>
        <h1>{title}</h1>
        Counter Value is:{counter}
    </div>
}

export default CounterView