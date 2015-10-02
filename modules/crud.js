var mongo = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27017/todo_app'

function insertTask (doc, cb) {
  mongo.connect(url, (err, db) => {
    assert.equal(err, null)
    var tasks = db.collection('tasks')
    tasks.insertOne(doc, (err, result) => {
      if (err) {
        return cb(err, null)
      }
      return cb(null, result, db)
    })
  })
}

module.exports.insertTask = insertTask
