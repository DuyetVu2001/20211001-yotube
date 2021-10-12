// import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import IsDisplaySideBarProvider from '../context/IsDisplaySideBarContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<IsDisplaySideBarProvider>
			<ThemeProvider defaultTheme="system" attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</IsDisplaySideBarProvider>
	);
}

export default MyApp;
