import React from 'react';
import Sidebar from '../../components/sidebar';
import { useParams } from 'react-router-dom';
import { useGetAllergyDataByID } from '../../api/allergy';
const Detail = () => {
	const { userID } = useParams();

	const { data, status } = useGetAllergyDataByID(userID);
	console.log(data);
	if (status === 'loading' || !data) {
		return 'Loading';
	}

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
						<p>{data.name}</p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Symptoms:</strong>
						</p>
						<p>{data.symptoms}</p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Severity:</strong>
						</p>
						<p>{data.severity}</p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Treatment:</strong>
						</p>
						<p>{data.treatment}</p>
					</li>
					<li className='d-flex'>
						<p>
							<strong className='mr-2x'>Notes:</strong>
						</p>
						<p>{data.notes}</p>
					</li>
					<li>
						<p className='mb-2x'>
							<strong>Image:</strong>
						</p>
						<img
							src={data.img_url}
							alt=''
						/>
					</li>
				</ul>
			</div>
		</main>
	);
};

export default Detail;
