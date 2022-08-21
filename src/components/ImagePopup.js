import React from 'react';
import closeIcon from '../images/popup__close-icon.svg';

function ImagePopup({ onClose, card }) {

  return (
    <div className={`popup popup_contain_picture ${Object.keys(card).length !== 0 && 'popup_opened'}`}>
      <div className="popup__container popup__container_contain_picture">
        <button onClick={onClose} type="button" className="popup__close-button">
          <img src={closeIcon} alt="Закрыть" className="popup__close-icon"/>
        </button>
        <img src={card && card.link} alt={card && card.name} className="popup__image"/>
        <p className="popup__image-caption">{card && card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup