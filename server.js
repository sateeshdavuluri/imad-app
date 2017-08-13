var express = require('express');//lib for listening ports and req,responses
var morgan = require('morgan');//lib for log to app
var path = require('path');

var app = express();
app.use(morgan('combined'));

var events= { 
    'wedding1' : {
                title :   'wedding.... | satD',
                heading:  'Types',
                content:` <p>There are many ways to count::</p>
                          <p>tarditional, registered, by StayToGether `
        
              },
    'caterer1' : {
                title :  'caterer | satD',
                heading: 'Menu',
                content:`<p>You wish we serve</p>
                         <p>South Indi, North Indi, chinese, Chat,....</p>`
    }
    };


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

app.get('/:eventsName',function(req,res){
     var eventsName = req.params.eventsName;
     res.send(createTemplate(events[eventName]));
});

app.get('/pandit',function(req,res){
    res.send("*** we help you in finding pandits for your occation ***");
});

app.get('/caterer',function(req,res){
    res.sendFile(path.join(__dirname,'ui','caterer.html'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
