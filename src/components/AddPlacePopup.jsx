import React, { useState } from 'react'
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, buttonText }) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name,
      link,
    });
    setName('');
    setLink('');
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="add-cards"
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="editing-form__field">
        <input
          onChange={e => setName(e.target.value)}
          value={name}
          type="text"
          name="name"
          id="location"
          placeholder="Название"
          required
          minLength="2"
          maxLength="30"
          className="editing-form__input-line editing-form__input-line_assignment_location" />
        <span className="editing-form__input-error editing-form__input-error_for_location"></span>
      </label>
      <label className="editing-form__field">
        <input
          onChange={e => setLink(e.target.value)}
          value={link}
          type="url"
          name="link"
          id="link"
          placeholder="Ссылка на картинку"
          required
          className="editing-form__input-line editing-form__input-line_assignment_link" />
        <span className="editing-form__input-error editing-form__input-error_for_link"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup