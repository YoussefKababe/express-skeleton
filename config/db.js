var mongoose = require('mongoose')

module.exports = {
  connect: function(uri) {
    mongoose.connect(uri)
    var connection = mongoose.connection
    connection.on('error', console.error.bind(console, 'connection error:'))
    connection.once('open', function(callback) {
      console.log("Connected to Database.")
    })
  }
}
