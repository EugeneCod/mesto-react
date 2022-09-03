import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import addIcon from '../images/profile__add-icon.svg';
import editIcon from '../images/profile__edit-icon.svg';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([])

  console.log(currentUser.name);
  useEffect(() => {
      api.getCards()
    .then(res => setCards(res))
    .catch(err => console.log(`${err} при загрузке карточек`));
  }, [])
  // cards

  return (
    <main className="content">
      <section className="profile" aria-label="Информация о пользователе">
        <div 
          className="profile__image-container"
          onClick={onEditAvatar}
          style={{ backgroundImage: `url(${currentUser.avatar})` }} 
        >
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <p className="profile__about-self">{currentUser.about}</p>
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
      <ul className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick}/>
        ))}
      </ul>
    </main>
  )
}

export default Main

