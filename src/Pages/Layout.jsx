import {} from 'react-router-dom';
import Effect from '../components/Frame2/Effect.jsx';
import Header from '../components/Header/Header.jsx';
import Training from '../components/Training/Training.jsx';
import Benefits from '../components/Benefits/Benefits.jsx';
import Footer from '../components/Footer/Footer.jsx';


const Layout = () => {
	return (
		<>
			<Header />
            <Effect />
			<Benefits />
			<Training />
			<Footer />
		</>
	);
};

export default Layout;