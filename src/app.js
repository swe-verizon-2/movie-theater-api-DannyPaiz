const express = require("express")
const app = express()

// ROUTER NEEDED - update me
// const router = require("../routes/CHANGE_ME.route")

// This part allows HTTP methods w/o router
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// UPDATE ME
// app.use("/", router)

module.exports = app