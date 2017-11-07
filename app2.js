var form = require('connect-form');
var app = module.exports = express.createServer(form({ keepExtensions: true, uploadDir:'/db/schema.sql' }));



app.get('/user/:id', function(req, res) {
    res.send('user ' + req.params.id);
});

