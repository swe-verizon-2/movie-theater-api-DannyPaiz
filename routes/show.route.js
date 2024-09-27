const express = require("express")
// const User = require("../models/index")
const { Show } = require("../models/index")

const showRouter = express.Router()

// CREATE ONE SHOW
showRouter.post("/create", async (req, res) => {
    const createShow = await Show.create(req.body)
    res.json(createShow)
    // res.json({data:createShow, message:req.body})

})

// GET ALL SHOWS
showRouter.get("/", async (req, res) => {
    let allShows = await Show.findAll()
    res.json(allShows)
})

showRouter.get("/:id", async (req, res) => {
    let oneShow = await Show.findByPk(req.params.id)
    res.json(showRouter)
})

showRouter.put("/update/:id", async (req, res) => {
    let updatedShow = await Show.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.json(updatedShow)
})

showRouter.delete("/remove/:id", async (req, res) => {
    const deleteShow = await Show.destroy({
        where: {
            id: req.params.id
        }
    })
    res.json(deleteShow)
})

module.exports = showRouter