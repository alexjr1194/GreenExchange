var db = require('../model');

module.exports = function (app) {
  app.get('/api/users/:id', function (req, res) {
    console.log(req)
    db.users.fingOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function (dbUsers) {
      console.log(res);
      res.json(dbUsers);
    });
  });

  app.post('/api/users', function (req, res) {
    db.users.create(req.body).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });
};
