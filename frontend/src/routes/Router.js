import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginContainer from '../pages/login';
import Login from '../pages/login/Login';
import Register from '../pages/login/Register';
import Dashboard from '../pages/dashboard/Dashboard';

const Router = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<LoginContainer />}
			>
				<Route
					index
					element={<Navigate to={'/login'} />}
				/>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/register'
					element={<Register />}
				/>
			</Route>

			<Route
				path={'/dashboard'}
				element={<Dashboard />}
			/>
		</Routes>
	);
};

export default Router;
