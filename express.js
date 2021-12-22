// import of express
const express = require('express')
// express-app initialization
const app = express()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

// listener for GET-requests to "/" route
app.get('/', function (req, res) {
  console.log(req.query)
  res.send('Hello World')
})

// listener for PUT-requests to "/test" route
app.put('/test', function (req, res) {
  console.log(req.body)
  res.send('Hello World PUT')
})

// run the server
app.listen(3000)