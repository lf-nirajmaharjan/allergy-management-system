import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import Modal from '../../components/modal';
import { postAllergyData } from '../../api/allergy';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const Add = (props) => {
	const queryClient = useQueryClient();
	const { mutate, isLoading } = useMutation(postAllergyData, {
		onSuccess: () => {
			props.setShowModal(false);
			return queryClient.invalidateQueries({ queryKey: ['getAllAllergy'] });
		},

		onError: () => {
			console.log('error');
		},
	});

	const initialValues = {
		name: '',
		symptoms: '',
		severity: undefined,
		treatment: '',
		notes: '',
		img_url: 'https://picsum.photos/200/300',
	};

	const allergySchema = object({
		name: string().required('This field is required'),
		symptoms: string().required('This field is required'),
		severity: string().required('This field is required'),
		treatment: string().required('This field is required'),
		notes: string().required('This field is required'),
	});

	return (
		<>
			<Modal
				onClose={() => {
					props.setShowModal(false);
				}}
				title={props.title}
			>
				<Formik
					initialValues={initialValues}
					validationSchema={allergySchema}
					onSubmit={(values) => {
						mutate(values);
					}}
				>
					{(props) => (
						<form onSubmit={props.handleSubmit}>
							<div className='form__group'>
								<label htmlFor=''>Name</label>
								<input
									type='text'
									className='form__control'
									placeholder='Name'
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
							<div className='form__group'>
								<label htmlFor=''>Symptoms</label>
								<input
									type='text'
									className='form__control'
									placeholder='Symptoms'
									name='symptoms'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.symptoms}
								/>

								<ErrorMessage
									component='p'
									className='error'
									name='symptoms'
								/>
							</div>
							<div className='form__group'>
								<label htmlFor=''>severity</label>
								<select
									name='severity'
									id=''
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.severity}
								>
									<option value='1'>1</option>
									<option value='2'>2</option>
									<option value='3'>3</option>
								</select>

								<ErrorMessage
									component='p'
									className='error'
									name='severity'
								/>
							</div>

							<div className='form__group'>
								<label htmlFor=''>Treatment</label>
								<input
									type='text'
									className='form__control'
									placeholder='Treatment'
									name='treatment'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.treatment}
								/>
								<ErrorMessage
									component='p'
									className='error'
									name='treatment'
								/>
							</div>

							<div className='form__group'>
								<label htmlFor=''>Notes</label>
								<input
									type='text'
									className='form__control'
									placeholder='Notes'
									name='notes'
									onChange={props.handleChange}
									onBlur={props.handleBlur}
									value={props.values.notes}
								/>
								<ErrorMessage
									component='p'
									className='error'
									name='notes'
								/>
							</div>

							<div className='form__group'>
								<button
									className='btn btn-primary'
									type='submit'
								>
									{isLoading ? 'Loading' : 'submit'}
								</button>
							</div>
						</form>
					)}
				</Formik>
			</Modal>
		</>
	);
};

export default Add;
