import React from 'react';
import './TrainingGoingItem.scss';
import Trainings1 from '../Images/trainings1.png'
import Trainings2 from '../Images/trainings2.png'
import Trainings3 from '../Images/trainings3.png'

const TrainingGoingItem = () => {
    const TrainingGoingArticles = [
        {
            image: Trainings1,
            title: "Оценка способностей",
            description: "Пройдите вводный курс в начальном этапе, для оценки вашего уровня развития в данной сфере на начальном этапе.",
        },
        {
            image: Trainings2,
            title: "Ежедневные тренировки",
            description: "Тренируйтесь ежедневно. Это будет занимать у вас 20-30 минут в день. Вы будете получать много новых и полезных навыков и умений в течении такого короткого времени.",
        },
        {
            image: Trainings3,
            title: "Статистика развития",
            description: "После прохождений каждого курса вы можете смотреть насколько вы преисполнились в данной сфере, а на какие аспекты стоит больше обращать внимание.",
        }
    ];
    return(
            <div className='TrainingGoingItem'>
                {TrainingGoingArticles.map((article, index) => (
                    <div key={index} className='TrainingGoingItem__wrapper'>
                        <img className='TrainingGoingItem__image' src={article.image} alt="" />
                        <div className='TrainingGoingItem__title'>
                            <p>{article.title}</p>
                        </div>
                        <div>
                            <img  className='TrainingGoingItem__star' src="http://cdn.onlinewebfonts.com/svg/img_397133.png" alt="" />
                        </div>
                        <div className='TrainingGoingItem__description'>
                            <p>{article.description}</p>
                        </div>
                    </div>
                ))}
            </div>


    );
};

export default TrainingGoingItem;