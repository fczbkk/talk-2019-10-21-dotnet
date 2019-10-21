const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use('/images', express.static(path.resolve(__dirname, 'images')))

app.listen(port, () => console.log(`Example eshop API listening on port ${port}!`))
