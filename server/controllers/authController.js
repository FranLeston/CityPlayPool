/* eslint-disable consistent-return */
import jwt from "jsonwebtoken"
import passport from "passport"
import User from "../models/User.js"

export const login = (req, res) => {
	passport.authenticate("local", (err, user) => {
		if (err) {
			return res.status(400).json({ error: err.message })
		}
		if (!user) {
			return res.status(401).json({ error: "Invalid credentials" })
		}
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
			expiresIn: "30s"
		})
		res.json({ user, token })
	})(req, res)
}

export const register = async (req, res) => {
	const { username, password } = req.body

	if (!username || !password) {
		return res.status(400).json({ error: "Missing required fields" })
	}

	try {
		const user = new User({ username, password })
		await user.save()
		res.status(200).json({ user })
	} catch (err) {
		res.status(400).json({ error: err.message })
	}
}
