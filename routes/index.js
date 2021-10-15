const parseRouter = require('./parse');
const databaseRouter = require('./database');

function router (app) {
  app.use('/parse', parseRouter)
  app.use('/database', databaseRouter)
}

module.exports = router;
