// import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import TopNav from '../components/layout/TopNav';
import IsDisplaySideBarProvider from '../context/IsDisplaySideBarContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
	return (
		<IsDisplaySideBarProvider>
			<ThemeProvider defaultTheme="system" attribute="class">
				<Head>
					<title>Youtube</title>
					<meta name="description" content="Youtube Fake" />
					<link
						rel="icon"
						href="https://www.youtube.com/s/desktop/89d6cbd0/img/favicon_48x48.png"
						sizes="48x48"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				{!Component.getLayout && <TopNav />}
				<Component {...pageProps} />
			</ThemeProvider>
		</IsDisplaySideBarProvider>
	);
}

export default MyApp;
