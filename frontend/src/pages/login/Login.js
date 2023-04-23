import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../assets/images/brand-logo.svg';
import LoginForm from './loginForm';

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
					<h1 className='color-primary--base'>Login to your account</h1>
					<p className='color-grey--80'>
						Don't have an account yet?
						<a href='#'>Signup</a>
						{/* <Link to={'/'}>Signup</Link> */}
					</p>

					<LoginForm />
				</div>
			</div>
		</>
	);
};

export default Login;
