import React, { useState } from "react"
import { TextField, Button, Container, Typography } from "@mui/material"
import { register } from "../services/api"

const Register = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await register({ username, password })
			alert("Registration successful")
		} catch (error) {
			alert("Registration failed")
		}
	}

	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' component='h1' gutterBottom>
				Register
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label='Username'
					variant='outlined'
					fullWidth
					margin='normal'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<TextField
					label='Password'
					type='password'
					variant='outlined'
					fullWidth
					margin='normal'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button type='submit' variant='contained' color='primary' fullWidth>
					Register
				</Button>
			</form>
		</Container>
	)
}

export default Register
