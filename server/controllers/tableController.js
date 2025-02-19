import Table from "../models/Table.js"

export const getTables = async (req, res) => {
	try {
		const tables = await Table.findAll()
		res.json({ tables })
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const getTable = async (req, res) => {
	try {
		const { id } = req.params
		const table = await Table.findByPk(id)
		if (table) {
			res.json({ table })
		} else {
			res.status(404).json({ error: "Table not found" })
		}
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const createTable = async (req, res) => {
	try {
		const { number, status } = req.body
		const table = await Table.create({ number, status })
		res.json({ table })
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const updateTable = async (req, res) => {
	try {
		const { id } = req.params
		const { number, status } = req.body
		const table = await Table.findByPk(id)
		if (table) {
			table.update({ number, status })
			res.json({ table })
		} else {
			res.status(404).json({ error: "Table not found" })
		}
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const deleteTable = async (req, res) => {
	try {
		const { id } = req.params
		const table = await Table.findByPk(id)
		if (table) {
			await table.destroy()
			res.json({ message: "Table deleted successfully" })
		} else {
			res.status(404).json({ error: "Table not found" })
		}
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}
