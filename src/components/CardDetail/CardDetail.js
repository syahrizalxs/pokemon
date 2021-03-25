import { css } from '@emotion/css'
import React, { useCallback, useEffect, useState } from 'react'

import { colorType } from '../../constant/pokemon-type-color'

import { getPokemon, savePokemon } from '../../helper/Storage'
import useModal from '../../Hooks/useModal'
import Modal from '../../components/Modal/Modal'


import './CardDetail.scss'

function CardDetail({ props, isFromMyPokemon, nickName, closeDetail, onDoneRemovePokemon }) {
  const {isShowing, toggle} = useModal();


  
  const [message, setMessage] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [nickname, setNickname] = useState('')
  const [pokemonList, setPokemonList] = useState(getPokemon || [])

  const onAddPokemon = () => {
    
    // Handle for new browser because initial value is Null
    const param = {...props, nickname}
    if (!pokemonList) {
      savePokemon([param])
    } else {
      
      // Check if nickname exist
      const isNickNameExist = pokemonList.filter(item => item.nickname === nickname)
      if (isNickNameExist.length > 0) {
        console.log(isNickNameExist)
        alert('This nickname has been used')
        return
      }

      let existingPokemonList = pokemonList
      existingPokemonList.push(param)
      savePokemon(existingPokemonList)
    }
    setShowForm(false)
    setNickname('')
    setMessage('')
  }

  const onChangeHandler = event => {
    setNickname(event.target.value);
  }

  const catchPokemon = (props) => {
    setMessage('')
    const number = Math.random()
    if (number < 0.5) {
      setShowForm(true)
      setMessage('Yeay you got this Pokemon!')
    } else {
      setMessage('You almost got it! Try Again!')
    }
  }

  const releasePokemon = () => {
    const newPokemonList = pokemonList.filter(item => item.nickname !== nickName)

    // Save to local Storage
    savePokemon(newPokemonList)

    // Save to state
    setPokemonList(newPokemonList)
    
    onDoneRemovePokemon(count => count + 1)
    toggle()
    closeDetail()
  }

  const checkIfAlreadyHaveSamePokemon = () => {
    let isExist = []
    if (!pokemonList) return false
    if (pokemonList.length > 0) {
      isExist = pokemonList.filter(item => item.name === props.name)
    }
    return isExist.length > 0
  }

  const DeleteConfirmation = () => {
    return (
      <div className={css`
        display: flex;
        flex-direction: column;
      `}>
        <span>Are you sure want to release this pokemon ?</span>
        <button 
          className={css`
            border: 1px solid red;
            border-radius: 8px;
            max-width: 100px;
            margin: 20px 0;
            background-color: #fff;
            text-align: center;
            align-self: flex-end;
            color: red;
          `}
          onClick={() => releasePokemon()}
        >Release</button>
      </div>
      
    )
  }

  return (
    <div>
      <div className="card-detail">
        <div className="image-card-detail">
          {props &&  <img src={`https://pokeres.bastionbot.org/images/pokemon/${
							props.id
						}.png`} alt={props.name}></img>
          }
        </div>
        <div className="detail-card-action">
          { !isFromMyPokemon && !showForm &&
            <button className="catch-button" onClick={() => catchPokemon(props)}>
              <span>CATCH</span>
            </button>
          }
          { isFromMyPokemon &&
            <button className="catch-button" onClick={toggle}>
              <span>RELEASE</span>
            </button>
          }
        </div>
        <p className="catch-message" style={{ color: showForm ? 'green' : 'red' }}>
          { message }
        </p>
        {
          showForm && (
            <div className="form">
              <input placeholder="Nickname" value={nickname} onChange={onChangeHandler}></input>
              { nickname && <button  className="add-button" onClick={() => onAddPokemon()}>ADD</button> }
            </div>
          )
        }
        <div className="detail-card-detail">
          <span className="pokemon-name">{props.name}</span>
          { 
            !isFromMyPokemon && checkIfAlreadyHaveSamePokemon() && 
            <span className={css`
              text-align: center;
              margin-top: 4px;
              color: green;
            `}>Owned</span>
          }

          { 
            isFromMyPokemon && 
            <span className={css`
              text-align: center;
              margin-top: 4px;
              color: green;
            `}>{nickName}</span>
          }
          <div className="abilities">
            <span>abilities</span>
            <div className="ability-list">
              {
                props.abilities.map((item, index) => {
                  return <span className="tag" key={index}>{item.ability.name}</span>
                })
              } 
            </div>
          </div>
          <div className="moves">
            <span>moves</span>
            <div className="move-list">
              {
                props.moves.map((item, index) => {
                  if (index) {
                    return <span className="tag" key={index}>{item.move.name}</span>
                  }
                })
              }
            </div>
          </div>

          <div className="types">
            <span>Types</span>
            <div className="type-list">
              {
                props && props.types && props.types.map((item, index) => {
                  return <span className="tag" style={{backgroundColor: colorType[item.type.name], color: '#fff'}} key={index}>{item.type.name}</span>
                })
              }
            </div>
          </div>

          <div className="stats">
            <span>Stats</span>
            <div className="stat-list">
              {
                props && props.stats && props.stats.map((item, index) => {
                  return (
                    <div className="stat-container" key={index}>
                      <div className="stat-type">
                        <span>{item.stat.name}</span>
                        <span>{item.base_stat}</span>
                      </div>
                      <div className="stat-detail" style={{width: `${item.base_stat / 2}%`}}>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
      <Modal 
        isShowing={isShowing}
        hide={toggle}
        content={<DeleteConfirmation />}
      >
      </Modal>
    </div>
  )
}

export default CardDetail
