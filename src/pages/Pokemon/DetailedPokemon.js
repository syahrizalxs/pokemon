import { useQuery } from '@apollo/client'
import { css } from '@emotion/css'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import BackButton from '../../components/BackButton/BackButton'
import CardDetail from '../../components/CardDetail/CardDetail'
import { GET_POKEMON_DETAIL } from '../../GraphQL/queries/pokemons'

function DetailedPokemon() {
  const { id } = useParams()
  const { state: { params } } = useLocation()  
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, { variables: { name: id }})
  

  const [detail, setDetail] = useState({})
  const isSmallDevice = window.screen.width < 600

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const catchPokemon = () => {
    
    let dapetPokemon = 0
    let gakDapet = 0


  }
  

  useEffect(() => {
    setDetail(data)  
  }, [data])

  return (
    <div className="detailed-pokemon">
      {loading && 'Loading'}
      {!loading && isSmallDevice && <BackButton className={css`
        margin-bottom: 14px;
      `} />}
      { detail && detail.pokemon && <CardDetail props={ detail.pokemon } image={params.image} onClick={() => { catchPokemon() }} /> }
    </div>
  )
}

export default DetailedPokemon
