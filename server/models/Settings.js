// filepath: /home/fran/projects/CityPlayPool/server/models/Settings.js
import { Model, DataTypes } from "sequelize"
import sequelize from "../db.js"

class Settings extends Model {}

Settings.init(
	{
		pricePerMinute: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0.25
		},
		sessionPresets: {
			type: DataTypes.JSON,
			allowNull: false,
			defaultValue: [30, 45, 60, 90, 120, 160]
		}
	},
	{
		sequelize,
		modelName: "Settings"
	}
)

export default Settings
