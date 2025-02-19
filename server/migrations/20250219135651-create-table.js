// filepath: /home/fran/projects/CityPlayPool/server/migrations/20230219120001-create-table.js
export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Tables", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			number: {
				type: Sequelize.INTEGER,
				allowNull: false,
				unique: true
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: "available"
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
		await queryInterface.dropTable("Tables")
	}
}
