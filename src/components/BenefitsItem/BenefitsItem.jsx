// import React from 'react';
import './BenefitsItem.scss';
import Benefits1 from '../Images/benefits1.png'
import Benefits2 from '../Images/benefits2.png'
import Benefits3 from '../Images/benefits3.png'
const BenefitsItem = () => {
    const BenefitsArticles = [
        {
            image: Benefits1,
            title: "Оценка способностей",
            list_1: "Развитие навыков будущего.",
            list_2: "Развитие новых интересов и хобби.",
        },
        {
            image: Benefits2,
            title: "Ежедневные тренировки",
            list_1: "Развитие навыков адаптации к изменяющемуся рынку труда.",
            list_2: "Расширение возможностей карьерного роста.",
        },
        {
            image: Benefits3,
            title: "Статистика развития",
            list_1: "Поддержка молодого поколения.",
            list_2: "Решение повседневных задач.",
        },
        
    ];

    return (
        <div className='benefits-item'>
            {BenefitsArticles.map((article, index) => (
                <div key={index} className='benefits-item__wrapper'>
                
                        <img className='benefits-item__image' src={article.image} alt="" />
              
                    <div className='benefits-item__title'>
                        <p>{article.title}</p>
                    </div>
                    <div className='benefits-item__description'>
                        <ul>
                            <li>{article.list_1}</li>
                            <li>{article.list_2}</li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
        
    );
};

export default BenefitsItem;
