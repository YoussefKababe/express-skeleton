var db = require('./db')

module.exports = function(app, express) {
  db.connect(process.env.MONGOLAB_URI)

  app.use(function(req, res, next) {
    res.set('x-powered-by', 'Project Name')
    next()
  })
}