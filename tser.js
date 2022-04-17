var express=require('express');
var app=express();
const port = process.env.PORT ||  5030;
app.set('port', process.env.port || port); 


app.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
    
  });

  app.listen(port,function(){});
  