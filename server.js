var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// db connection:
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected', function(){
  console.log('DB connected to mongo @ port:27017');
});
mongoose.connection.on('error', function(err){
  if(err){
    console.log('Error in db connection: ' + err);
  }
});

//port
const port = 3000;

//adding middleware

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

// route

app.get('/', function(req, res){
  res.send('hello Qadir, you made it tought');
});

app.listen(port, function(){
  console.log('server listening on port: ' + port);
});
