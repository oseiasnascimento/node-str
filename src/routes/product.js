const { Router } = require('express')
const res = require('express/lib/response')

const routes = Router()

routes.post('/', (req, res) =>{
  res.status(201).send(req.body)
})

routes.put('/:id', (req, res) =>{
  const id = req.params.id
  res.status(200).send({
    id: id,
    item: req.body
  })
})

routes.delete('/', (req, res) =>{
  res.status(200).send(req.body)
})


module.exports = routes