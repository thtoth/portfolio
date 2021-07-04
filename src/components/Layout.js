import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Fotter from './Footer';
import '../assets/css/main.css';

const Layout = ({ children }) => {
	return (
		<>
			{children}
		</>
	)
}

export default Layout;
