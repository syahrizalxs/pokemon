import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'

import './assets/styles/main.scss'

import PokemonList from './components/PokemonList/PokemonList'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/pokemon-list" exact component={PokemonList} />
        <Route path="/my-catch" exact component={() => 'My Catch page soon'} />
        <Route path="/" render={() => <Redirect to='/pokemon-list' />} />
        <Route component={() => 404} />
      </Switch>
    </Router>
  )
}

export default App
