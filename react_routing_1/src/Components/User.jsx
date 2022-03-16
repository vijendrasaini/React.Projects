import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const User = ()=>{
    const [ user, setUser] = useState({})
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        console.log("hi")
        const {id} = useParams()
        const a = await fetch(`https://reqres.in/api/users/${id}`)
        const b = await a.json()
        setUser(b.data)
    }
    return (
        <>
            <h1>User Detail page</h1>
            <ul style={{
                listStyle : "none"
            }}>
            <li>{ user.id}</li>
            <li>{ user.email}</li>
            <li>{ user.first_name}</li>
            <li>{ user.last_name}</li>
            <li><img src={ user.avatar} alt="" /></li>
        </ul>
        </>
    )
    
}