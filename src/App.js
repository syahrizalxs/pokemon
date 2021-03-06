import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'

import './assets/styles/main.scss'

const MyPokemonList = React.lazy(() => import('./pages/MyPokemonList/MyPokemonList'))
const DetailedPokemon = React.lazy(() => import( './pages/Pokemon/DetailedPokemon'))
const PokemonList = React.lazy(() => import('./pages/PokemonList/PokemonList'))

import { ApolloProvider } from '@apollo/client'

import { client } from './GraphQL/index'
import { ThemeContextProvider } from './context/ThemeContext'
import { theme } from './constant/Theme'

const Loading = () => {
  return <span>Loading</span>
}

const App = () => {
  return (
    <Suspense fallback={Loading()}>
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
    </Suspense>
  )
}

export default App
