
import { Routes,Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout";
import SurveyPage from "./Pages/Survey"


function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Layout />}></Route>
			<Route path="SurveyPage" element={< SurveyPage/>}></Route>
		</Routes>
		</>
	);
}

export default App;
