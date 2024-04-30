import React from 'react';
import './Personality.scss';
import Logo from '../Images/logo.png'
import Flower from "../Images/survey_flower.png"
import PersonalityButton from '../UI/Button/PersonalityButton';

const Personality = () => {
    return (
        <div className="personality">
            <div className='personality__wrapper'>
                <div className="personality__logo">
                    <img src={Logo} alt="CodeLab Logo" />
                </div>
                <div className="personality__info">
                    <h1 className="personality__info__title">
                        CodeLab
                    </h1>
                    <h2 className="personality__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
                
            </div>

            <div className="personality__description">
                <div>
                    <h1 className="personality__description__title">
                        Личностное развитие
                    </h1>
                </div>
                <div className='personality__description__flower'>
                    <img src={Flower} alt="" />
                </div>
                <div>
                    <h2 className="personality__description__subtitle">
                    Осталось несколько шагов. <br /> Укажите email, чтобы мы прислали результаты диагностики 
                    </h2>
                </div>
                <div>
                    <input className='personality__description__input' type="text" placeholder="Ваш E-mail" />
                </div>
                <div className='personality__description__button'>
                    <PersonalityButton/>

                </div>
                <div className='personality__description__agreement'  >
                        <input type="checkbox" />
                        <p className='personality__description__agreement__text'>Нажимая на кнопку, я принимаю Лицензионное соглашение. <br /> Согласен с использованием файлов cookie и могу отключить их <br /> в настройках браузера.</p>
                </div>

            </div>
            
        </div>
    );
};

export default Personality;
