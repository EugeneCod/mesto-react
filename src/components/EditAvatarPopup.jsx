import React, { useRef } from 'react'
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  
  const inputRef = useRef()

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="editing-form__field">
        <input
          ref={inputRef}
          type="url"
          name="avatar"
          id="avatar"
          placeholder="Ссылка на картинку"
          required
          className="editing-form__input-line editing-form__input-line_assignment_avatar" />
        <span className="editing-form__input-error editing-form__input-error_for_avatar"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup