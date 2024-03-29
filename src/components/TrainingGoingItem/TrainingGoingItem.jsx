import React from 'react';
import './TrainingGoingItem.scss';

const TrainingGoingItem = () => {


    const TrainingGoingArticles = [
        {
            image: "https://s3-alpha-sig.figma.com/img/8b56/b93a/c5ec0b26d2d6d84db4411022535bfb87?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R0l1SjVKmZZZ~hfGpXeBRvNZS4Rw73zEMiFWO3KNT79Ms7BfeNvqfPu7-M5dt31bWOoamyAaJJC7Q-V163uuExnTAUhKJ-nsJiEddkT2h39YLMfINPSeQR5XcnosOBOrkPn6DenuxV9we~6DZ8acgifQ~bJTzBUULfHWOwv8qGKOERG~~HgX5PKv0vwOj2l9a89VEqNHU9eUCPxrB~x790CbP7ni6xiOL2ydMZw0zfRyL2LuEFbhLgw68LfyKbfbVi36aQkYaLEW7hrbImBwQHsEUeyc1QS0Vzc7b6RFMk8VUbqpYFGbSQTZJL~SDgA~YcCt7C7oT0tgK~hNAedmBA__",
            title: "Оценка способностей",
            description: "Пройдите вводный курс в начальном этапе, для оценки вашего уровня развития в данной сфере на начальном этапе.",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/db73/eef2/96104d2febe40773acf2aeb84bd2cafc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NPhPrlrvErQf4RREVZj7bo8DG0diA4K7nHcYy1jGtYPK3aGM5-2AY13kmO7PSLWd3XxVswyAkdK5PeWKxM~DcaCrnYTzFatTrUWCEaLLbh7mwDblKBFsy6~V9NTC4hwCaxbK97UwhtlQrl-Nq~ke70e9UNeHsn0DFCMUOx6wUHWVvyvhXnd2kGYG7yUkvcCD8BiIgf9Gqa0u5NY~swUIsyTwCzatYKf-mwMezFbOA3e6x-R9eHiy7gkyjhd4cEec81-zmCid6eHyDr9ZUfrtWky7IYXR59oZLmRthtdVClrIFakrxGWeOmfDHj5~UlQmOMNTn~~r4Aw0xBY-P~xdsA__",
            title: "Ежедневные тренировки",
            description: "Тренируйтесь ежедневно. Это будет занимать у вас 20-30 минут в день. Вы будете получать много новых и полезных навыков и умений в течении такого короткого времени.",
        },
        {
            image: "https://s3-alpha-sig.figma.com/img/0b8a/592f/54cc35c11f9e088f358e610ec6d8db20?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MyZQVV728nXZ12s4C60JuM~vvq3-gFTVg4MVNhX-LYiQ2bgKqrAAXAIHPGOZ64s9XNd6Usk2rVDOTCvJgaOP6aQqig7j2GD1f3S4oi-7DLEHUHif~aCw-JW0GUKcLaNiuFJscPa860bHLqgyJZ4LR4FcIa~4A2rk~~095hvJOcfjMeDzaxLHy6-F9HFnvsAlDLJe5qBz36NroV9FUbpDf-6tQJGYVKCcofvjBZnDACwsg3HDcNrzECfs5rS5HMo2n7InF7p8rKvrniK7dict9cymZ~ii6SP3etJoSetgUGWP3xf7luYKuMMsT6Y3IGT6v5nJ5kjohCO7NelkJfP3TA__",
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