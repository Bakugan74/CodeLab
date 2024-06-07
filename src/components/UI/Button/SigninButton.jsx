import { Link } from 'react-router-dom';
import './SigninButton.scss'


const SigninButton = () =>{
    return(
        <div className="wrapper-button">
            <Link to={'/'} className="signinbutton" style={{ color: 'white'}}>
					<p>Авторизоваться</p>
            </Link>
        </div>  
    )
}



export default SigninButton