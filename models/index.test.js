const { execSync } = require("child_process")
execSync("npm install")
execSync("npm run seed")

const request = require("supertest")
const syncSeed= require("seed")

const { Show, User } = require("../models/index")
const showRouter =require("../routes/show.route")
const userRouter = require("../routes/user.route")


const app = require("../src/app")
const db = require("../db/connection")

app.use("/shows", showRouter)
app.use("/users", userRouter)

beforeAll(async () => {
    await syncSeed()
    const shows = await Shows.findAll({})
    showsQuantity = shows.length
    const users = await Users.findAll({})
    usersQuantity = users.length
})

describe("/shows HTTP ROUTER Tests", () => {

    test("should return 200 on successful GET", async () => {
        const response = await request(app).get("/shows")
        console.log("================")
        console.log(response.body[0])
        console.log("================")

    })
})