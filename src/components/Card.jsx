import React, { useContext } from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext';


function Card({ card, onCardClick }) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__button-delete ${isOwn ? 'card__button-delete_visible' : 'card__button-delete_hidden'}`
  )
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = (`card__button-like ${isLiked && 'card__button-like_active'}`)

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card">
      <div className="card__image-container"
        style={{ backgroundImage: `url(${card.link})` }}
        onClick={handleClick}
      />
      <p className="card__location">{card.name}</p>
      <div className="card__button-like-container">
        <button type="button" className={cardLikeButtonClassName}></button>
        <p className="card__likes-counter">{card.likes.length}</p>
      </div>
      <button type="button" className={cardDeleteButtonClassName}></button>
    </li> 
  )
}

export default Card