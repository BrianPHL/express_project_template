import express from "express";
import { Request, Response } from "express";
import dotenv from "dotenv";

import homeRoute from "./routes/home.js";

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static("public"))
app.use("/node_modules", express.static("node_modules"))

app.use("/", homeRoute)

app.listen(3000)