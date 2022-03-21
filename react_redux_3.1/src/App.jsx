import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const mystate = useSelector((state)=>state.changeTheNumber)
  return (
    <div className="App">
        <h1>Counter</h1>
        <div>
          <button> - </button>
          <input type="text" value={mystate}/>
          <button onClick={ incNumber }> + </button>
        </div>
    </div>
  )
}

export default App
