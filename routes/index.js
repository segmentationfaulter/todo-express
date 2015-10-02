var assert = require('assert')
var router = require('express').Router()
var insertTask = require('../modules/crud').insertTask

router.get('/', (req, res) => {
  res.render('index', {title: 'My Todo App'})
})

router.post('/', (req, res) => {
  var doc = {task: 'This is my first task'}
  insertTask(doc, (err, result, db) => {
    assert.equal(err, null)
    console.log('Items inserted: ' + result.insertedCount)
    db.close()
  })
})

module.exports = router
