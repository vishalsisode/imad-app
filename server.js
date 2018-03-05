var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
   'article-one':{
     title:  'Article one I Vishal Sisode',
     heading: 'Article one',
     date: 'March 5,2018',
     content: `
       <p>
           This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web.
       </p>
       <p>
           This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web.
       </p>
       <p>
             This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web. This is my first article of web.    
       </p>`
    },//article 1 end
    
 //article two start here   
    
     'article-two':{
     title:  'Article two I Vishal Sisode',
     heading: 'Article two',
     date: 'March 10,2018',
     content: `
       <p>
           This is my second article of web. 
       </p>`
             
    },//article 2 end
 
  //article three start here 
  
     'article-three':{
     title:  'Article three I Vishal Sisode',
     heading: 'Article three',
     date: 'March 15,2018',
     content: `
       <p>
           This is my third article of web. 
       </p>`
             
    }//article 3 end
    
};//end articles

// function start here
function createTemplate(data){
    var title= data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTemplate= `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
     
    </head>
    <body>
      <div class="container"       >    
        <div>
            <o href="/">Home</o>
        </div>
        <hr/>
          <h3>
           ${heading}
          </h3>
          <div>
           ${date}
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
//function end


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
 //articleName= article-one
 //articles[articleName]== {} content object for article one
 var articleName=req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
