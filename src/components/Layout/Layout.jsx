import {} from 'react-router-dom';
import './Layout.scss';
import Effect from '../Frame2/Effect.jsx';
import Header from '../Header/Header.jsx';
import Frame4 from '../Frame4/Frame4.jsx';


const Layout = () => {
	return (
		<>
			<Header />
            <Effect />
			<Frame4 />
			

		</>
	);
};

export default Layout;