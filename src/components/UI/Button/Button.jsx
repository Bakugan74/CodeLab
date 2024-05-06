import { Link } from 'react-router-dom';
import './Button.scss'


const Button = () =>{
    return(
        <div className="wrapper-button">
            <Link to={'SurveyPage'} className="button" style={{ color: 'white'}}>
					<p>Начать тренеровку</p>
            </Link>
        </div>  
    )
}



export default Button