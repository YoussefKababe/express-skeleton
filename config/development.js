var db = require('./db')
var morgan = require('morgan')

module.exports = function(app, express) {
  db.connect(process.env.DB_URI)

  app.use(morgan('dev'))
}