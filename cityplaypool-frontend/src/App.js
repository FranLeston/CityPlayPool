import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import Dashboard from "./components/Dashboard"

const App = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		const token = localStorage.getItem("token")
		if (token) {
			setUser({ token })
		}
	}, [])

	const handleLogin = (user) => {
		localStorage.setItem("token", user.token)
		setUser(user)
	}

	const handleLogout = () => {
		localStorage.removeItem("token")
		setUser(null)
	}

	return (
		<Router>
			<Routes>
				<Route path='/login' element={user ? <Navigate to='/dashboard' /> : <Login onLogin={handleLogin} />} />
				<Route path='/register' element={user ? <Navigate to='/dashboard' /> : <Register />} />
				<Route path='/dashboard/*' element={user ? <Dashboard onLogout={handleLogout} /> : <Navigate to='/login' />} />
				<Route path='*' element={<Navigate to='/login' />} />
			</Routes>
		</Router>
	)
}

export default App
