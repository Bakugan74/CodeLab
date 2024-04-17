import React from "react"
import './Footer.scss'
import Logo from '../Images/logo.png'
const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer__img"><img className="footer__img__logo" src={Logo} alt="" /></div>    
            <div className="footer__wrapper">
                <div className="footer__item">
                    <div className="footer__item__title"> <h3>О ПРОЕКТЕ</h3> </div>
                    <div className="footer__item__description">
                        <li> <a href="#">Отзывы о CodeLab</a> </li>
                        <li> <a href="#">Политика конфиденциальности</a> </li>
                        <li> <a href="#">Контакты</a> </li>
                        <li> <a href="#">Лицензионное соглашение</a> </li>
                        <li> <a href="#">Карта сайта</a> </li>
                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item__title"> <h3>НАУКА</h3> </div>
                    <div className="footer__item__description">
                        <li> <a href="#">Методики</a> </li>
                        <li> <a href="#">Как работает CodeLab</a> </li>
                        <li> <a href="#">Курсы</a> </li>
                        <li> <a href="#">Тренажеры</a> </li>

                    </div>

                </div>
                <div className="footer__item">
                    <div className="footer__item__title"> <h3>СОТРУДНИЧЕСТВО</h3> </div>
                    <div className="footer__item__description">
                        <li> <a href="#">Партнерская программа</a> </li>
                        <li> <a href="#">Вакансии</a> </li>
                        <li> <a href="#">Для организаций</a> </li>

                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item__title"> <h3>СОЦИАЛЬНЫЕ СЕТИ</h3> </div>
                    <div className="footer__item__massengers">
                    
                        <div className="footer__item__massengers__logo"><img src="https://img.icons8.com/?size=24&id=DpOQ6G5p47f0&format=png" alt=""/></div>
                        <div className="footer__item__massengers__logo"><img src="https://img.icons8.com/?size=24&id=85088&format=png" alt="" /></div>
                        <div className="footer__item__massengers__logo"><img src="https://img.icons8.com/?size=24&id=86124&format=png" alt="" /></div>
                        <div className="footer__item__massengers__logo"><img src="https://img.icons8.com/?size=24&id=85466&format=png" alt="" /></div>

                    </div>
                </div>
                <div className="footer__item">
                    <div className="footer__item__title"> <h3>ДРУГОЕ</h3> </div>
                    <div className="footer__item__description">
                        <li> <a href="#">Помощь (FAQ)</a> </li>
                        <li> <a href="#">support@codelab.ru</a> </li>
                        <li> <a href="#">+79539999999</a> </li>

                    </div>
                </div>
            </div>








        








        </div>
    )
}


export default Footer