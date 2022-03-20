import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {AccountContextProvider} from './Contexts/AccountContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AccountContextProvider>
      <App />
    </AccountContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
