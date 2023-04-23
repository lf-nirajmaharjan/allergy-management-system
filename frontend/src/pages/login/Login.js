import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from '../register/RegisterForm';
import BrandLogo from '../../assets/images/brand-logo.svg';

const Login = () => {
	const [currentForm, setCurrentForm] = useState('login');
	const formSwitcher = (form) => {
		setCurrentForm(form);
	};
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
					{currentForm === 'login' && <LoginForm onFormSwitch={formSwitcher} />}
					{currentForm === 'register' && (
						<RegisterForm onFormSwitch={formSwitcher} />
					)}
				</div>
			</div>
		</>
	);
};

export default Login;
