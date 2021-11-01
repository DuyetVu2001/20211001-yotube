import { createContext, useState } from 'react';

// const INIT_STATE = { isDisplay: false };
export const IsDisplaySideBarContext = createContext({});

export default function IsDisplaySideBarProvider({ children }) {
	const [isDisplay, setIsDisplay] = useState(true);

	const toggleIsDisplay = () => setIsDisplay(!isDisplay);

	return (
		<IsDisplaySideBarContext.Provider value={{ isDisplay, toggleIsDisplay }}>
			{children}
		</IsDisplaySideBarContext.Provider>
	);
}
