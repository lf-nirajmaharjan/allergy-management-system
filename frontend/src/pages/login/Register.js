import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const [inputData, setInputData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const onChangeValue = (e) => {
		e.preventDefault();
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};

	// Store value in LocalStorage
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem('user', JSON.stringify(inputData));

		//Redirect to Login page
		navigate();
	};

	return (
		<>
			<h1 className='color-primary--base'>Signup to create an account</h1>
			<p className='color-grey--80'>
				Already have an account?
				<Link to='/login'>Login</Link>
			</p>
			<form
				className='login__form mt-6x'
				onSubmit={handleSubmit}
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
						Email
						<span className='required'>*</span>
					</label>

					<input
						type='email'
						className='form__control'
						placeholder='Enter the Email'
						name='email'
						value={inputData.email}
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

				<button className='btn btn-primary w-100'>Signup</button>
			</form>
		</>
	);
};

export default Register;
