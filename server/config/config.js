import dotenv from "dotenv"
import { fileURLToPath } from "url"
import path from "path"

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, "../../.env") })

console.log(process.env.DB_USERNAME_DEV) // Debugging line to check if the environment variable is loaded

const config = {
	development: {
		username: process.env.DB_USERNAME_DEV,
		password: process.env.DB_PASSWORD_DEV,
		database: process.env.DB_NAME_DEV,
		host: process.env.DB_HOST_DEV,
		dialect: "mysql"
	},
	test: {
		username: process.env.DB_USERNAME_TEST,
		password: process.env.DB_PASSWORD_TEST,
		database: process.env.DB_NAME_TEST,
		host: process.env.DB_HOST_TEST,
		dialect: "mysql"
	},
	production: {
		username: process.env.DB_USERNAME_PROD,
		password: process.env.DB_PASSWORD_PROD,
		database: process.env.DB_NAME_PROD,
		host: process.env.DB_HOST_PROD,
		dialect: "mysql"
	}
}

export default config
