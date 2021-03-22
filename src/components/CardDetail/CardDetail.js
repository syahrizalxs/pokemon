import React from 'react'

import './CardDetail.scss'

function CardDetail({ name }) {
  return (
    <div>
      <div className="card-detail">
        <div className="image-card-detail">
          {/* <img src={image} alt={name}></img> */}
        </div>
        <div className="detail-card-detail">
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default CardDetail
