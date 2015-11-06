var express = require('express')
var routes = require('./routes')
require('dotenv').config({path: 'config/.env'})

var app = express()
var config = require('./config')(app, express)

app.use('/', routes.pagesRoutes)

app.listen(app.get('port'), function() {
  console.log('App running on port: ' + app.get('port'))
})