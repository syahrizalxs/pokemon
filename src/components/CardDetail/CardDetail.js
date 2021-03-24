import React, { useEffect } from 'react'

import './CardDetail.scss'

function CardDetail({ props, onClick }) {
  useEffect(() => {
  }, [])

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
          <button className="catch-button" onClick={onClick}>
            <span>CATCH</span>
          </button>
        </div>
        <div className="detail-card-detail">
          <span className="pokemon-name">{props.name}</span>
          <div className="abilities">
            <span>abilities</span>
            <ul>
            {
              props.abilities.map((item, index) => {
                return <span className="tag" key={index}>{item.ability.name}</span>
              })
            } 
            </ul>
          </div>

          <p>Moves: {props.moves.length}</p>
          <p>Types</p>
          {
            props.types.map((item, index) => {
              return <span className="tag" key={index}>{item.type.name}</span>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default CardDetail
