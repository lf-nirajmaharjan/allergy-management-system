import React from 'react';

const LoginForm = () => {
	return (
		<form
			action=''
			className='login__form mt-6x'
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
				/>
			</div>

			<button className='btn btn-primary w-100'>Login</button>
		</form>
	);
};

export default LoginForm;
