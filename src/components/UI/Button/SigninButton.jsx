import { Link } from 'react-router-dom';
import './SigninButton.scss'


const SigninButton = () =>{
    return(
        <div className="wrapper-button">
            <div>
            <a href={'SignupPage'}><p>sdasd</p></a>
            </div>

            <Link to={'SignupPage'} className="signinbutton" style={{ color: 'white'}}>
					<p>Авторизоваться</p>
            </Link>
        </div>  
    )
}



export default SigninButton