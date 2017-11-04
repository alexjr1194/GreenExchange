var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./routes/html-routes')(app);

app.listen(port, function () {
  console.log('Listening on port ' + port);
});
