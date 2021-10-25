var express = require('express');
var router = express.Router();
var messages = require('./messages')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

/*GET form Page */
router.get('/new', (req, res, next) => {
  res.render('form')
})

/*POST form Page*/
router.post('/new', (req, res, next) => {
  messages.push({text: req.body.message, user: req.body.name, added: new Date()})
  res.redirect("/")
})

module.exports = router;
