import { useState } from "react"
import { Navigate } from 'react-router-dom'

export const Login = ()=>{

    const tempUser = {
        email : "",
        password : ""
    }
    const [ user, setUser] = useState(tempUser)
    function userHandler(e){
        const { name, value} = e.target
        setUser({ ...user,[name] : value})
    }

    async function loginUser(){
        if(localStorage.getItem('user'))
            return 
        const configUrl = `https://reqres.in`
        const arg = {
            method : "POST",
            body : JSON.stringify(user),
            headers : { "content-type" : "application/json"}
        }
        const r1 = await fetch(configUrl+`/api/register`, arg)
        const r2 = await r1.json()
        if(r2.error)
            return alert("Cardentials are wrong.")
        localStorage.setItem('user', JSON.stringify({...user, token : r2.token}))
        alert('You are successfully logged in.')
        // location.reload()
        location.href = "http://localhost:3000/"
    }
    function logOutUser(){
        if(!localStorage.getItem('user'))
            return
        localStorage.clear('user')
        alert('you are successfully logged out')
        location.reload()
    }
    return (
        <>
            <div>
                <input name="email" onChange={userHandler} style={{padding : "4px 12px"}} type="text" placeholder="Enter Your Email..."/>
                <br /><br />
                <input name="password" onChange={userHandler} style={{padding : "4px 12px"}} type="text" placeholder="Enter Your Password..."/>

                <br /><br />
                <button onClick={loginUser} style={{padding : "2px 10px", fontSize : "20px", margin : "0px 10px"}}>Login</button>
                <button onClick={logOutUser} style={{padding : "2px 10px", fontSize : "20px", margin : "0px 10px"}}>LogOut</button>
                {/* <button onClick={"a"} style={{padding : "2px 10px", fontSize : "20px", margin : "0px 10px"}}>SignUp</button> */}
                {/* { localStorage.getItem('user')?<Navigate to="/"></Navigate>:} */}
            </div>
        </>
    )
}