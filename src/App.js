import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          {/* <Route path="/" render={() => <Redirect to='/home' />} /> */}
          {/* <Route component={() => 404} /> */}
        </Switch>
      </div>
    </Router>
  )
}

export default App
