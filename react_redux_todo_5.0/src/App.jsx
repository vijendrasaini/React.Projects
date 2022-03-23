import './App.css'
import { Navbar } from './Components/Navbar'
import { Route, Routes} from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
function App() {
  
  return (
    <div className="App">
      <Navbar/>      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
