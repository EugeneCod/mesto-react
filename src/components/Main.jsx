import React from 'react';
import addIcon from '../images/profile__add-icon.svg';
import editIcon from '../images/profile__edit-icon.svg';

function Main({onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="content">
      <section className="profile" aria-label="Информация о пользователе">
        <div className="profile__image-container">
          <img onClick={onEditAvatar} src="#" alt="Аватар" className="profile__image"/>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__name">Имя пользователя</h1>
          <p className="profile__about-self"></p>
          <button onClick={onEditProfile} type="button" className="profile__edit-button">
            <img src={editIcon} alt="Редактировать профиль"
              className="profile__edit-icon"/>
          </button>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button">
          <img src={addIcon} alt="Добавить изображение"
            className="profile__add-icon"/>
        </button>
      </section>
      <ul className="elements">
      </ul>
    </main>
  )
}

export default Main