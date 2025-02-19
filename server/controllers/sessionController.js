import Session from "../models/Session.js"

export const getSessions = async (req, res) => {
	try {
		const sessions = await Session.findAll()
		res.json({ sessions })
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const getSession = async (req, res) => {
	try {
		const { id } = req.params
		const session = await Session.findByPk(id)
		if (session) {
			res.json({ session })
		} else {
			res.status(404).json({ error: "Session not found" })
		}
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const createSession = async (req, res) => {
	try {
		const { startTime, endTime, status, tableId } = req.body
		const session = await Session.create({ startTime, endTime, status, tableId })
		res.json({ session })
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const updateSession = async (req, res) => {
	try {
		const { id } = req.params
		const { startTime, endTime, status, tableId } = req.body
		const session = await Session.findByPk(id)
		if (session) {
			session.update({ startTime, endTime, status, tableId })
			res.json({ session })
		} else {
			res.status(404).json({ error: "Session not found" })
		}
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const deleteSession = async (req, res) => {
	try {
		const { id } = req.params
		const session = await Session.findByPk(id)
		if (session) {
			await session.destroy()
			res.json({ message: "Session deleted successfully" })
		} else {
			res.status(404).json({ error: "Session not found" })
		}
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}
