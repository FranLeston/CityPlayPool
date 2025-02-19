// filepath: /home/fran/projects/CityPlayPool/server/migrations/20230219120003-create-settings.js
export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Settings", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			pricePerMinute: {
				type: Sequelize.FLOAT,
				allowNull: false,
				defaultValue: 0.5
			},
			sessionPresets: {
				type: Sequelize.JSON,
				allowNull: false,
				defaultValue: [30, 45, 60, 90, 120, 160]
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Settings")
	}
}
