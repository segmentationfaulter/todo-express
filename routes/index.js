var router = require('express').Router()

router.get('/', (req, res) => {
  res.send('My TODO App')
})

module.exports = router
