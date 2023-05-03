import React, { useState } from 'react';
import Table from '../../components/table';
import Sidebar from '../../components/sidebar';
import Add from './Add';

const Dashboard = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const onClose = () => {
		setShowModal(false);
	};

	return (
		<main className='d-flex'>
			<Sidebar />

			<div className='main-content px-5x pt-10x pb-5x d-flex flex-direction-column'>
				<div className='d-flex justify-content-between align-items-end mb-3x'>
					<h1>Allergy Dashboard</h1>

					<button
						className='btn btn-primary'
						onClick={handleShowModal}
					>
						Add New
					</button>

					{showModal && (
						<Add
							onClose={onClose}
							title='Add Allergy'
						/>
					)}
				</div>
				<Table />
			</div>
		</main>
	);
};

export default Dashboard;
