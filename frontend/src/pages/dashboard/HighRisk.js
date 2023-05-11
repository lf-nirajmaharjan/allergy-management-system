import React from 'react';
import Modal from '../../components/modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUpdateAllergyData } from '../../api/allergy';

const HighRisk = (props) => {
	const queryClient = useQueryClient();
	const data = {
		...props.activeRowData,
		high_risk: !props.activeRowData.high_risk,
	};
	const { mutate } = useMutation(useUpdateAllergyData, {
		onSuccess: () => {
			props.setShowHighRiskModal(false);
			return queryClient.invalidateQueries({ queryKey: ['getAllAllergy'] });
		},
		onError: (error) => {
			console.log('Error', error);
		},
	});
	return (
		<>
			<Modal
				onClose={() => {
					props.setShowHighRiskModal(false);
				}}
			>
				<h1>Are you Sure?</h1>
				<p className='mb-6x'>
					{' '}
					{props.activeRowData.high_risk
						? 'you want to remove this from High risk?'
						: 'you want to make this as High risk?'}
				</p>

				<div className='d-flex'>
					<button className='btn btn-link'>Cancel</button>
					<button
						className='btn btn-danger'
						onClick={() => {
							mutate(data);
						}}
					>
						Yes
					</button>
				</div>
			</Modal>
		</>
	);
};

export default HighRisk;
