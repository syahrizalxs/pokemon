import React from 'react'

import './Card.scss'

function Card({ name, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="image-card">
        <img src={image} alt={name}></img>
      </div>
      <div className="detail-card">
        <span>{name}</span>
      </div>
    </div>
  )
}

export default Card
