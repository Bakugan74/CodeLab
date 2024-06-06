import React from 'react';
import './Diagnostic.scss';
import Logo from '../Images/logo.png'
import DiagnosticItem from '../DiagnosticItem/DiagnosticItem';
import DiagnosticButton from '../UI/Button/DiagnosticButton';

const Diagnostic = () => {
    return (
        <div className="diagnostic">
            <div className='diagnostic__wrapper'>
                <div className="diagnostic__logo">
                    <img src={Logo} alt="CodeLab Logo" />
                </div>
                <div className="diagnostic__info">
                    <h1 className="diagnostic__info__title">
                        CodeLab
                    </h1>
                    <h2 className="diagnostic__info__subtitle">
                        Лаборатория программирования для новичков
                    </h2>
                </div>
                
            </div>

            <div className="diagnostic__description">
                <div>
                    <h1 className="diagnostic__description__title">
                        Диагностика когнитивных способностей
                    </h1>
                </div >
                <div className="diagnostic__description__box">
                    <DiagnosticItem />
                </div>
                <p className="diagnostic__description__subtitle">Разработано совместно с учёными РАН. <br />Проверено на выборке из 7 миллионов пользователей.</p>
                <div className='diagnostic__description__button'>
                <DiagnosticButton/>
                </div>

            </div>
            
        </div>
    );
};

export default Diagnostic;
