import express from "express"
import {
	getSessions,
	getSession,
	createSession,
	updateSession,
	deleteSession
} from "../controllers/sessionController.js"

const sessionRouter = express.Router()

sessionRouter.get("/", getSessions)
sessionRouter.get("/:id", getSession)
sessionRouter.post("/", createSession)
sessionRouter.put("/:id", updateSession)
sessionRouter.delete("/:id", deleteSession)

export default sessionRouter
