// import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Header from '../components/layout/Header';
import AuthProvider from '../contexts/AuthContext';
import IsDisplaySideBarProvider from '../contexts/IsDisplaySideBarContext';
import '../styles/global.css';

export const Provider = ({ children }) => (
	<AuthProvider>
		<IsDisplaySideBarProvider>
			<ThemeProvider defaultTheme="system" attribute="class">
				{children}
			</ThemeProvider>
		</IsDisplaySideBarProvider>
	</AuthProvider>
);

function MyApp({ Component, pageProps }) {
	return (
		<Provider>
			<Head>
				<title>Youtube</title>
				<meta name="description" content="Youtube Fake" />
				<link
					rel="icon"
					href="https://www.youtube.com/s/desktop/89d6cbd0/img/favicon_48x48.png"
					sizes="48x48"
				/>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			{!Component.getLayout && <Header />}
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;
