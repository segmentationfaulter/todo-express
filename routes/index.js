var router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {title: 'My Todo App'})
})

module.exports = router
