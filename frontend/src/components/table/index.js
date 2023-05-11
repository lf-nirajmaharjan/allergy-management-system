import React, { useState, useMemo, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import Edit from '../../pages/dashboard/Edit';
import { useGetAllergyData } from '../../api/allergy';
import Delete from '../../pages/dashboard/Delete';
import { useNavigate } from 'react-router-dom';
import HighRisk from '../../pages/dashboard/HighRisk';

const Table = () => {
	const { data } = useGetAllergyData();

	const [activeRowData, setActiveRowData] = useState();
	const [showModal, setShowModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showHighRiskModal, setShowHighRiskModal] = useState(false);
	const [sortedData, setSortedData] = useState(data);
	const realData = React.useMemo(() => sortedData || [], [sortedData]);
	const navigate = useNavigate();

	useEffect(() => {
		const sortedData = data?.sort((a, b) => b.high_risk - a.high_risk);
		setSortedData(sortedData);
	}, [data]);

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
				Header: 'High risk',
				Cell: (values) => {
					return (
						<div>
							<input
								className='high_risk_check'
								type='checkbox'
								checked={values.cell.row.original.high_risk}
								onChange={() => {
									setShowHighRiskModal(true);
									setActiveRowData(values.cell.row.original);
								}}
							/>
						</div>
					);
				},
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
									console.log(values);
								}}
							>
								Edit
							</button>
							<button
								className='btn btn-secondary'
								onClick={() => {
									navigate(`/dashboard-detail/${values.cell.row.original.id}`);
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
		[navigate]
	);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns: tableColumns, data: realData }, useSortBy);

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

			{showHighRiskModal && (
				<HighRisk
					setShowHighRiskModal={setShowHighRiskModal}
					activeRowData={activeRowData}
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
									<th {...column.getHeaderProps(column.getSortByToggleProps())}>
										{column.render('Header')}
										<span>
											{column.isSorted
												? column.isSortedDesc
													? ' 🔽'
													: ' 🔼'
												: ''}
										</span>
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
