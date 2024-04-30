import React from 'react';
import './DiagnosticItem.scss';
import Diagnostic1 from '../Images/diagnostic_item_1.png';
import Diagnostic2 from '../Images/diagnostic_item_2.png';
import Diagnostic3 from '../Images/diagnostic_item_3.png';


const DiagnosticItem = () => {

    const DiagnosticItemArticles = [
        {
            image: Diagnostic1,
            text: "Поймёте, насколько развит ваш мозг по нескольким параметрам",
        },
        {
            image: Diagnostic2,
            text: "Узнаете свой потенциал развития в разных сферах жизни",
        },
        {
            image: Diagnostic3,
            text: "Получите персональные рекомендации по когнитивному развитию",
        }
    ];

    return (

        <div>
                {DiagnosticItemArticles.map((article, index) => (

                    <div key={index} className="diagnostic__description__wrapper">
                        <div className="diagnostic__description__wrapper__item">
                                <img className='diagnostic__description__wrapper__item__photo' src={article.image} alt="" />
                            <div className='diagnostic__description__wrapper__item__text'>
                                <p>{article.text}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        );
    };

export default DiagnosticItem;
