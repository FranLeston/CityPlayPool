// filepath: /home/fran/projects/CityPlayPool/server/migrations/20230219120002-create-session.js
export default {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Sessions", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			startTime: {
				type: Sequelize.DATE,
				allowNull: false
			},
			endTime: {
				type: Sequelize.DATE
			},
			status: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: "active"
			},
			tableId: {
				type: Sequelize.INTEGER,
				references: {
					model: "Tables",
					key: "id"
				}
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
		await queryInterface.dropTable("Sessions")
	}
}
