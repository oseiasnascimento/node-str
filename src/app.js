const express = require('express')
//Rotas da applicação
const routes = require('./routes/Router')
const index = require('./routes/index')

const app = express()
app.use(express.json())

//app.use('/', routes)
app.use('/', index)
// app.use('/products', create)
// app.use('/products', put)
// app.use('/products', del)

module.exports = app