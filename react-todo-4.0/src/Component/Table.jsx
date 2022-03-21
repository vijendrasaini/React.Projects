import { useEffect, useState } from "react"

export function Table() {

    const [list, setList] = useState([])
    const [ editValue, setEditValue] = useState("")
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const a = await fetch(`http://localhost:7000/tasks`)
        const b = await a.json()
        setList(b)
    }
    async function deleteTask(id) {
        const a = await fetch(`http://localhost:7000/tasks/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': "application/json"
            }

        })
        const b = await a.json()
        getData()
    }
    async function toggleTask(el) {
        const task = el.task
        const status = el.status ? false : true
        const a = await fetch(`http://localhost:7000/tasks/${el.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                task,
                status
            }),
            headers: {
                'content-type': "application/json"
            }
        })
        const b = await a.json()
        getData()
    }
    async function editTask(el){
        const task = editValue
        const status = el.status
        const a = await fetch(`http://localhost:7000/tasks/${el.id}`, {
            method: "PATCH",
            body: JSON.stringify({
                task,
                status
            }),
            headers: {
                'content-type': "application/json"
            }
        })
        const b = await a.json()
        getData()
    }
    return (
        <>
            <br />
            <table style={{
                border: "1px solid black",
                margin: 'auto'
            }}>
                <thead>
                    <tr>
                        <th style={{ padding: "0px 50px", border: "1px solid black" }}>S.N.</th>
                        <th style={{ padding: "0px 50px", border: "1px solid black" }}>Task</th>
                        <th style={{ padding: "0px 50px", border: "1px solid black" }}>Delete Status</th>
                        <th style={{ padding: "0px 50px", border: "1px solid black" }}>Toggle Status</th>
                        <th style={{ padding: "0px 50px", border: "1px solid black" }}>EDIT</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((el, index) => <tr key={el.id}>
                        <td style={{
                            border: "1px solid black",
                        }}>{index+1}</td>
                        <td style={{
                            border: "1px solid black",
                        }}>
                        {/* <input value={el.task} style={{ border : 'none'}} onChange={(e)=>setEditValue(e.target.value)} type="text" placeholder="Edit your task" /> */}
                        { el.task}
                        </td>
                        <td style={{
                            border: "1px solid black",
                        }}><button onClick={() => deleteTask(el.id)}>Delete</button>
                        </td>
                        <td style={{
                            border: "1px solid black",
                        }}> 
                        <button onClick={() => toggleTask(el)}>{el.status ? "Done" : "Not Done"}</button> 
                        </td>
                        <td style={{
                            border: "1px solid black",
                        }}><button onClick={()=>editTask(el)}>Edit</button>
                        </td> 
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}