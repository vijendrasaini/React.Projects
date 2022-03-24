import { useState } from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { addTodo, deleteTodo, getTodo } from "../Redux/Todo/action"


export const Home = ()=>{

    const [ text, setState ] = useState("")
    const dispatch = useDispatch()
    const todos = useSelector((store)=>store.todo)

    const configUrl = "http://localhost:8080/todos"
    useEffect(()=> getData(),[])

    function getData(){
        dispatch(getTodo())
    }
    
    async function postData(){
        dispatch(deleteTodo(text))
    }

    async function updateData(todo){
        const todoObj = {
            task : todo.text,
            status : todo.status?false:true
        }
        const arg = {
            method : "PATCH",
            body : JSON.stringify(todoObj),
            headers : { "content-type" : "application/json" }
        }
        const r1 = await fetch(configUrl+`/${todo.id}` ,arg)
        const r2 = await r1.json()
        getData()
    }

    async function deleteData(id){
        const arg = {
            method : "DELETE",
            headers : { "content-type" : "application/json" }
        }
        const r1 = await fetch(configUrl+`/${id}`,arg)
        const r2 = await r1.json()
        getData()
    }
    return (
        <>
            { localStorage.getItem('user')?"":<Navigate to='/login'></Navigate>}
            <h2>Home Page</h2>
            <h4>Your Todos</h4>
            <br />
            <input onChange={(e)=>setState(e.target.value)} style={{padding : "2px 12px", width: "250px"}} type="text" placeholder="Enter Your Todo..."/>
            <button onClick={postData} style={{padding : "3px 10px", fontSize : "13px"}}>ADD TODO</button>
            <br /><br />
            <table style={{ 
                border : "1px solid black",
                width : "40%",
                margin : 'auto'
            }}>
                <thead>
                    <tr>
                        <th style={{ border : "1px solid black"}}>S.N.</th>
                        <th style={{ border : "1px solid black"}}>Todo</th>
                        <th style={{ border : "1px solid black"}}>Status</th>
                        <th style={{ border : "1px solid black"}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { todos.map((todo, index)=><tr key={todo.id}>
                        <td style={{ border : "1px solid black"}}>{ index + 1}</td>
                        <td style={{ border : "1px solid black"}}>{ todo.task}</td>
                        <td style={{ border : "1px solid black"}}><button onClick={()=>updateData(todo)} style={{padding : "3px 10px", fontSize : "13px"}}>{ todo.status? "DONE":"NOT DONE"}</button></td>
                        <td style={{ border : "1px solid black"}}><button onClick={()=>deleteData(todo.id)} style={{padding : "3px 10px", fontSize : "13px"}}>DELETE</button></td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}