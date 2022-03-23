// import { store } from "../Redux/store"
import { addCount, subCount } from '../Redux/actionCreater'
import { useDispatch, useSelector} from 'react-redux'
// import { store } from '../Redux/store'
export const Counter = ()=>{

    // console.log(store.getState())
    const {count : counter } = useSelector((store)=> ({ count : store.count}))
    const dispatch = useDispatch()
    return (
        <>
        <h2>Counter : { counter }</h2>
        <br />
        <button onClick={()=>dispatch(addCount(1))}>ADD</button>
        <br /><br />
        <button onClick={()=>dispatch(subCount(1))}>SUB</button>
        </>
    )
}