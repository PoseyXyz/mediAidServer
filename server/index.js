const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('./middleware/logger')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(logger)


app.use('/', require('./routes/api/reply'))
app.use(encodeURI('/tags'), require('./routes/api/tags'))
app.use(encodeURI('/symptoms'), require('./routes/api/symptoms'))
app.use(encodeURI('/search'), require('./routes/api/search'))



const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`Server started on port ${port}`))