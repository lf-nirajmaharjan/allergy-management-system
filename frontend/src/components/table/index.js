import React, { useState } from 'react';
import { useTable } from 'react-table';
import Edit from '../../pages/dashboard/Edit';

const Table = () => {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal(true);
	};

	const onClose = () => {
		setShowModal(false);
	};

	const tableData = [
		{
			col1: 'Hello',
			col2: 'World',
			col3: 'World',
		},
		{
			col1: 'react-table',
			col2: 'rocks',
			col3: 'rocks',
		},
		{
			col1: 'whatever',
			col2: 'you want',
			col3: 'you want',
		},
	];

	const tableColumns = React.useMemo(
		() => [
			{
				Header: 'Column 1',
				accessor: 'col1', // accessor is the "key" in the data
			},
			{
				Header: 'Column 2',
				accessor: 'col2',
			},
			{
				Header: 'Column 3',
				accessor: 'col3',
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
		useTable({ columns: tableColumns, data: tableData });

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
