import React, { useState, useEffect } from "react"
import { TextField, Button, Container, Typography } from "@mui/material"
import { getSettings, updateSettings } from "../services/api"

const Settings = () => {
	const [settings, setSettings] = useState({ pricePerMinute: 0, sessionPresets: [] })

	useEffect(() => {
		const fetchData = async () => {
			const settingsData = await getSettings()
			setSettings(settingsData)
		}

		fetchData()
	}, [])

	const handleSettingsChange = (e) => {
		const { name, value } = e.target
		setSettings((prevSettings) => ({
			...prevSettings,
			[name]: value
		}))
	}

	const handleSettingsSubmit = async (e) => {
		e.preventDefault()
		await updateSettings(settings)
		alert("Settings updated successfully")
	}

	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' component='h1' gutterBottom>
				Settings
			</Typography>
			<form onSubmit={handleSettingsSubmit}>
				<div>
					<TextField
						label='Price Per Minute'
						type='number'
						name='pricePerMinute'
						variant='outlined'
						fullWidth
						margin='normal'
						value={settings.pricePerMinute}
						onChange={handleSettingsChange}
					/>
				</div>
				<div>
					<TextField
						label='Session Presets (comma-separated)'
						type='text'
						name='sessionPresets'
						variant='outlined'
						fullWidth
						margin='normal'
						value={settings.sessionPresets.join(", ")}
						onChange={(e) =>
							setSettings((prevSettings) => ({
								...prevSettings,
								sessionPresets: e.target.value.split(",").map(Number)
							}))
						}
					/>
				</div>
				<Button type='submit' variant='contained' color='primary' fullWidth>
					Update Settings
				</Button>
			</form>
		</Container>
	)
}

export default Settings
