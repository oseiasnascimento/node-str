const { Router } = require('express')
const controller = require('../controllers/product-controller')

const routes = Router()

routes.post('/', controller.post)

routes.put('/:id', controller.put)

routes.delete('/', controller.delete)

module.exports = routes
