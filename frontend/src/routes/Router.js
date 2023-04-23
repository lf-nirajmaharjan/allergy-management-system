import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';

const Router = () => {
	return (
		<Routes>
			<Route
				path={'/'}
				element={<Login />}
			/>

			<Route
				path={'/dashboard'}
				element={<Dashboard />}
			/>
		</Routes>
	);
};

export default Router;
