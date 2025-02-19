import express from "express"
import bodyParser from "body-parser"
import passport from "passport"
import session from "express-session"
import dotenv from "dotenv"
import "./passport-config.js"
import authRouter from "./routes/authRoutes.js"

dotenv.config()

const PORT = process.env.PORT || 3001

const app = express()

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

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`)
})
