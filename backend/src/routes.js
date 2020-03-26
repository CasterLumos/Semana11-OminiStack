const express = require('express');
const ongController = require('./controllers/ongController')
const routes = express.Router();
const incidentsController = require('./controllers/incidentsController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')


routes.post('/sessions', sessionController.create)
routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)


routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.index)
routes.delete('/incidents/:id', incidentsController.delete)
routes.get('/profile', profileController.index)

module.exports = routes;