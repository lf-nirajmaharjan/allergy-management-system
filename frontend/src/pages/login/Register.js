import React from 'react';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik, ErrorMessage } from 'formik';

const Register = () => {
	const initialValues = {
		name: '',
		email: '',
		password: '',
	};

	const signInSchema = Yup.object().shape({
		name: Yup.string().required('Username is required'),
		email: Yup.string().email('Invalid email.').required('Email is required'),
		password: Yup.string()
			.required('Password is required')
			.min(4, 'Password is too short -  Should be atleast 4 Chars minimum')
			.max(10, 'Password is too Long'),
	});

	return (
		<>
			<h1 className='color-primary--base'>Signup to create an account</h1>
			<p className='color-grey--80'>
				Already have an account?
				<Link to='/login'>Login</Link>
			</p>

			<Formik
				initialValues={initialValues}
				validationSchema={signInSchema}
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
								value={props.values.name}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
							/>

							<div className='error'>
								<ErrorMessage name='name' />
							</div>
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
								placeholder='Enter the email'
								name='email'
								value={props.values.email}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
							/>
							<div className='error'>
								<ErrorMessage name='email' />
							</div>
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
								value={props.values.password}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
							/>
							<div className='error'>
								<ErrorMessage name='password' />
							</div>
						</div>

						<button className='btn btn-primary w-100'>Signup</button>
					</form>
				)}
			</Formik>
		</>
	);
};

export default Register;
