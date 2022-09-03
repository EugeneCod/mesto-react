import React, { useEffect, useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../context/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [curentUser, setCurrentUser] = useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIisEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIisEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({})
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userInfo) {
    api.setUserInfo(userInfo)
    .then(res => setCurrentUser(res))
    closeAllPopups();
  }

  useEffect(() => {
    api.getUserInfo()
    .then(res => setCurrentUser(res))
    .catch(err => console.log(`${err} при получении данных о пользователе`))
  }, [])

  return (
    <CurrentUserContext.Provider value={
      curentUser
    }>
      <div className="App" id="app">
      <div className="wrapper">
        <div className="container container_for_header">
          <Header />
        </div>
        <div className="container">
          <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            title="Обновить аватар"
            name="edit-avatar"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="editing-form__field">
              <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required
                className="editing-form__input-line editing-form__input-line_assignment_avatar" />
              <span className="editing-form__input-error editing-form__input-error_for_avatar"></span>
            </label>
          </PopupWithForm>
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          /> 
          <PopupWithForm
            title="Новое место"
            name="add-cards"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="editing-form__field">
              <input type="text" name="name" id="location" placeholder="Название" required minLength="2"
                maxLength="30" className="editing-form__input-line editing-form__input-line_assignment_location" />
              <span className="editing-form__input-error editing-form__input-error_for_location"></span>
            </label>
            <label className="editing-form__field">
              <input type="url" name="link" id="link" placeholder="Ссылка на картинку" required
                className="editing-form__input-line editing-form__input-line_assignment_link" />
              <span className="editing-form__input-error editing-form__input-error_for_link"></span>
            </label>
          </PopupWithForm>
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </div>
      </div>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
