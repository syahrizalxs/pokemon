import { css } from '@emotion/css'
import React from 'react'

import './Card.scss'

function Card({ name, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="image-card">
        {image && <img className="image" src={image} alt={name}></img>}
        <span></span>
      </div>
      <div className="detail-card">
        { name &&
          <span 
            className={css`
            cursor: pointer;
            `}
          >{name}</span>  
        }
        {
          !name && <span className="detail-card loading animation"></span>
        }
      </div>
    </div>
  )
}

export default Card
