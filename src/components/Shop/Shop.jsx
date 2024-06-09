import React from 'react';
import './Shop.scss';
import Navbar from '../Navbar/Navbar';

const Shop = () => {
    return (
        <div className="shop">



            <div className='shop__wrapper'>
                <Navbar/>
            </div>
                <br />
            <div className='shop__mainwrapper'>
            <h1>Товары</h1>

                <div>
                    <div className='shop__mainwrapper__title'>

                    </div>
                    <div className='shop__mainwrapper__item'>
                        <img src='https://s3-alpha-sig.figma.com/img/04f4/7b4b/5d17b874763c3c83610930cfddd27f3b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f059usNwlUmHj~REWInhbF7v5Ii8-jpvfjnTliB2V9B5fkH3teKNJtyiRSEXiVeZYDen3V0ttYJQQgfpbPfB5PSNoBG8439eYaTW~8G-If3V3IWMj7AAqRHmqKgX2bjjwu9bRWlse2y1tgP8SjwGZl5dbC5eZhgD4TVGEoPX8ddTzydL947E90iAfEJ9uH7tpOCvoxAoh1Z-efuc8h8VnNknNGXuH1uEFYQEHsLggUy0YhzN12EfuZdT2sjrU9bTeZmC2uJwM3PLo1GnzatNwJ5F4lCK5kTpyeHtFhpDWqcWGuhbigl-pNTdEbWhEyajel0NHfvvUS7Kyq~3Rig3RA__' alt="" />
                        <h2>1</h2>
                        <p>Алгоритмы - одна из основных вещей в программирвоании. <br />В данном тренажёре вы научитесь понимать алгоритмы <br />и запомните их главные аспекты.</p>
                    </div>
                    <br />
                    <div className='shop__mainwrapper__item'>
                        <img src='https://s3-alpha-sig.figma.com/img/04f4/7b4b/5d17b874763c3c83610930cfddd27f3b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f059usNwlUmHj~REWInhbF7v5Ii8-jpvfjnTliB2V9B5fkH3teKNJtyiRSEXiVeZYDen3V0ttYJQQgfpbPfB5PSNoBG8439eYaTW~8G-If3V3IWMj7AAqRHmqKgX2bjjwu9bRWlse2y1tgP8SjwGZl5dbC5eZhgD4TVGEoPX8ddTzydL947E90iAfEJ9uH7tpOCvoxAoh1Z-efuc8h8VnNknNGXuH1uEFYQEHsLggUy0YhzN12EfuZdT2sjrU9bTeZmC2uJwM3PLo1GnzatNwJ5F4lCK5kTpyeHtFhpDWqcWGuhbigl-pNTdEbWhEyajel0NHfvvUS7Kyq~3Rig3RA__' alt="" />
                        <h2>2</h2>
                        <p>Алгоритмы - одна из основных вещей в программирвоании. <br />В данном тренажёре вы научитесь понимать алгоритмы <br />и запомните их главные аспекты.</p>
                    </div>
                    <br />
                    <div className='shop__mainwrapper__item'>
                        <img src='https://s3-alpha-sig.figma.com/img/04f4/7b4b/5d17b874763c3c83610930cfddd27f3b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f059usNwlUmHj~REWInhbF7v5Ii8-jpvfjnTliB2V9B5fkH3teKNJtyiRSEXiVeZYDen3V0ttYJQQgfpbPfB5PSNoBG8439eYaTW~8G-If3V3IWMj7AAqRHmqKgX2bjjwu9bRWlse2y1tgP8SjwGZl5dbC5eZhgD4TVGEoPX8ddTzydL947E90iAfEJ9uH7tpOCvoxAoh1Z-efuc8h8VnNknNGXuH1uEFYQEHsLggUy0YhzN12EfuZdT2sjrU9bTeZmC2uJwM3PLo1GnzatNwJ5F4lCK5kTpyeHtFhpDWqcWGuhbigl-pNTdEbWhEyajel0NHfvvUS7Kyq~3Rig3RA__' alt="" />
                        <h2>3</h2>
                        <p>Алгоритмы - одна из основных вещей в программирвоании. <br />В данном тренажёре вы научитесь понимать алгоритмы <br />и запомните их главные аспекты.</p>
                    </div>
                </div>


            </div>


            <div className='shop__mainwrapper__end'>

            </div>


     
        </div>
    );
};

export default Shop;