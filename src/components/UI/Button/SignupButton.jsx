import { Link } from 'react-router-dom';
import './SignupButton.scss'


const SignupButton = () =>{
    return(
        <div className="wrapper-button">

            <div >
            <a href={'SigninPage'} className="signupbutton"><p>Зарегистрироваться</p></a>
            </div>
            {/* <Link to={'SigninPage'} className="signupbutton" style={{ color: 'white'}}>
					<p>Зарегистрироваться</p>
            </Link> */}
        </div>  
    )
}



export default SignupButton