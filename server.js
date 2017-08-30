var express = require('express');//lib for listening ports and req,responses
var morgan = require('morgan');//lib for log to app
var path = require('path');
var crypto = require('crypto') // library fo hashing in noejs
var bodyParser = require('body-parser');

var Pool = require('pg').Pool; //to connect db node-postgres
var config ={
    user : 'sateeshdavuluri',
    database : 'sateeshdavuluri',
    host :'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var counter =0;
app.get('/counter', function(req,res){
  counter = counter + 1;
  res.send(counter.toString());
});

var names =[];
app.get('/submit-name', function(req,res){  //url /submit-name?name=xxxx
  //get the name from request
    var name = req.query.name; //anotherway for this ,in url /submit-name/sateesh
                               // in code name = req.params.name   
  
  names.push(name);
  
  //JSON: JAVA SCRIPT OBJECT NOTIFICATION
  res.send(JSON.stringify(names));
});


app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});


function hash(input,salt){
   //how to create a hash
   var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
  
  return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
    
}


app.get('/hash/:input',function(req,res){
    
    var hashedString =hash(req.params.input,"salt-it-with-love");
    res.send(hashedString);
    
});



app.post('/create-user',function(req,res){      //post to insert into request
    
    //username password
    //JSON body parser
    var username = req.body.username;
    var password = req.body.password;
    
    var salt = crypto.randomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    pool.query('INSERT INTO "user"(username,password) VALUES($1,$2)',[username,dbString] ,function(err,result){
        
        if(err) {
          res.status(500).send(err.toString());
      } else{
          
          res.send("User successfullycreated" + username);
      }
    });
    
});


app.post('/login',function(req,res){      //app.post to insert into request
    
    //username password
    //JSON body parser
    var username = req.body.username;
    var password = req.body.password;
    
    pool.query('SELECT * FROM "user" WHERE username= $1',[username] ,function(err,result){
        
        if(err) {
            res.status(500).send(err.toString());
        } 
        else{
              if(result.rows.length === 0){
                 res.send(403).send("username/password is invalid");
              } 
              else {
                  // match password
                  var dbSring = result.rows[0].password;
                  var salt = dbstring.split("$")[2];
                  var hashedString =hash(password,salt); // hash created basd on ps submitted and original salt
                  if(hashedString === dbString){
                      res.send("Credentials are Correct");
                  } 
                  else {
                        res.send(403).send("username/password is invalid");
                       }
               }
            }
             
        
      
    });
    
});


//database pool connect
var pool = new Pool(config);
app.get('/test-db', function(req,res){
   // make a select request
   //return response
   
    pool.query('SELECT * FROM test',function(err,result){
      if(err) {
          res.status(500).send(err.toString());
      } else{
          res.send(JSON.stringify(result,rows));
      }
    });
});



var events= { 
    'wedding1':{
                title :   'wedding.... | satD',
                heading:  'Types',
                content:` <p>There are many ways to count::</p>
                          <p>tarditional, registered, by StayToGether</p> `
        
              },
    'caterer1':{
                title :  'caterer | satD',
                heading: 'Menu',
                content:`<p>You wish we serve</p>
                         <p>South Indi, North Indi, chinese, Chat,....</p>`
    }
    };


//html template 
function createTemplate(data){ 

var title = data.title;
var heading = data.heading;
var content = data.content;

var htmlTemplate = `  
    <html>
        <head>
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="/ui/style.css" rel="stylesheet" />
            
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <br/>
                
                <div>
                   <h3> ${heading}
                   </h3>
                   </hr>
                </div>

                <div>
                   ${content}
                    
                </div>
            </div>
        </body>
    </html>
`;

return htmlTemplate;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

//data passed here through dataase
app.get('/events/:eventsName',function(req,res){
     var eventsName = req.params.eventsName;
     
     // in sql query " - " appers in title then add single quotes to variable
     // sql injection  ';DELETE from "events" where 'a' = 'a 
     //to protect from sql injection pg librarysuggess to add "$1" for ' ' variable in array 
     pool.query("SELECT * FROM events where title = $1",[req.params.eventsName],function(err,result){
         if(err){
             res.status(500).send(err.toString());
         } else {
             if(result.rows ===0){
                 res.status(404).send(" :) Events Page Not Found");
             } else {
                 var eventsData = result.rows[0];
                 res.send(createTemplate(eventsData));
             }
         }
     });
     
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
