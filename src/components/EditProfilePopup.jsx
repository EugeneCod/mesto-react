import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import PopupWithForm from './PopupWithForm';


function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
    setName('');
    description('')
  }

  useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser])

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
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
          id="name"
          placeholder="Имя"
          required minLength="2"
          maxLength="40"
          className="editing-form__input-line editing-form__input-line_assignment_user-name" />
        <span className="editing-form__input-error editing-form__input-error_for_name"></span>
      </label>
      <label className="editing-form__field">
        <input type="text"
          onChange={e => setDescription(e.target.value)}
          value={description}
          name="about"
          id="about-self"
          placeholder="О себе"
          required
          minLength="2"
          maxLength="200"
          className="editing-form__input-line editing-form__input-line_assignment_about-self" />
        <span className="editing-form__input-error editing-form__input-error_for_about-self"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditProfilePopup