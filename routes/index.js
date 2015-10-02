var assert = require('assert')
var router = require('express').Router()
var insertTask = require('../modules/crud').insertTask
var findAllTasks = require('../modules/crud').findAllTasks

router.get('/', (req, res) => {
  res.render('index', {title: 'My Todo App'})
})

router.post('/', (req, res) => {
  insertTask(req.body, (err, result, db) => {
    assert.equal(err, null)
    db.close()
    res.redirect('/')
  })
})

module.exports = router
