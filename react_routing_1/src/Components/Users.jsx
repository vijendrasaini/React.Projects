import { useEffect, useState } from "react"

export const Users = ()=>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        const a = await fetch('https://reqres.in/api/users')
        const b = await a.json()
        console.log(b)
        setUsers(b.data)
    }
    return (
        <table style={{
            width : "400px",
            marginTop : "50px",
            margin : "auto",
        }}>
            <thead>
                <tr>
                    <th>Ids</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                { users.map(user=><tr key={user.id}>
                    <td><a href={`/user/${user.id}`}>{user.id}</a></td>
                    <td><a href={`/user/${user.id}`}>{user.first_name}</a></td>
                </tr>)}
            </tbody>
        </table>
    )
}