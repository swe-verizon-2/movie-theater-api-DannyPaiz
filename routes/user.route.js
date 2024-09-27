const express = require("express")
const { User } = require("../models/index")
// const Show = require("../models/index")

const userRouter = express.Router()


// CREATE USER
userRouter.post("/create", async (req, res) => {
    const createUser = await User.create(req.body)
    res.json(createUser)
})

// GET ALL USERS
userRouter.get("/", async (req, res) => {
    let allUsers = await User.findAll()
    res.json(allUsers)
})

// GET ONE USER
userRouter.get("/:id", async (req, res) => {
    let oneUser = await User.findByPk(req.params.id)
    res.json(oneUser)
})

// UPDATE ONE USER
userRouter.put("/update/:id", async (req, res) => {
    const deleteUser = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(deleteUser)
})

module.exports = userRouter