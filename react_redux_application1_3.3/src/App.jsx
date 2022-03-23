import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Counter } from './Components/Counter'
import { Todo } from './Components/Todo'
import { Home } from './Components/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>APNA TODO APPLICATION</h1>
      <div style={ { display : 'flex', justifyContent : "space-evenly", width : "60%", margin : "auto"} }>
        <a href="/">Home</a><a href="/">Help</a>
      </div>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='todo/:id' element={<Todo/>}/>
      </Routes>
    </div>
  )
}

export default App
