// filepath: /home/fran/projects/CityPlayPool/server/models/Session.js
import { Model, DataTypes } from "sequelize"
import sequelize from "../db.js"
import Table from "./Table.js"

class Session extends Model {}

Session.init(
	{
		startTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		endTime: {
			type: DataTypes.DATE
		},
		status: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue: "active"
		},
		tableId: {
			type: DataTypes.INTEGER,
			references: {
				model: Table,
				key: "id"
			}
		}
	},
	{
		sequelize,
		modelName: "Session"
	}
)

Table.hasMany(Session, { foreignKey: "tableId" })
Session.belongsTo(Table, { foreignKey: "tableId" })

export default Session
