import React, { useState } from 'react';
import { useTable } from 'react-table';
import Edit from '../../pages/dashboard/Edit';
import { useGetAllergyData } from '../../api/allergy';

const Table = () => {
	const { status, data, error, isFetching } = useGetAllergyData();

	console.log(data);

	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const onClose = () => {
		setShowModal(false);
	};

	const tableColumns = React.useMemo(
		() => [
			{
				Header: 'id',
				accessor: 'id',
			},
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Symptoms',
				accessor: 'symptoms',
			},
			{
				Header: 'Severity',
				accessor: 'severity',
			},
			{
				Header: 'Treatment',
				accessor: 'treatment',
			},
			{
				Header: 'Notes',
				accessor: 'notes',
			},
			{
				Header: 'Actions',
				Cell: () => {
					return (
						<div className='d-flex gap-2x'>
							<button
								className='btn btn-primary'
								onClick={handleShowModal}
							>
								Edit
							</button>
							<button className='btn btn-danger'>Delete</button>
						</div>
					);
				},
			},
		],
		[]
	);

	
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns: tableColumns, data: data || []});

	if(!data){
		return <p>loading</p>
	}


	return (
		<>
			{showModal && (
				<Edit
					onClose={onClose}
					title='Edit Allergy'
				/>
			)}

			<table
				className='table'
				{...getTableProps()}
			>
				<thead>
					{headerGroups.map((headerGroup) => {
						return (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						);
					})}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row) => {
						prepareRow(row);

						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default Table;
