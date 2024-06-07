import { Link } from 'react-router-dom';
import './SignupButton.scss'


const SignupButton = () =>{
    return(
        <div className="wrapper-button">
            <Link to={'SigninPage'} className="signupbutton" style={{ color: 'white'}}>
					<p>Зарегистрироваться</p>
            </Link>
        </div>  
    )
}



export default SignupButton