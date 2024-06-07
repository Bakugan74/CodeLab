import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Survey.scss';
import Logo from '../Images/logo.png';
import Emoji_1 from '../Images/survey_emoji_1.png';
import Emoji_2 from '../Images/survey_emoji_2.png';
import Emoji_3 from '../Images/survey_emoji_3.png';
import Emoji_4 from '../Images/survey_emoji_4.png';
import Emoji_5 from '../Images/survey_emoji_5.png';
import Flower from "../Images/survey_flower.png";
import Header from '../Header/Header';
import SignupPage from '../../Pages/Signup';

const Survey = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswerClick = (answerIndex) => {
        setAnswers([...answers, answerIndex]);
        setCurrentQuestion(currentQuestion + 1);
    };

    const questions = [
        {
            question: 'Сначала давайте выясним, что вы хотите улучшить в своей жизни. Например, как вы оцениваете своё личностное развитие?',
            answers: [
                {
                    image: Emoji_1,
                    text: ' очень плохо'
                },
                {
                    image: Emoji_2,
                    text: 'плохо'
                },
                {
                    image: Emoji_3,
                    text: 'удвовлетворительно'
                },
                {
                    image: Emoji_4,
                    text: 'хорошо'
                },
                {
                    image: Emoji_5,
                    text: 'отлично'
                }
            ]
        },
        {
            question: 'Насколько вас это беспокоит?',
            answers: [
                {
                    image: Emoji_1,
                    text: ' очень плохо'
                },
                {
                    image: Emoji_2,
                    text: 'плохо'
                },
                {
                    image: Emoji_3,
                    text: 'удвовлетворительно'
                },
                {
                    image: Emoji_4,
                    text: 'хорошо'
                },
                {
                    image: Emoji_5,
                    text: 'отлично'
                }
            ]
        },
        {
            question: 'А как вы оцениваете свои успехи в карьере и IT?',
            answers: [
                {
                    image: Emoji_1,
                    text: ' очень плохо'
                },
                {
                    image: Emoji_2,
                    text: 'плохо'
                },
                {
                    image: Emoji_3,
                    text: 'удвовлетворительно'
                },
                {
                    image: Emoji_4,
                    text: 'хорошо'
                },
                {
                    image: Emoji_5,
                    text: 'отлично'
                }
            ]
        },
        {
            question: 'Как у вас дела с образованием?',
            answers: [
                {
                    image: Emoji_1,
                    text: ' очень плохо'
                },
                {
                    image: Emoji_2,
                    text: 'плохо'
                },
                {
                    image: Emoji_3,
                    text: 'удвовлетворительно'
                },
                {
                    image: Emoji_4,
                    text: 'хорошо'
                },
                {
                    image: Emoji_5,
                    text: 'отлично'
                }
            ]
        },
        {
            question: 'Как ваше окружение способствует вашему личностному развитию в вашей карьере?',
            answers: [
                {
                    image: Emoji_1,
                    text: ' очень плохо'
                },
                {
                    image: Emoji_2,
                    text: 'плохо'
                },
                {
                    image: Emoji_3,
                    text: 'удвовлетворительно'
                },
                {
                    image: Emoji_4,
                    text: 'хорошо'
                },
                {
                    image: Emoji_5,
                    text: 'отлично'
                }
            ]
        },
        {
            question: 'И последний вопрос: как вы оцениваете своё финансовое положение?',
            answers: [
                {
                    image: Emoji_1,
                    text: ' очень плохо'
                },
                {
                    image: Emoji_2,
                    text: 'плохо'
                },
                {
                    image: Emoji_3,
                    text: 'удвовлетворительно'
                },
                {
                    image: Emoji_4,
                    text: 'хорошо'
                },
                {
                    image: Emoji_5,
                    text: 'отлично'
                }
            ]
        },
    ];


    useEffect(() => {
        if (currentQuestion >= questions.length) {
            console.log('Массив ответов:', answers);
        }
    }, [currentQuestion, answers, questions.length]);

    if (currentQuestion < questions.length) {
        return (
            <div className="survey">
                <div className='survey__wrapper'>
                    <div className="survey__logo">
                        <img src={Logo} alt="CodeLab Logo" />
                    </div>
                    <div className="survey__info">
                        <h1 className="survey__info__title">
                            CodeLab
                        </h1>
                        <h2 className="survey__info__subtitle">
                            Лаборатория программирования для новичков
                        </h2>
                    </div>
                </div>

                <div className="survey__description">
                    <div>
                        <h1 className="survey__description__title">
                            {questions[currentQuestion].question}
                            <br />
                            <img src={Flower} alt="" />
                        </h1>
                        <div className="survey__description__photos">
                            {questions[currentQuestion].answers.map((answer, index) => (
                                <div className='survey__description__logos' key={index}>
                                    <img
                                        src={answer.image}

                                        onClick={() => handleAnswerClick(index)}
                                    />
                                    <p>{answer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        // Показываем сообщение о завершении опроса
        return (
            //<div>
            //    <h1>Спасибо за участие в опросе!</h1>
            //    <h2>Ваши ответы: {answers.map((answer) => questions[answer].question).join(', ')}</h2>
            //</div>
            <div className='survey__end'>
                <h1>Ваши ответы приняты, результаты будут отправлены вам на почту!</h1>
                <h2>Спасибо за участие в опросе</h2>
                <p><a href={'SignupPage'}>перейти к регистрации</a></p>
            </div>
        );
    }
};

export default Survey;