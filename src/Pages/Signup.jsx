import {} from 'react-router-dom';
import Signup from '../components/Signup/Signup.jsx';
import { Routes,Route } from "react-router-dom";


const SignupPage = () => {
	return (
		<>
		<Signup/>
		<Routes>
			<Route path="SighupPage" element={'SignupPage'}/>
		</Routes>
		</>
	);
};

export default SignupPage;