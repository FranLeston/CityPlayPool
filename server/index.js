import express from "express"
import bodyParser from "body-parser"
import passport from "passport"
import session from "express-session"
import dotenv from "dotenv"
import cors from "cors"

import "./passport-config.js"
import authRouter from "./routes/authRoutes.js"
import tableRouter from "./routes/tableRoutes.js"
import sessionRouter from "./routes/sessionRoutes.js"
import settingsRouter from "./routes/settingsRoutes.js"

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
	session({
		secret: process.env.PASSPORT_SECRET_KEY,
		resave: false,
		saveUninitialized: false
	})
)

app.use(passport.initialize())
app.use(passport.session())

app.use("/api/auth", authRouter)
app.use("/api/tables", tableRouter)
app.use("/api/sessions", sessionRouter)
app.use("/api/settings", settingsRouter)

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
