/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('ams_table').del();
	await knex('ams_table').insert([
		{
			id: 1,
			name: 'name_rowValue1',
			symptoms: 'symptoms_test1',
			severity: '2',
			treatment: 'treatment_test1',
			notes: 'notes_test1',
			high_risk: 'true',
		},
		{
			id: 2,
			name: 'name_rowValue2',
			symptoms: 'symptoms_test',
			severity: '2',
			treatment: 'treatment_test2',
			notes: 'notes_test2',
			high_risk: 'true',
		},
		{
			id: 3,
			name: 'name_rowValue3',
			symptoms: 'symptoms_test3',
			severity: '2',
			treatment: 'treatment_test3',
			notes: 'notes_test3',
			high_risk: 'true',
		},
		{
			id: 4,
			name: 'name_rowValue4',
			symptoms: 'symptoms_test4',
			severity: '2',
			treatment: 'treatment_test4',
			notes: 'notes_test4',
			high_risk: 'true',
		},
		{
			id: 5,
			name: 'name_rowValue5',
			symptoms: 'symptoms_test5',
			severity: '2',
			treatment: 'treatment_test5',
			notes: 'notes_test5',
			high_risk: 'true',
		},
	]);
};
