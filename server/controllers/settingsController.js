import Settings from "../models/Settings.js"

export const getSettings = async (req, res) => {
	try {
		const settings = await Settings.findOne()
		res.json({ settings })
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}

export const updateSettings = async (req, res) => {
	try {
		const { pricePerMinute, sessionPresets } = req.body
		const settings = await Settings.findOne()
		if (settings) {
			settings.update({ pricePerMinute, sessionPresets })
			res.json({ settings })
		} else {
			res.status(404).json({ error: "Settings not found" })
		}
	} catch (error) {
		res.status(500).send(`${error}: Internal Server Error`)
	}
}
