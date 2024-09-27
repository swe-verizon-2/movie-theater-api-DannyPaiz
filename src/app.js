const express = require("express")
const app = express()
const showRouter = require("../routes/show.route")
const userRouter = require("../routes/user.route")
// ROUTER NEEDED - update me
// const router = require("../routes/CHANGE_ME.route")

// This part allows HTTP methods w/o router
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// UPDATE ME
// app.use("/", router)
app.use("/shows", showRouter)
app.use("/users", userRouter)

module.exports = app