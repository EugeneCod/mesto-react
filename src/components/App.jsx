import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState()

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
    setSelectedCard()
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
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
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <label className="editing-form__field">
              <input type="url" name="avatar" id="avatar" placeholder="Ссылка на картинку" required
                className="editing-form__input-line editing-form__input-line_assignment_avatar" />
              <span className="editing-form__input-error editing-form__input-error_for_avatar"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            title="Редактировать профиль"
            name="edit-profile"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <label className="editing-form__field">
              <input type="text" name="name" id="name" placeholder="Имя" required minLength="2" maxLength="40"
                className="editing-form__input-line editing-form__input-line_assignment_user-name" />
              <span className="editing-form__input-error editing-form__input-error_for_name"></span>
            </label>
            <label className="editing-form__field">
              <input type="text" name="about" id="about-self" placeholder="О себе" required minLength="2" maxLength="200"
                className="editing-form__input-line editing-form__input-line_assignment_about-self" />
              <span className="editing-form__input-error editing-form__input-error_for_about-self"></span>
            </label>
          </PopupWithForm>
          <PopupWithForm
            title="Новое место"
            name="add-cards"
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
        {/*   <PopupWithForm
            title="Вы уверены?"
            name="confirm"
            isOpen={isConfirmPopupOpen}
            onClose={closeAllPopups}
          /> */}
          <ImagePopup
            onClose={closeAllPopups}
            card={selectedCard}
          />
          {/*     
          <div className="popup popup_contain_picture">
            <div className="popup__container popup__container_contain_picture">
              <button type="button" className="popup__close-button">
                <img src={closeIcon} alt="Закрыть" className="popup__close-icon"/>
              </button>
              <img src="#" alt="" className="popup__image"/>
              <p className="popup__image-caption"></p>
            </div>
          </div>
          <div className="popup popup_contain_confirm">
            <div className="popup__container popup__container_contain_confirm">
              <button type="button" className="popup__close-button">
                <img src={closeIcon} alt="Закрыть" className="popup__close-icon"/>
              </button>
              <form novalidate name="confirm" className="editing-form editing-form_related-to_confirm"
                id="confirm" method="get">
                <fieldset className="editing-form__fieldset" form="confirm">
                  <legend className="editing-form__legend editing-form__legend_related-to_confirm">
                    Вы уверены?
                  </legend>
                  <button type="submit" className="editing-form__button">Да</button>
                </fieldset>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
