import React from "react"
import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

const NavBar = ({ onLogout }) => {
	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography variant='h6' style={{ flexGrow: 1 }}>
					CityPlayPool
				</Typography>
				<Button color='inherit' component={Link} to='/dashboard/settings'>
					Settings
				</Button>
				<Button color='inherit' component={Link} to='/dashboard/tables'>
					Table Admin
				</Button>
				<Button color='inherit' onClick={onLogout}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	)
}

export default NavBar
