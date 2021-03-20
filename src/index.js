import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/main.css'

import App from './App'

const rootEl = document.getElementById('app')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, rootEl)