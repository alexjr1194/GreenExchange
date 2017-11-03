module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('splash');
  });

  app.get('/user/:id', function (req, res) {
    res.render('user');
  });
};
