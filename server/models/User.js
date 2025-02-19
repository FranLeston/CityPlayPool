import { DataTypes } from "sequelize"
import bcrypt from "bcrypt"
import sequelize from "../db.js"

const User = sequelize.define("User", {
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},

	password: {
		type: DataTypes.STRING,
		allowNull: false
	}
})

User.prototype.checkPassword = async function (password) {
	const match = await bcrypt.compare(password, this.password)
	return match
}

User.beforeCreate(async (user) => {
	const salt = await bcrypt.genSalt(10)
	user.password = await bcrypt.hash(user.password, salt)
})

User.addHook("afterValidate", (user) => {
	const errors = []
	if (user.errors) {
		user.errors.forEach((error) => {
			errors.push(error.message)
		})
	}
	if (errors.length > 0) {
		throw new Error(errors.join(", "))
	}
})

export default User
