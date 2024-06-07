import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../UI/Button/Button';
import './Header.scss';
import Logo from '../Images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <div className='header__wrapper'>
                <div className="header__logo">
                    <img src={Logo} alt="CodeLab Logo" />
                </div>
                <div className="header__info">
                    <h1 className="header__info__title">
                        CodeLab
                    </h1>
                    <h2 className="header__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
                
            </div>

            <div className="header__description">
                <h1 className="header__description__title">
                    Тренируй свои навыки не напрягаясь
                </h1>
                <h2 className="header__description__subtitle">
                    Развивай свои навыки с помощью онлайн игр
                </h2>
            </div>
            <div className="header__button">
                <Button />
            </div>
            <div className="header__have-account" >
            <Link to={'SigninPage'} className="header__account-link" style={{ color: 'white'}}>
                    <p>У меня уже есть аккаунт</p>
                </Link>

            </div>
        </div>
    );
};

export default Header;
