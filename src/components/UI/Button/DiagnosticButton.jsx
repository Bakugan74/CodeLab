import { Link } from 'react-router-dom';
import './DiagnosticButton.scss'


const DiagnosticButton = () =>{
    return(
        <div className="diagnosticbutton">
            <a href={'SurveyPage'} className="diagnosticbutton__button">Пройти бесплатно</a>

            {/* <Link to={'SurveyPage'} className="diagnosticbutton__button" style={{ color: 'white'}}>
					<p>Пройти бесплатно</p>
            </Link> */}
        </div>  
    )
}



export default DiagnosticButton