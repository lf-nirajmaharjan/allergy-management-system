/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable('ams_table', function (table) {
		table.increments('id');
		table.string('name', 255).notNullable();
		table.string('symptoms', 255).notNullable();
		table.string('severity', 255).notNullable();
		table.string('treatment', 255).notNullable();
		table.string('notes', 255).notNullable();
		table.boolean('high_risk', 255).notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('ams_table');
};
