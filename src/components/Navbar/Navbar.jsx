import React from 'react';
import './Navbar.scss';
import Logo from '../Images/logo.png'

const Navbar = () => {
    return (
        <div className="navbar">
                <img src={Logo} alt="" />
                <div className='navbar__menu'>
                    <ul>

                        <li><a href=""> Главная</a> </li>
                        <li><a href={'TrainersPage'}> Тренажёры</a></li>
                        <li><a href=""> Мои покупки</a></li>
                        <li><a href=""> Магазин</a></li>
                        <li><a href={'AccountPage'}> Личный кабинет</a></li>
                    </ul>
                </div>
                <div className='navbar__menu'>
                  <p><a href="">Выйти</a></p>
                </div>


     
            </div>
    );
};

export default Navbar;