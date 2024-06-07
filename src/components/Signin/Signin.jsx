import React from 'react';
import SigninButton from '../UI/Button/SigninButton';
import './Signin.scss';
import Logo from '../Images/logo.png'

const Signin = () => {
    return (
        <div className="signin">
            <div className='signin__wrapper'>
                <div className="signin__logo">
                    <img src={Logo} alt="CodeLab Logo" />
                </div>
                <div className="signin__info">
                    <h1 className="signin__info__title">
                        CodeLab
                    </h1>
                    <h2 className="signin__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
                
            </div>

            <div className="signin__description"> 
                <h2>Вход на сайт</h2>
                <form className='signin__description__form'  action="">

                    <input className='signin__description__input' type="text" placeholder='E-mail'/> <br />

                    <input className='signin__description__input' type="password" placeholder='Пароль'/> <br />
                </form>
            </div>

            <div className="signin__button">
                <SigninButton />
            </div> <br />

            <div className="signin__have-account">
                <a href="#" className="signin__account-link">Забыли пароль?</a>
            </div>
            <br /><br />
            <div className="signin__have-account">
                <p>Новый пользователь? <a href="">Зарегистрируйтесь</a><br />и начните заниматься прямой сейчас. <br />Или войдите через социальную сеть.</p>
            </div>

        </div>
    );
};

export default Signin;
