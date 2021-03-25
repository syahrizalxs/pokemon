import React, { useState, useEffect, useContext } from 'react'

import { css } from '@emotion/css'

import './PokemonList.scss'

import { GET_ALL_POKEMONS } from '../../GraphQL/queries/pokemons'
import { useQuery } from '@apollo/client'
import Card from '../../components/Card/Card'
import DetailedPokemon from '../Pokemon/DetailedPokemon'

import ThemeContext from '../../context/ThemeContext'

const isSmallDevice = window.screen.width < 600


export default function PokemonList() {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, { variables: { limit: isSmallDevice ? 50 : 100 } })
  const [pokemons, setPokemons] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [name, setName] = useState('')
  
  const themeContext = useContext(ThemeContext)
  
  useEffect(() => {
    setPokemons(data)
    console.log({ history })
  }, [data])

  const skeletonLoader = [1, 2, 3, 4 ,5 , 6, 7, 8]
  
  if (error) return `Error! ${error.message}`;

  const detailPokemon = (item) => {
    const el = document.getElementById('pokemon-list')
    el.style.overflow = 'hidden'
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
        <div id="pokemon-list" className='pokemon-list-items'>
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
        { showDetail && <DetailedPokemon name={name} isFromMyPokemon={false} onShowUpdate={onDetailClick} /> }
      </div>
    </main>
  )
}
