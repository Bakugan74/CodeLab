import React from 'react';
import './Survey.scss';
import Logo from '../Images/logo.png'
import Emoji_1 from '../Images/survey_emoji_1.png'
import Emoji_2 from '../Images/survey_emoji_2.png'
import Emoji_3 from '../Images/survey_emoji_3.png'
import Emoji_4 from '../Images/survey_emoji_4.png'
import Emoji_5 from '../Images/survey_emoji_5.png'
import Flower from "../Images/survey_flower.png"

const Survey = () => {
    return (
        <div className="survey">
            <div className='survey__wrapper'>
                <div className="survey__logo">
                    <img src={Logo} alt="CodeLab Logo" />
                </div>
                <div className="survey__info">
                    <h1 className="survey__info__title">
                        CodeLab
                    </h1>
                    <h2 className="survey__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
                
            </div>

            <div className="survey__description">
                <div>
                    <h1 className="survey__description__title">
                        Личностное развитие
                    </h1>
                </div>
                <div className='survey__description__flower'>
                    <img src={Flower} alt="" />
                </div>
                <div>
                    <h2 className="survey__description__subtitle">
                        Сначала давайте выясним, что вы хотите улучшить в своей жизни <br/>  Например: Как вы оцениваете своё личностное развитие?
                    </h2>
                </div>
                <div className="survey__description__photos">
                    <div className='survey__description__logos'>
                        <a href="#"><img src= {Emoji_1} alt="" /></a>
                        <p className='survey__description__text'> плохо </p>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img src= {Emoji_2} alt="" /></a>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img  src= {Emoji_3} alt="" />   </a>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img src= {Emoji_4} alt="" /></a>
                    </div>
                    <div className='survey__description__logos'>
                        <a href="#"><img src= {Emoji_5} alt="" /></a>
                        <p className='survey__description__text'> хорошо </p>   
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Survey;
