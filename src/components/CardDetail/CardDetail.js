import React, { useEffect } from 'react'

import './CardDetail.scss'

function CardDetail({ props, image, onClick }) {
  useEffect(() => {
  }, [])

  return (
    <div>
      <div className="card-detail">
        <div className="image-card-detail">
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${
							props.id
						}.png`} alt={props.name}></img>
        </div>
        <div className="detail-card-detail">
          <span>{props.name}</span>
          <p>Abilities</p>
          <ul>
           {
            props.abilities.map((item, index) => {
              return <li key={index}>- {item.ability.name}</li>
            })
           } 
          </ul>

          <p>Moves: {props.moves.length}</p>
          <p>Types</p>
          {
            props.types.map((item, index) => {
              return <li key={index}>{item.type.name}</li>
            })
          }
        </div>
        <div className="detail-card-action">
          <button className="catch-button" onClick={onClick}>Catch the pokemon!</button>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
