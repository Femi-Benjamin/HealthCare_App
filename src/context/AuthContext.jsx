import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(() => {
		const storedAuth = sessionStorage.getItem('auth');
		return storedAuth ? JSON.parse(storedAuth) : {};
	});

	useEffect(() => {
		sessionStorage.setItem('auth', JSON.stringify(auth));
	}, [auth]);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;

AuthProvider.propTypes = {
	children: PropTypes.element,
};