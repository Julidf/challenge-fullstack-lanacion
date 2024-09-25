import './header.css';
import menuIcon from '../../assets/icons/menu.svg';
import logoClub from '../../assets/logos/logo-club-color.svg';
import search from '../../assets/icons/search.svg';
import notification from '../../assets/icons/notification.svg';
import heart from '../../assets/icons/heart.svg';
import smilingFace from '../../assets/icons/smiling-face.svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <div className='header__left'>
          <img src={menuIcon} alt='menu' />
          <img src={logoClub} alt='logo-club' />
        </div>
        <div className='header__center'>
          <input type='text' placeholder='Busca un comercio...' className='header__search-input' />
          <input type='text' placeholder='Ingresa una ubicación...' className='header__location-input' />
          <div className='header__search'>
            <img src={search} alt='search'/>
          </div>
        </div>
        <div className='header__right'>
          <img src={notification} alt='notification' />
          <img src={heart} alt='heart' />
          <img src={smilingFace} alt='smiling-face' />
        </div>
      </div>
    </header>
  );
};

export default Header;
