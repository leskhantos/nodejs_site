var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.set('view engine','ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use('/assets',express.static('public'));
app.get('/', function (req, res) {
  res.render('index');
});

app.post('/',urlencodedParser, function (req, res) {
  if (!req.body) return res.sendStatus(400)
  console.log(req.body);
  res.render('index-success', {data: req.body});
});
app.get('/gallery', function (req, res) {
  res.render('gallery');
});

app.get('/news/:id', function (req, res) {
  console.log(req.query);
  res.render('news', { newsId: req.params.id});
});

app.use((req, res) => {
    res.status(404).send('404');
  });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
