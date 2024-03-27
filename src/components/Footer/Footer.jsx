import React from "react"
import './Footer.scss'

const Footer = () =>{
    return(
        <div className="footer">
            <div className="footer__img"><img className="footer__img__logo" src="https://s3-alpha-sig.figma.com/img/5aea/0de6/29d7575ec38bdbb0216201cdbb98ff88?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmLTVRFW7Kijl0q26aq3xBktTaUsu9WXM3LMofxRmSYAkGWiyu~P1ygCxZDq1V2LzyTTjIqfPHI3kGAsEXQj2vgvb01sPM-sc2MppGVzt-DZCVNKbcapIHCBBOt99YoW1XM4HoypebG-NxLqZlQWhdXKjVs5hN6CBcGow6E8I7Le~mpL-~wzv~AlDzUK0N8yLgf6DuL1wDvuouMi4n5hG-2onEkSmiI2pEj33BeseYaUwq37r2HyvONkL4F-y7U3CgRJg9KRKQYDTH5J7s0sKkB99tZ6QAG3nhzKtKCqRIWCGF42x-skj6hTiZ6txXzZz6VdybG46lsruoXScNH7GA__" alt="" /></div>    
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