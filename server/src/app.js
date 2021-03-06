const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const { MongoClient } = require('mongodb')

// const config = require('config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

MongoClient.connect('mongodb://localhost:27017/est', (err, db) => {
  if (err) throw err
  console.log('Database created')
  //create all collections (one for each entity)
  db.close()
})
app.listen(process.env.PORT || 8090, () => console.log('Listening for commands...'))
