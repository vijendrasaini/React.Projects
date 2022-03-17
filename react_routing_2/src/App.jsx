import './App.css'
import { Route, Routes } from 'react-router-dom'
import { About } from '../../react_routing_2/src/Components/About'
import { Navbar } from '../../react_routing_2/src/Components/Navbar'
import { Users } from '../../react_routing_2/src/Components/Users'
import { User } from '../../react_routing_2/src/Components/User'
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
