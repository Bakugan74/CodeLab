
import { Routes,Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout";
import SurveyPage from "./Pages/Survey"
import DiagnosticPage from "./Pages/Diagnostic"
import SigninPage from "./Pages/Signin";
import SignupPage from "./Pages/Signup";



function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Layout />}></Route>
			<Route path="SurveyPage" element={< SurveyPage/>}></Route>
			<Route path="DiagnosticPage" element={< DiagnosticPage/>}></Route>
			<Route path="SigninPage" element={< SigninPage/>}></Route>
			<Route path="SignupPage" element={< SignupPage/>}></Route>


		</Routes>
		</>
	);
}

export default App;
