import React from 'react'

function Card({ card }) {
  return (
    <li key={card._id} className="elements__element">
      <div className="elements__image"
        style={{ backgroundImage: `url(${card.link})` }}
      />
      <p className="elements__location">{card.name}</p>
      <div className="elements__button-like-container">
        <button type="button" className="elements__button-like"></button>
        <p className="elements__likes-counter">{card.likes.length}</p>
      </div>
      <button type="button" className="elements__button-delete"></button>
    </li> 
  )
}

export default Card