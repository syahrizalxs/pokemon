import React, { useState, useEffect } from 'react'

import { css } from '@emotion/css'

import './PokemonList.scss'

import { GET_ALL_POKEMONS } from '../../GraphQL/queries/pokemons'
import { useQuery } from '@apollo/client'
import Card from '../../components/Card/Card'
import { useHistory } from 'react-router'
import DetailedPokemon from '../Pokemon/DetailedPokemon'

const isSmallDevice = window.screen.width < 600

export default function PokemonList() {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, { variables: { limit: isSmallDevice ? 20 : 40 } })
  const [pokemons, setPokemons] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [name, setName] = useState('')
  


  const history = useHistory()
  
  useEffect(() => {
    setPokemons(data)
  }, [data])

  const skeletonLoader = [1, 2, 3, 4 ,5 , 6, 7, 8]
  
  if (error) return `Error! ${error.message}`;

  const detailPokemon = (item) => {
    setShowDetail(true)
    setName(item.name)
  }

  const onDetailClick = (value) => {
    setShowDetail(value)
  }

  return (
    <main>
      <div className="pokemon-list">
        <div className="pokemon-list-head">
          <span>These are all the pokemon!</span>
        </div>
        <div className='pokemon-list-items'>
          {pokemons && pokemons.pokemons && pokemons.pokemons.results.map((item, index) => {
            return <Card className={css`
              display: inline-block;
              margin: .3rem 1rem;
              `} 
              key={index}
              image={item.image}
              name={item.name}
              url={item.url}
              onClick={() => { detailPokemon(item) }}
              />
          })}
          {
            !pokemons && skeletonLoader.map((item, index) => {
              return <Card key={index} />
            })
          }
        </div> 
      </div>
      <div className="pokemon-detail">
        { showDetail && <DetailedPokemon name={name} onShowUpdate={onDetailClick} /> }
      </div>
    </main>
  )
}
