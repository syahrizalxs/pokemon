import React, { useState, useEffect } from 'react'

// import { css } from '@emotion/css'
import './PokemonList.scss'

import { GET_ALL_POKEMONS } from '../../GraphQL/queries/pokemons'
import { useQuery } from '@apollo/client'


export default function PokemonList() {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, { variables: { limit: 10 } })
  
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    console.log(data)
    setPokemons(data)
  }, [data])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <main>
      <div className="pokemon-list">
        <div className="pokemon-list-head">
          <span>Here's all the pokemon!</span>
        </div>
        <div className='pokemon-list-items'>
          {pokemons && pokemons.pokemons && pokemons.pokemons.results.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })}
        </div> 
      </div>
    </main>
  )
}
