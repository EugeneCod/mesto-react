import React, { useState } from 'react';
import addIcon from '../images/profile__add-icon.svg';
import editIcon from '../images/profile__edit-icon.svg';
import api from '../utils/api'

function Main({onEditAvatar, onEditProfile, onAddPlace }) {
  const [userName, setUserName] = useState('');
  const [userDescription , setUserDescription ] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch(err => console.log(`${err} при первичной загрузке данных`));
  }, userName, userDescription, userAvatar)

  return (
    <main className="content">
      <section className="profile" aria-label="Информация о пользователе">
        <div 
          className="profile__image-container"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }} 
        >
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about-self">{userDescription}</p>
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