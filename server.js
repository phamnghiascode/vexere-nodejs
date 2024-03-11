const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const { sequelize } = require('./models')
const { rootRouter } = require('./routers')
const app = express()

// cai dat JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// cai static file
const pubicPathDirectory = path.join(__dirname, "./public")
app.use("/public", express.static(pubicPathDirectory))


//dùng router

app.use('/api/v1', rootRouter)
app.listen(3000, async () => {
    console.log(`App listening on http://localhost:3000`)
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})
