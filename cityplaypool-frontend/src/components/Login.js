import React, { useState } from "react"
import { TextField, Button, Container, Typography } from "@mui/material"
import { login } from "../services/api"

const Login = ({ onLogin }) => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const user = await login({ username, password })
			onLogin(user)
		} catch (error) {
			alert("Login failed")
		}
	}

	return (
		<Container maxWidth='sm'>
			<Typography variant='h4' component='h1' gutterBottom>
				Login
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
					Login
				</Button>
			</form>
		</Container>
	)
}

export default Login
