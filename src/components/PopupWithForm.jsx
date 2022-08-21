import React from 'react';
import closeIcon from '../images/popup__close-icon.svg';

function PopupWithForm({ children, title, name, isOpen, onClose }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button onClick={onClose} type="button" className="popup__close-button">
          <img src={closeIcon} alt="Закрыть" className="popup__close-icon" />
        </button>
        <form novalidate name={name} className={`editing-form editing-form_related-to_${name}`}
          id={name} method="get">
          <fieldset className="editing-form__fieldset" form={name}>
            <legend className="editing-form__legend">{title}
            </legend>
            {children}
            <button type="submit" className="editing-form__button">Сохранить</button>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm

// props.children