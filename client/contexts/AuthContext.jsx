import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { API } from '../constant';
import setAuthToken from '../utils/setAuthToken';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	const [auth, setAuth] = useState({
		user: null,
		token: null,
		isAuth: false,
	});

	useEffect(() => {
		const login = async () => {
			const res = await axios.post(API + 'user/login', {
				username: 'Thao Cho',
				password: '123',
			});
			setAuth({
				user: res.data.user,
				token: res.data.accessToken,
				isAuth: true,
			});
		};
		login();
	}, []);

	if (auth.token) setAuthToken(auth.token);

	return (
		<AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
	);
}
