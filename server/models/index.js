import fs from "fs"
import path from "path"
import Sequelize from "sequelize"
import process from "process"
import config from "../config/config.js"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || "development"
const dbConfig = config[env]
const db = {}

let sequelize
if (dbConfig.use_env_variable) {
	sequelize = new Sequelize(process.env[dbConfig.use_env_variable], dbConfig)
} else {
	sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig)
}

fs.readdirSync(__dirname)
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" && file.indexOf(".test.js") === -1
	)
	.forEach((file) => {
		import(path.join(__dirname, file)).then((module) => {
			const model = module.default(sequelize, Sequelize.DataTypes)
			db[model.name] = model
		})
	})

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
