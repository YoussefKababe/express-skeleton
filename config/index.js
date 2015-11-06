var bodyParser = require('body-parser')

module.exports = function(app, express) {
  app.set('port', process.env.PORT || 3000)

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  var env = require('./' + app.get('env'))(app, express)
}