import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import BackButton from '../../components/BackButton/BackButton'
import CardDetail from '../../components/CardDetail/CardDetail'
import { GET_POKEMON_DETAIL } from '../../GraphQL/queries/pokemons'

function DetailedPokemon() {
  const { id } = useParams()
  
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, { variables: { name: id }})
  

  const [detail, setDetail] = useState({})
  const isSmallDevice = window.screen.width < 600
  

  console.log({ data, loading, error })
  useEffect(() => {
    setDetail(data)  
    console.log({ detail })
  }, [data])

  return (
    <div className="detailed-pokemon">
      {loading && 'Loading'}
      {!loading && isSmallDevice && <BackButton />}
      { detail && detail.pokemon && <CardDetail name={detail.pokemon.name} /> }
    </div>
  )
}

export default DetailedPokemon
