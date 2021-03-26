import React, { useState } from 'react'

import { css } from '@emotion/css'

// import './PokemonList.scss'
import Card from '../../components/Card/Card'
import DetailedPokemon from '../Pokemon/DetailedPokemon'
import { getPokemon } from '../../helper/Storage'
import { useHistory } from 'react-router-dom'

export default function MyPokemonList() {
  const [pokemonList, setPokemonList] = useState(getPokemon)
  const [showDetail, setShowDetail] = useState(false)
  const [name, setName] = useState('')
  const [nickName, setNickname] = useState('')

  let history = useHistory()

  const onDoneRemove = () => {
    setPokemonList(getPokemon)
  }

  const detailPokemon = (item) => {
    const el = document.getElementById('pokemon-list')
    el.style.overflow = 'hidden'
    setShowDetail(true)
    setName(item.name)
    setNickname(item.nickname)
  }


  const onDetailClick = (value) => {
    setShowDetail(value)
  }

  const go = () => {
    history.push('/pokemon')
  }
  return (
    <main>
      <div className="pokemon-list">
        <div className="pokemon-list-head">
          {pokemonList.length > 0 && <span>My Pokemon List!</span>}
        </div>
        <div id="pokemon-list" className='pokemon-list-items'>
          {pokemonList.length > 0 && pokemonList.map((item, index) => {
            return <Card className={css`
              display: inline-block;
              margin: .3rem 1rem;
              `} 
              key={index}
              image={item.image}
              name={item.name}
              nickname={item.nickname}
              url={item.url}
              id={item.id}
              onClick={() => { detailPokemon(item) }}
              />
          })}

        </div> 
        {
          pokemonList.length === 0 && (
            <div className="empty-list">
              <span style={{ justifyContent: 'center', alignItems: 'center' }}>You don't have any pokemon yet!</span>
              <button onClick={() => go()}>GO CATCH POKEMON</button>
            </div>
          )
        }
      </div>
      <div className="pokemon-detail">
        { showDetail && <DetailedPokemon name={name} isFromMyPokemon={true} nickName={nickName} onDeletePokemon={onDoneRemove} onShowUpdate={onDetailClick} /> }
      </div>
    </main>
  )
}
