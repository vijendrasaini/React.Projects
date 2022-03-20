import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AccountContext } from '../Contexts/AccountContext'

export function Navbar(){
    const { token} = useContext(AccountContext)
     return (
         <>
            <div style={{
                display : "flex",
                justifyContent: "space-evenly",
                margin : "auto",
                width : "40%",
                fontWeight : "bold",
                marginBottom : "50px"
            }}>
                <Link to="/">Home</Link>
                <Link to="/tasks">View Your Tasks</Link>
                <Link to="/addtask">Add Task</Link>
                <Link to='/account'> {token?token.name : "SignIn/SignUp"}</Link>
            </div>
         </>
     )
}
