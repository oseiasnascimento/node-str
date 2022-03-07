const express = require('express')
//Rotas da applicação
//const routes = require('./routes/Router')
//const index = require('./routes/index')
const product = require('./routes/product')

const app = express()
app.use(express.json())

//app.use('/', index)
app.use('/products', product)

module.exports = app
