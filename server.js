var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    heading: 'Nothing',
    title: 'Article One',
    year: '2017',
    content:`<p>
            Nothing here...lol. Wanna see something?? You can do it yourself though:)<br>
            Happy developing!
        </p>`,
};


function createTemplate (data){
var title = data.title;
var heading = data.heading;
var date = data.date;
var content = data.content;

var htmltemplate = `

<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
        <div>
            <a href = "/">Home</a></a>
        </div>    
        <hr>
        <div>
            <p><strong>${heading}</strong></p>    
        </div>
        <div>
            <p>${date}</p>    
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

app.get('/article-one', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.send('Someting requested will be served here');
});

app.get('/article-three', function (req, res) {
  res.send('Someting requested will be served here');
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
