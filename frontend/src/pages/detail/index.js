import React from 'react';
import Sidebar from '../../components/sidebar';
import { useGetAllergyData } from '../../api/allergy';

const Detail = () => {
	const { data } = useGetAllergyData();
	console.log(data);

	return (
		<main className='d-flex'>
			<Sidebar />

			<div className='main-content px-5x pt-10x pb-5x d-flex flex-direction-column'>
				<div className='d-flex justify-content-between align-items-end mb-3x'>
					<h1>Allergy Dashboard</h1>
				</div>

				<ul className='lists'>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>username:</strong>
						</p>
						<p>{data !== undefined ? data[0].name : ''}</p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Symptoms:</strong>
						</p>
						<p>{data !== undefined ? data[0].symptoms : ''} </p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Severity:</strong>
						</p>
						<p>{data !== undefined ? data[0].severity : ''} </p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Treatment:</strong>
						</p>
						<p>{data !== undefined ? data[0].treatment : ''} </p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Notes:</strong>
						</p>
						<p>{data !== undefined ? data[0].notes : ''} </p>
					</li>
					<li>
						<p className='mb-2x'>
							<strong>Image:</strong>
						</p>
						<img
							className='d-block'
							src={data !== undefined ? data[0].img_url : ''}
							alt=''
						/>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default Detail;
