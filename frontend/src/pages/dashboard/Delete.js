import React from 'react';
import Modal from '../../components/modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useDeleteAllergyData } from '../../api/allergy';

const Delete = (props) => {
	const queryClient = useQueryClient();
	const { mutate } = useMutation(useDeleteAllergyData, {
		onSuccess: () => {
			props.setShowDeleteModal(false);
			return queryClient.invalidateQueries({ queryKey: ['getAllAllergy'] });
		},

		onError: () => {
			console.log('error');
		},
	});

	return (
		<>
			<Modal
				onClose={() => {
					props.setShowDeleteModal(false);
				}}
			>
				<h1>Are you Sure?</h1>
				<p className='mb-6x'> you want to delete this?</p>

				<div className='d-flex'>
					<button
						className='btn btn-link'
						onClick={() => {
							props.setShowDeleteModal(false);
						}}
					>
						Cancel
					</button>
					<button
						className='btn btn-danger'
						onClick={() => {
							mutate(props.activeRowData.id);
						}}
					>
						Delete
					</button>
				</div>
			</Modal>
		</>
	);
};

export default Delete;
