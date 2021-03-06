import { css } from '@emotion/css'
import React from 'react'

import './Card.scss'

function Card({ name, image, url, onClick, id, nickname }) {
  const GetNumberOfPokemon = (url) => {
    if (!url) return
    const arr = url.split('/')
    let number = arr[arr.length - 2]
    return `#${number}` 
  }
  
  return (
    <div className="card" onClick={onClick}>
      <div className="image-card">
        { image && 
          <img 
            className="image" 
            rel="preload"
            as="image"
            src={image}
            alt={name}
          ></img>
        }
        { id && 
          <img 
            className="image" 
            rel="preload"
            as="image"
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt={name}
          ></img>
        }
        
      </div>
      <div className="detail-card">
        <div className="pokemon-number">
          <span>
            {url && GetNumberOfPokemon(url)} 
            {id && id} 
          </span>
        </div>
        <div className="pokemon-name">
          { name &&
            <span
            className={css`
            cursor: pointer;
            `}
            >{name} 
            </span>
          }
        </div>
        {
          nickname && 
          <span
            className={css`
              text-align: center;
              font-size: 12px;
              color: #ccc;
            `}
          >
            {nickname}
          </span>
        }
        {
          !name && <span className="detail-card loading animation"></span>
        }
      </div>
    </div>
  )
}

export default Card
