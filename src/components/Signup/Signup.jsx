import React from 'react';
import SignupButton from '../UI/Button/SignupButton';
import './Signup.scss';
import Logo from '../Images/logo.png'

const Signup = () => {
    return (
        <div className="signup">
            <div className='signup__wrapper'>
                <div className="signup__logo">
                    <img src={Logo} alt="CodeLab Logo" />
                </div>
                <div className="signup__info">
                    <h1 className="signup__info__title">
                        CodeLab
                    </h1>
                    <h2 className="signup__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
            </div>
            <div className="signup__description"> 
                <h2>Регистрация</h2>
                <form className='signup__description__form'  action="post">

                    <input className='signup__description__input' type="text" placeholder='E-mail'/> <br />
                    <input className='signup__description__input' type="password" placeholder='Пароль'/> <br />
                    <input className='signup__description__input' type="password" placeholder='Подтвердите пароль'/> <br />
                </form>
            </div>
            <div className="signup__button">
                <SignupButton />
            </div> <br />
            <div className="signup__have-account">
                <a href="#" className="signup__account-link">у вас есть аккаунт?</a>
            </div>
            <br /><br />


        </div>
    );
};

export default Signup;
