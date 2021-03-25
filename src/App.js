import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'

import './assets/styles/main.scss'

import PokemonList from './pages/PokemonList/PokemonList'
import MyPokemonList from './pages/MyPokemonList/MyPokemonList'

import { ApolloProvider } from '@apollo/client'

import { client } from './GraphQL/index'
import DetailedPokemon from './pages/Pokemon/DetailedPokemon'
import { ThemeContextProvider } from './context/ThemeContext'
import { theme } from './constant/Theme'

function App() {
  return (
    <ThemeContextProvider value={theme}>
      <ApolloProvider client={client}>
        <Router>
          <Navigation />
            <Switch>
              <Route path="/pokemon" exact component={PokemonList} />
              <Route path="/my-pokemon" exact component={MyPokemonList} />
              <Route path="/pokemon-detail/:id" exact component={DetailedPokemon} />
              <Route path="/" render={() => <Redirect to='/pokemon' />} />
              <Route component={() => 404} />
            </Switch>
        </Router>
      </ApolloProvider>
    </ThemeContextProvider>
  )
}

export default App
