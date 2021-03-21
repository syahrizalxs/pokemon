import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'

import './assets/styles/main.scss'

import PokemonList from './pages/PokemonList/PokemonList'

import { ApolloProvider } from '@apollo/client'

import { client } from './GraphQL/index'
import DetailedPokemon from './pages/Pokemon/DetailedPokemon'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/pokemon-list" exact component={PokemonList} />
          <Route path="/my-catch" exact component={() => 'My Catch page soon'} />
          <Route path="/detail/:id" exact component={DetailedPokemon} />
          <Route path="/" render={() => <Redirect to='/pokemon-list' />} />
          <Route component={() => 404} />
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

export default App
