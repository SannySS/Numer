var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
//npm install -g express-generator
//express --view=ejs
//install 
//npm i cors
// อนุญาติให้ส่งข้าม
// axios ดึงหน้า
