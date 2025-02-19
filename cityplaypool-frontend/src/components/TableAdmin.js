import React, { useState, useEffect } from "react"
import { Container, Typography, Card, CardContent, CardActions, Button, TextField } from "@mui/material"
import Grid2 from "@mui/material/Grid2" // Grid2 is the new component in MUI v6
import { getTables } from "../services/api"

const TableAdmin = () => {
	const [tables, setTables] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const tablesData = await getTables()
			setTables(tablesData)
		}

		fetchData()
	}, [])

	const handleInputChange = (e, tableId) => {
		const { name, value } = e.target
		setTables((prevTables) => prevTables.map((table) => (table.id === tableId ? { ...table, [name]: value } : table)))
	}

	const handleStart = (tableId) => {
		// Implement start session logic
	}

	const handlePause = (tableId) => {
		// Implement pause session logic
	}

	const handleEnd = (tableId) => {
		// Implement end session logic
	}

	return (
		<Container maxWidth='lg'>
			<Typography variant='h4' component='h1' gutterBottom>
				Table Admin
			</Typography>
			<Grid2 container spacing={3}>
				{tables.map((table) => (
					<Grid2 item xs={12} sm={6} md={4} key={table.id}>
						<Card>
							<CardContent>
								<Typography variant='h5' component='h2'>
									Table {table.number}
								</Typography>
								<Typography color='textSecondary'>Status: {table.status}</Typography>
								{table.status === "active" && (
									<>
										<Typography color='textSecondary'>Session Time: {table.sessionTime} minutes</Typography>
										<Typography color='textSecondary'>Time Started: {table.startTime}</Typography>
										<Typography color='textSecondary'>Time Passed: {/* Implement stopwatch logic */}</Typography>
									</>
								)}
								<TextField
									label='Session Name'
									name='sessionName'
									variant='outlined'
									fullWidth
									margin='normal'
									value={table.sessionName || ""}
									onChange={(e) => handleInputChange(e, table.id)}
									disabled={table.status !== "available"}
								/>
							</CardContent>
							<CardActions>
								<Button
									variant='contained'
									color='primary'
									onClick={() => handleStart(table.id)}
									disabled={table.status !== "available"}
								>
									Start
								</Button>
								<Button
									variant='contained'
									color='secondary'
									onClick={() => handlePause(table.id)}
									disabled={table.status !== "active"}
								>
									Pause
								</Button>
								<Button
									variant='contained'
									color='default'
									onClick={() => handleEnd(table.id)}
									disabled={table.status !== "active"}
								>
									End
								</Button>
							</CardActions>
						</Card>
					</Grid2>
				))}
			</Grid2>
		</Container>
	)
}

export default TableAdmin
