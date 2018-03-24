var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@localhost/Attendance?authSource=admin');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

require('./routes')(app);

app.listen(3000,function(){
  console.log('Sever has started on port 3000');
});
