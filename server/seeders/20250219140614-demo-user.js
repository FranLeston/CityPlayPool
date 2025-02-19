// filepath: /home/fran/projects/CityPlayPool/server/seeders/20230219120000-demo-user.js
import bcrypt from "bcrypt"

export default {
	up: async (queryInterface, Sequelize) => {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash("password", salt)

		await queryInterface.bulkInsert("Users", [
			{
				username: "admin",
				password: hashedPassword,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		])
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {})
	}
}
