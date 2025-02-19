import { Sequelize } from "sequelize"
import dotenv from "dotenv"
import config from "./config/config.js"

dotenv.config()

const env = process.env.NODE_ENV || "development"
const dbConfig = config[env]

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
	host: dbConfig.host,
	dialect: dbConfig.dialect
})

sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.")
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err)
	})

export default sequelize
