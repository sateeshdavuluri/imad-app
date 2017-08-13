var express = require('express');//lib for listening ports and req,responses
var morgan = require('morgan');//lib for log to app
var path = require('path');

var app = express();
app.use(morgan('combined'));





app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/wedding',function(req,res){
     res.sendFile(path.join(__dirname, 'ui', 'wedding.html'));
});

app.get('/pandit',function(req,res){
    res.send("*** we help you in finding pandits for your occation ***");
});

app.get('/caterer',function(req,res){
    res.send(path.join(__dirname,'ui','caterer.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
