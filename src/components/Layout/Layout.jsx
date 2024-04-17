import {} from 'react-router-dom';
import './Layout.scss';
import Effect from '../Frame2/Effect.jsx';
import Header from '../Header/Header.jsx';
import Training from '../Training/Training.jsx';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';
import Survey from '../Survey/Survey';


const Layout = () => {
	return (
		<>
			<Header />
            <Effect />
			<Benefits />
			<Training />
			<Footer />
			<Survey />
			

		</>
	);
};

export default Layout;