//Forma de feita por Diego Fernandes - Semana OmniStack 10.0
const { Router } = require('express')
const routes = Router()

routes.get('/', (req, res) => {
  res.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

module.exports = routes
