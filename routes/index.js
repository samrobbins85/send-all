var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    const accountSid = 'AC414008369274a3792362482c17d8ce16';
    const auth = req.query.auth;
    const message = req.query.message;
    const number1 = req.query.number;
    const client1 = require('twilio')(accountSid,auth);
client1.messages
  .create({
     body: message,
     from: '+19312318204',
     to: '+44'+number1
   })
  .then(message => console.log(message.sid));
  

});

module.exports = router;

