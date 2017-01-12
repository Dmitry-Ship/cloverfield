const manageNotes = require('./ManageNotes');
const manageLogin = require('./ManageLogin');
const manageSignUp = require('./ManageSignUp');

module.exports = (app) => {
  app.use('/notes', manageNotes);
  app.use('/login', manageLogin);
  app.use('/signup', manageSignUp);
};
