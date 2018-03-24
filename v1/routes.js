
const Student = require('./models/student');

module.exports = (app) => {

  app.get('/signup/student', (_, res) => res.render('studentSignup'));

  app.post('/signup/student', (req, res) => {
    if (req.body.username &&
      req.body.name &&
      req.body.phone &&
      req.body.address &&
      req.body.department &&
      req.body.rollNo &&
      req.body.email &&
      req.body.password) {

      var userData = {

        username: req.body.username,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        department: req.body.department,
        rollNo: req.body.rollNo,
        email: req.body.email,
        password: req.body.password
      };
      console.log(userData);
      const student = new Student(userData);
      student.save()
        .then(console.log)
        .catch(console.error);

      //use schema.create to insert data into the db
      // Student.save(userData, function (err, user) {
      //   if (err) {
      //     return next(err)
      //   } else {
      //     return res.redirect('/profile');
      //   }
      // });
    }
  });
};
