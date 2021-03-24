import React, { useEffect, useState } from 'react'

import { colorType } from '../../constant/pokemon-type-color'

import './CardDetail.scss'

function CardDetail({ props, onClick }) {
  useEffect(() => {
    console.log({ props })
  }, [props])

  const Form = () => {
    return (
      <div className="form">
        <input placeholder="Nickname"></input>
        <button className="add-button">ADD</button>
      </div>
    )
  }

  const catchPokemon = (props) => {
    const number = Math.random()
    if (number < 0.5) {
      setShowForm(true)
      setMessage('Yeay you got this Pokemon!')
    } else {
      setMessage('You almost got it! Try Again!')
    }
  }

  const [message, setMessage] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [nickname, setNickname] = useState('')

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
          { !showForm && <button className="catch-button" onClick={() => catchPokemon(props)}>
              <span>CATCH</span>
            </button>
          }
        </div>
        <span className="catch-message" style={{ color: showForm ? 'green' : 'red' }}>
          { message }
        </span>
        {
          showForm && <Form />
        }
        <div className="detail-card-detail">
          <span className="pokemon-name">{props.name}</span>
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
                  if (index <= 5) {
                    return <span className="tag" key={index}>{item.move.name}</span>
                  }
                })
              }
              <span>+{props.moves.length - 6} More</span>
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
        </div>
      </div>
    </div>
  )
}

export default CardDetail
