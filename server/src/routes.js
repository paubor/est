const ApartmentsController = require('./controllers/ApartmentsController')


module.exports = (app) => {

  app.get('/apartments',
    ApartmentsController.index)
}
