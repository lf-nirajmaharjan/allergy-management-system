import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/allergy';

const Login = () => {
	const navigate = useNavigate();
	const { mutate, isLoading } = useMutation(login, {
		onSuccess: (data) => {
			console.log(data);

			localStorage.setItem('accessToken', data);
			navigate('/dashboard');
		},

		onError: () => {
			console.log('Error');
		},
	});

	if (isLoading) {
		return 'Loading';
	}

	const initialValues = {
		username: '',
		password: '',
	};

	const loginSchema = Yup.object().shape({
		username: Yup.string().required('Username is required'),
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
					mutate(values);
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
								name='username'
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								value={props.values.username}
							/>

							<ErrorMessage
								component='p'
								className='error'
								name='username'
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
