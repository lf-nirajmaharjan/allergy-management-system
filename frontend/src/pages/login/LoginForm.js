import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ onFormSwitch }) => {
	const [inputData, setInputData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const onChangeValue = (e) => {
		e.preventDefault();
		setInputData({ ...inputData, [e.target.name]: e.target.value });
		console.log([e.target.name]);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const existingUser = JSON.parse(localStorage.getItem('user'));

		if (
			inputData.name.toLowerCase === existingUser.name.toLowerCase &&
			inputData.password === existingUser.password
		) {
			navigate('/dashboard');
		} else {
			console.log('User does not exist');
		}
	};

	return (
		<>
			<h1 className='color-primary--base'>Login to your account</h1>
			<p className='color-grey--80'>
				Don't have an account yet?{' '}
				{
					<Link
						to='/'
						onClick={() => {
							onFormSwitch('register');
						}}
					>
						Signup
					</Link>
				}
			</p>

			<form
				className='login__form mt-6x'
				onSubmit={handleLogin}
			>
				<div className='form-group mb-4x'>
					<label
						htmlFor=''
						className='form__label'
					>
						Username
						<span className='required'>*</span>
					</label>

					<input
						type='text'
						className='form__control'
						placeholder='Enter the Username'
						name='name'
						value={inputData.name}
						onChange={onChangeValue}
					/>
				</div>
				<div className='form-group mb-4x'>
					<label
						htmlFor=''
						className='form__label'
					>
						Password
						<span className='required'>*</span>
					</label>

					<input
						type='password'
						className='form__control'
						placeholder='Enter the Password'
						name='password'
						value={inputData.password}
						onChange={onChangeValue}
					/>
				</div>

				<button className='btn btn-primary w-100'>Login</button>
			</form>
		</>
	);
};

export default LoginForm;
