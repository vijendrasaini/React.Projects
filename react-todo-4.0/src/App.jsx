import './App.css'
import {Input } from './Component/Input'
import {Table } from './Component/Table'
import { Navbar } from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Login} from './Component/Login'
import { useContext } from 'react'
import { AccountContext } from './Contexts/AccountContext'
import { Profile } from './Component/Profile'
function App() {
const { token } = useContext(AccountContext)
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Navbar/>
      <Routes>
        <Route path="/addtask" element={<Input/>}/>
        <Route path="/tasks" element={<Table/>}/>
        { token? <Route path='/profile' element={<Profile/>}/>:<Route path='/account' element={<Login/>}/> }
      </Routes>
    </div>
  )
}

export default App
