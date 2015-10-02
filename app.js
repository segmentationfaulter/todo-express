var express = require('express')
var app = express()
var index = require('./routes/index')

// views settings
app.set('views', './views')
app.set('view engine', 'jade')

// middlewares
app.use('/', index)
app.use('/create', index)

// listen on port 3000
app.listen(3000)
