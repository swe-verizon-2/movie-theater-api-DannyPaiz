const app = require("./src/app")
// NOTE: DID NOT RUN -> NODE SERVER.JS WITHOUT { }
const { db } = require("./db/connection")
const port = 3000

app.listen(port, () => {
    db.sync()
    console.log(`Listening on http://localhost:${port}/restaurants`)
})