import {  addTodo, setTodo} from '../Redux/actionCreater'
import { useDispatch, useSelector} from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
export const Home = ()=>{
    const [text, setText] = useState("")
    const todos = useSelector((store)=> store.todo)
    const dispatch = useDispatch()
    function addtoStore()
    {
        setText("")
        const abc = text//text
        dispatch(addTodo(abc))
    }
    return (
        <>
        <h2>HOME PAGE</h2>
        <input type="text" onChange={(e)=>setText(e.target.value)} />
        <br />
        <button onClick={addtoStore}>ADD</button>
        <ol style={{ width : "200px", margin : "auto"}}>
            {todos?.map(todo=><li key={todo.id}><Link to={`todo/${todo.id}`}>{todo.task}</Link></li>)}
        </ol>
        </>
    )
}