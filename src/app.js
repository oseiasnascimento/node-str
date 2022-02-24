const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

//Rotas da applicação
//const index = require('./routes/index')
//const { json } = require('body-parser')

//Solução feita por Balta
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Solução feita por Diego Fernandes
//app.use(json())

let route = router.get('/', (request, response) => {
  response.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

let create = router.post('/', (request, response) => {
  response.status(201).send(request.body)
})

let put = router.put('/:id', (request, response) => {
  let id = request.params.id
  response.status(200).send({ id: id, item: req.body })
})

let del = router.delete('/', (request, response) => {
  response.status(200).send(request.body)
})

app.use('/', route)
app.use('/products', create)
app.use('/products', put)
app.use('/products', del)

module.exports = app
