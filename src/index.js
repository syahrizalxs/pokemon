import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const rootEl = document.getElementById('app')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, rootEl)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
   .then(registration => {
      // console.log('SW registered: ', registration);
    }).catch(registrationError => {
      // console.log('SW registration failed: ', registrationError);
    });
  });
}