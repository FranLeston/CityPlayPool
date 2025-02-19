// filepath: /home/fran/projects/CityPlayPool/server/seeders/20230219120001-demo-table.js
export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Tables", [
			{ number: 1, status: "available", createdAt: new Date(), updatedAt: new Date() },
			{ number: 2, status: "available", createdAt: new Date(), updatedAt: new Date() },
			{ number: 3, status: "available", createdAt: new Date(), updatedAt: new Date() },
			{ number: 4, status: "available", createdAt: new Date(), updatedAt: new Date() },
			{ number: 5, status: "available", createdAt: new Date(), updatedAt: new Date() },
			{ number: 6, status: "available", createdAt: new Date(), updatedAt: new Date() },
			{ number: 7, status: "available", createdAt: new Date(), updatedAt: new Date() },
			{ number: 8, status: "available", createdAt: new Date(), updatedAt: new Date() }
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Tables", null, {})
	}
}
