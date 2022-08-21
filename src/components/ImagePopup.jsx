import React from 'react';
import closeIcon from '../images/popup__close-icon.svg';

function ImagePopup({name, link}) {
  return (
    <div className="popup popup_contain_picture">
      <div className="popup__container popup__container_contain_picture">
        <button type="button" className="popup__close-button">
          <img src={closeIcon} alt="Закрыть" className="popup__close-icon"/>
        </button>
        <img src={link} alt={name} className="popup__image"/>
        <p className="popup__image-caption">{name}</p>
      </div>
    </div>
  )
}

export default ImagePopup