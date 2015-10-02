var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var index = require('./routes/index')

// views settings
app.set('views', './views')
app.set('view engine', 'jade')

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', index)
app.use('/create', index)

// listen on port 3000
app.listen(3000)
