import { useQuery } from '@apollo/client'
import { css } from '@emotion/css'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import BackButton from '../../components/BackButton/BackButton'
import CardDetail from '../../components/CardDetail/CardDetail'
import { GET_POKEMON_DETAIL } from '../../GraphQL/queries/pokemons'

import './DetailedPokemon.scss'

function DetailedPokemon({ name, onShowUpdate }) {
  // const { id } = useParams()
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, { variables: { name: name }})
  
  const [detail, setDetail] = useState({})
  const isSmallDevice = window.screen.width < 600

  const close = () => {
    onShowUpdate(false)
  }
  

  const catchPokemon = () => {
    const number = Math.random()
  }
  

  useEffect(() => {
    setDetail(data)
  }, [data])

  return (
    <div id="wrapper" className="detailed-pokemon">
      <div className="close-button">
        <span onClick={() => close()}>x</span>
      </div>
      {data && data.pokemon && <CardDetail props={data.pokemon} onClick={catchPokemon}/>}
    </div>
  )
}

export default DetailedPokemon
