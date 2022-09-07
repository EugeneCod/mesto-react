import React, { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useForm } from '../hooks/useForm';
import Input from './Input';
import PopupWithForm from './PopupWithForm';


function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {

  const currentUser = useContext(CurrentUserContext);

  const {values, setValues, handleChange} = useForm({});
  const [formValid, setFormValid] = useState(true);
  const [inputValid, setInputValid] = useState({name: true, link: true})

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
  }

  useEffect(() => {
    setValues({
      name: currentUser.name || '',
      about: currentUser.about || '',
    })
  }, [currentUser])

  useEffect(() => {
    if (inputValid.name === false || inputValid.about === false) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [inputValid, formValid])

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      buttonText={buttonText}
      valid={formValid}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <Input 
        value={values.name || ''}
        onChange={handleChange}
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        inputValid={inputValid}
        setInputValid={setInputValid}
      />
      <Input 
        value={values.about || ''}
        onChange={handleChange}
        type="text"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        inputValid={inputValid}
        setInputValid={setInputValid}
      />
    </PopupWithForm>
  )
}

export default EditProfilePopup