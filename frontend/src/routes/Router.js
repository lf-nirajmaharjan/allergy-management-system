import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Dashboard from '../pages/dashboard/Dashboard';

const Router = () => {
	return (
		<Routes>
			<Route
				path={'/'}
				element={<Navigate to={'/login'} />}
			/>
			<Route
				path={'/login'}
				element={<Login />}
			/>

			<Route
				path={'/register'}
				element={<Register />}
			/>

			<Route
				path={'/dashboard'}
				element={<Dashboard />}
			/>
		</Routes>
	);
};

export default Router;
