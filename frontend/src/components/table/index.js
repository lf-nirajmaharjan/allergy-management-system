import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import Edit from '../../pages/dashboard/Edit';
import { useGetAllergyData } from '../../api/allergy';
import Delete from '../../pages/dashboard/Delete';
import { useNavigate } from 'react-router-dom';

const Table = () => {
	const { data } = useGetAllergyData();
	const [activeRowData, setActiveRowData] = useState();

	const [showModal, setShowModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const navigate = useNavigate();

	const tableColumns = useMemo(
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
				Cell: (values) => {
					return (
						<div className='d-flex gap-2x'>
							<button
								className='btn btn-primary'
								onClick={() => {
									setShowModal(true);
									setActiveRowData(values.cell.row.original);
								}}
							>
								Edit
							</button>
							<button
								className='btn btn-secondary'
								onClick={() => {
									navigate('/dashboard-detail');
								}}
							>
								View
							</button>
							<button
								className='btn btn-danger'
								onClick={() => {
									setActiveRowData(values.cell.row.original);
									setShowDeleteModal(true);
								}}
							>
								Delete
							</button>
						</div>
					);
				},
			},
		],
		[]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns: tableColumns, data: data || [] });

	if (!data) {
		return <p>loading</p>;
	}

	return (
		<>
			{showModal && (
				<Edit
					activeRowData={activeRowData}
					setShowModal={setShowModal}
					title='Edit Allergy'
				/>
			)}

			{showDeleteModal && (
				<Delete
					activeRowData={activeRowData}
					setShowDeleteModal={setShowDeleteModal}
					title='Delete Item'
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
