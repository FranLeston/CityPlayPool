import axios from "axios"

const API_URL = "http://localhost:3001/api"

const getToken = () => localStorage.getItem("token")

export const login = async (credentials) => {
	const response = await axios.post(`${API_URL}/auth/login`, credentials)
	return response.data
}

export const register = async (userData) => {
	const response = await axios.post(`${API_URL}/auth/register`, userData)
	return response.data
}

export const getTables = async () => {
	const response = await axios.get(`${API_URL}/tables`, {
		headers: { Authorization: `Bearer ${getToken()}` }
	})
	return response.data.tables
}

export const getSettings = async () => {
	const response = await axios.get(`${API_URL}/settings`, {
		headers: { Authorization: `Bearer ${getToken()}` }
	})
	return response.data.settings
}

export const updateSettings = async (settings) => {
	const response = await axios.put(`${API_URL}/settings`, settings, {
		headers: { Authorization: `Bearer ${getToken()}` }
	})
	return response.data.settings
}

// Add more API functions as needed
