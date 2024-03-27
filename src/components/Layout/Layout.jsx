import {} from 'react-router-dom';
import './Layout.scss';
import Effect from '../Frame2/Effect.jsx';
import Header from '../Header/Header.jsx';
import Training from '../Training/Training.jsx';
import Benefits from '../Benefits/Benefits';
import Footer from '../Footer/Footer';


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