// import 'tailwindcss/tailwind.css';
import IsDisplaySideBarProvider from '../context/IsDisplaySideBarContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<IsDisplaySideBarProvider>
			<Component {...pageProps} />
		</IsDisplaySideBarProvider>
	);
}

export default MyApp;
