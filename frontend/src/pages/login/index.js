import React from 'react';
import { Outlet } from 'react-router-dom';
import BrandLogo from '../../assets/images/brand-logo.svg';

const Login = () => {
	return (
		<>
			<div className='login__page '>
				<div className='login__left'>
					<img
						src={BrandLogo}
						alt='Allergy Brand Logo'
					/>
				</div>
				<div className='login__right'>
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Login;
