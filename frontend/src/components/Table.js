import React from 'react';
import { useTable } from 'react-table';

const Table = () => {
	const tableData = [
		{
			col1: 'Hello',
			col2: 'World',
		},
		{
			col1: 'react-table',
			col2: 'rocks',
		},
		{
			col1: 'whatever',
			col2: 'you want',
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
		],
		[]
	);
	// const tableInstance = useTable({ tableData, columns });

	// const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
	// 	tableInstance;

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns: tableColumns, data: tableData });

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => {
					return (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
								return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
							})}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
