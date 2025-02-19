import React from "react"
import { Routes, Route } from "react-router-dom"
import NavBar from "./NavBar"
import Settings from "./Settings"
import TableAdmin from "./TableAdmin"

const Dashboard = ({ onLogout }) => {
	return (
		<>
			<NavBar onLogout={onLogout} />
			<Routes>
				<Route path='settings' element={<Settings />} />
				<Route path='tables' element={<TableAdmin />} />
				<Route path='/' element={<TableAdmin />} /> {/* Default route */}
			</Routes>
		</>
	)
}

export default Dashboard
