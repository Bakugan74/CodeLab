import React from 'react';
import './Account.scss';
import Navbar from '../Navbar/Navbar';

const Account = () => {
    return (
        <div className="account">

            <div className='account__wrapper'>
                <Navbar/>
            </div>
                <br />
            <div className='account__mainwrapper'>
                <div className='account__mainwrapper__title'>
                    <h1>Личный кабинет</h1>
                </div>
                <div className='account__mainwrapper__item'>
                    <img src='https://s3-alpha-sig.figma.com/img/04f4/7b4b/5d17b874763c3c83610930cfddd27f3b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f059usNwlUmHj~REWInhbF7v5Ii8-jpvfjnTliB2V9B5fkH3teKNJtyiRSEXiVeZYDen3V0ttYJQQgfpbPfB5PSNoBG8439eYaTW~8G-If3V3IWMj7AAqRHmqKgX2bjjwu9bRWlse2y1tgP8SjwGZl5dbC5eZhgD4TVGEoPX8ddTzydL947E90iAfEJ9uH7tpOCvoxAoh1Z-efuc8h8VnNknNGXuH1uEFYQEHsLggUy0YhzN12EfuZdT2sjrU9bTeZmC2uJwM3PLo1GnzatNwJ5F4lCK5kTpyeHtFhpDWqcWGuhbigl-pNTdEbWhEyajel0NHfvvUS7Kyq~3Rig3RA__' alt="" />
                    <h3>Имя: Сергей Ерохин</h3>
                    <h3>Дата рождения: 11.11.2024</h3>
                    <h3>E-mail: sdfsdofohf@mail.ru</h3>
                    <h3>Телефон: 8(888)8888888</h3>
                    <h3>Город: (нет информации)</h3>
                    <h3>Образование: (нет информации)</h3>

                </div>
                <br />
            </div>
            <div className='account__mainwrapper__end'>

            </div>


     
        </div>
    );
};

export default Account;