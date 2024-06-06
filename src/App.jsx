
import { Routes,Route } from "react-router-dom";
import './App.css'
import Layout from "./Pages/Layout";
import SurveyPage from "./Pages/Survey"
import DiagnosticPage from "./Pages/Diagnostic"


function App() {
	return (
		<>
		<Routes>
			<Route path="/" element={<Layout />}></Route>
			<Route path="SurveyPage" element={< SurveyPage/>}></Route>
			<Route path="DiagnosticPage" element={< DiagnosticPage/>}></Route>
		</Routes>
		</>
	);
}

export default App;
