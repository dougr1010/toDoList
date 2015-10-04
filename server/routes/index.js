var express = require('express');
var router = express.Router();
var path = require('path');


/* get HTML page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log('hit index.html endpoint')
    res.sendfile(path.join(__dirname,'../public/views/index.html'))
});

router.post('/sendToServer', function(request, response, next){
    console.log('hit /sendToServer endpoint');
    console.log(request.body);
})

module.exports = router;
