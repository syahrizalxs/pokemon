import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import CardDetail from '../../components/CardDetail/CardDetail'
import { GET_POKEMON_DETAIL } from '../../GraphQL/queries/pokemons'

import './DetailedPokemon.scss'

function DetailedPokemon({ name, onShowUpdate, onDeletePokemon, isFromMyPokemon, nickName }) {
  // const { id } = useParams()
  const { error, data } = useQuery(GET_POKEMON_DETAIL, { variables: { name: name }})

  if (error) return 'Something went wrong!'

  const [detail, setDetail] = useState({})

  const close = () => {
    onShowUpdate(false)
  }
  const removePokemon = () => {
    onDeletePokemon(count => count + 1)
  }
  

  useEffect(() => {
    setDetail(data)
  }, [data])

  return (
    <div id="wrapper" className="detailed-pokemon">
      <div className="close-button">
        <span onClick={() => close()}>x</span>
      </div>
      {data && data.pokemon && <CardDetail props={data.pokemon} isFromMyPokemon={isFromMyPokemon} nickName={nickName} onDoneRemovePokemon={removePokemon} closeDetail={close}/>}
    </div>
  )
}

export default DetailedPokemon
