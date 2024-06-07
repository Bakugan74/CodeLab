import Button from '../UI/Button/Button';
import './Effect.scss';

const Effect = () => {
    return (
        <div className="effect">
            <div className="effect__mainText">
                <div className="effect__header">
                    <h1>Эффект от тренировок</h1>
                </div>
                <div className="effect__description">
                    <p>
                        В основе тренажеров CodeLab лежат методики российских и зарубежных нейропсихологов, программистов, которые доказывают работоспособность и помощь людям разной категории
                    </p>
                </div>
            </div>

            <div className="effect__stats">
                <div className="effect__item">
                    <h1>
                        <font color="#005173">+20%</font>
                    </h1>
                    <p>к логическому мышлению</p>
                </div>
                <div className="effect__item">
                    <h1>
                        <font color="#9607BA">x1.8</font>
                    </h1>
                    <p>к повышению креативности</p>
                </div>
                <div className="effect__item">
                    <h1>
                        <font color="#CD0226">+100%</font>
                    </h1>
                    <p>к практическому опыту</p>
                </div>
                <div className="effect__item">
                    <h1>
                        <font color="#B16000">x3.6</font>
                    </h1>
                    <p>к развитию проблемно-ориентированного мышления</p>
                </div>
            </div>
            <div className="effect__footer">
                <p>На основе исследования <font color='#961AB5'>15 235 148</font> тренировок <br /> пользователей CodeLab</p>
            </div>
            <div className="effect__button">
            <Button />
            </div>
        </div>
    );
};

export default Effect;
