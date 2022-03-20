import { useContext, useState } from "react"
import { AccountContext } from "../Contexts/AccountContext"

export function Login(){

    const { token, setToken } = useContext(AccountContext)

    const dummyUser = { email : "", password : "" }
    const [user, setUser] = useState(dummyUser)
    function inputHandler(e){
        const { value, name} = e.target
        setUser({ ...user, [name] : value})
    }
    async function signIn(){

        const res1 = await fetch(`http://localhost:7000/users`)
        const res2 = await res1.json()

        let f1 = true
        for(let i = 0;i<res2.length;i++){
            if(res2[i].email == user.email && res2[i].password == user.password)
                {
                    f1 = false
                    break 
                }
            }
        if(f1) return alert('Your cardentials are wrong')
        
        alert("You are successfully logged in.")
        setToken({
            email : user.email,
            name : user.email.split('@')[0]
        })
        setUser(dummyUser)

    }
    async function signUp(){
        
        const res1 = await fetch(`http://localhost:7000/users`)
        const res2 = await res1.json()
        if(user.email == "")
        return alert('Please provide valid email')
        if(user.password == "")
            return alert('Please provide valid password')
        for(let i = 0;i<res2.length;i++){
            if(res2[i].email == user.email)
                return alert('User already exits in our database.')
            }

        console.log(user)
        const a = await fetch(`http://localhost:7000/users`,{
            method : 'POST',    
            body : JSON.stringify(user),
            headers : {
                'content-type' : "application/json"
            }
        })
        const b = await a.json()
        alert('Your accoutn is successfully created.')
        setUser(dummyUser)
    }
    return (
        <>
            <div>
                <input name="email" onChange={inputHandler} type="text" placeholder="Enter your email"/><br />
                <input name="password" onChange={inputHandler} type="text" placeholder="Enter your password"/><br />
                <br />
                <div style={{
                    display : "flex",
                    margin : 'auto',
                    width : "200px",
                    justifyContent : 'space-between'
                }}>
                    <button onClick={()=>signIn()}>SignIn</button>
                    <button onClick={()=>signUp()}>SignUp</button>
                </div>
            </div>
        </>
    )
}