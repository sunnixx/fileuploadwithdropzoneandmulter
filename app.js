var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var ejs = require('ejs');

var app = express();
var upload = multer({dest: 'uploads/'})

var port = 3000;

//Middleware
app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Template Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//routes
app.get('/',function(req,res,next){
  res.render('index');
});

app.post('/',upload.single('avatar'), function(req,res,next){
  console.log(req.file);
  console.log(req.body.file);
  res.send('fileuploaded');
});

app.listen(3000, function(){
  console.log('Listening to port: ' + port);
});
