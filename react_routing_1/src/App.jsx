import './App.css'
import { Route, Routes } from 'react-router-dom'
import { About } from './Components/About'
import { Navbar } from './Components/Navbar'
import { Users } from './Components/Users'
import { User } from './Components/User'
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path='/users' element={<Users/>}/>
      <Route path='/user/:id' element={<User/>}/>
    </Routes>
    </div>
  )
}

export default App
