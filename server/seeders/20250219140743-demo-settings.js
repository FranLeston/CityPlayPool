// filepath: /home/fran/projects/CityPlayPool/server/seeders/20230219120002-demo-settings.js
export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("Settings", [
			{
				pricePerMinute: 0.25,
				sessionPresets: JSON.stringify([30, 45, 60, 90, 120, 160]),
				createdAt: new Date(),
				updatedAt: new Date()
			}
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Settings", null, {})
	}
}
