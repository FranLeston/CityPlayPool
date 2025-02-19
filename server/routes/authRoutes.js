import express from "express"
import passport from "passport"
import { login, register } from "../controllers/authController.js"
import { verifyToken } from "../utils/verifyToken.js"

const authRouter = express.Router()

authRouter.post("/verify", verifyToken, (req, res) => {
	const { userId } = req
	res.json({ userId })
})

authRouter.post("/login", passport.authenticate("local"), login)

authRouter.post("/register", register)

export default authRouter
