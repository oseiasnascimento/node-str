const express = require('express')
//Rotas da applicação
//const routes = require('./routes/Router')
const indexRoute = require('./routes/index')
const productRoute = require('./routes/product')

const app = express()
app.use(express.json())

app.use('/', indexRoute)
app.use('/products', productRoute)

module.exports = app