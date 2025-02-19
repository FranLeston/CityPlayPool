import express from "express"
import { getTables, getTable, createTable, updateTable, deleteTable } from "../controllers/tableController.js"

const tableRouter = express.Router()

tableRouter.get("/", getTables)
tableRouter.get("/:id", getTable)
tableRouter.post("/", createTable)
tableRouter.put("/:id", updateTable)
tableRouter.delete("/:id", deleteTable)

export default tableRouter
