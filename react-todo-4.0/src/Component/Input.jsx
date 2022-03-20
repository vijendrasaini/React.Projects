import { useState } from "react"

export function Input(){
    const [ task, setTask] = useState("")


    async function postData(){
        const obj = {
            task,
            status : false
        }
        const a = await fetch(`http://localhost:7000/tasks`,{
            method : "POST",
            body : JSON.stringify(obj),
            headers : {
                'content-type' : 'application/json'
            }
        })
        const b = await a.json()
        alert("Your task is added.")
    }



    
    return (
        <>
            <input onChange={(e)=>{setTask(e.target.value)}} type="text" placeholder="Enter task"/>
            <br/>
            <button onClick={()=>{postData()}}>Add task</button>
        </>
    )
}