import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams,Navigate } from "react-router-dom"
import { addTodo, changeStatus, deleteTodo } from "../Redux/actionCreater"

export const Todo = ()=>{
    // const dispatch = useDispatch()
    const todos = useSelector((store)=>store.todo)
    const { id } = useParams()
    let todo 
    for(let i = 0;i<todos.length;i++)
    {
        if(todos[i].id == id)
            {
                todo = todos[i]
                break
            }
    }
    const dispatch = useDispatch()
    return (

        <>
            <h2>TODO : SINGAL</h2>
            { todo== undefined ? <Navigate to={'/'}/> : <table style={{ width : "500px", margin : "auto"}}>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>STATUS</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{todo.task}</td>
                        <td><button onClick={()=> dispatch(changeStatus(todo))} style={{fontSize : "14px"}}>{todo?.status?"DONE" : "NOT DONE"}</button></td>
                        <td><button onClick={()=> dispatch(deleteTodo(todo?.id))} style={{fontSize : "14px"}}>DELETE</button></td>
                    </tr>
                </tbody>
            </table>}
            
        </>
    )
}