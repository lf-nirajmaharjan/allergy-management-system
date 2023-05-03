import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Login = () => {
	const [inputData, setInputData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const onChangeValue = (e) => {
		e.preventDefault();
		setInputData({ ...inputData, [e.target.name]: e.target.value });
		console.log([e.target.name]);
	};

	const initialValues = {
		name: '',
		password: '',
	};

	const loginSchema = Yup.object().shape({
		name: Yup.string().required('Username is required'),
		password: Yup.string()
			.required('Password is required')
			.min(4, 'Password is too short -  Should be atleast 4 Chars minimum')
			.max(10, 'Password is too Long'),
	});

	return (
		<>
			<h1 className='color-primary--base'>Login to your account</h1>
			<p className='color-grey--80'>
				Don't have an account yet?
				{<Link to='/register'>Signup</Link>}
			</p>

			<Formik
				initialValues={initialValues}
				validationSchema={loginSchema}
				onSubmit={(values) => {
					console.log(values);
				}}
			>
				{(props) => (
					<form
						className='login__form mt-6x'
						onSubmit={props.handleSubmit}
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
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.name}
							/>

							<ErrorMessage
								component='p'
								className='error'
								name='name'
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
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.password}
								name='password'
							/>

							<ErrorMessage
								component='p'
								className='error'
								name='password'
							/>
						</div>

						<button className='btn btn-primary w-100'>Login</button>
					</form>
				)}
			</Formik>
		</>
	);
};

export default Login;
