var express = require('express')
var app = express()
var index = require('./routes/index')

app.use('/', index)
app.listen(3000)
