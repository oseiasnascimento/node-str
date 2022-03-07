//Forma de feita por Diego Fernandes - Semana OmniStack 10.0
const { Router } = require('express')

const routes = Router()

routes.get('/', (req, res) => {
  response.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  })
})

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

//Forma feita por Balta - Carreira Desemvolvedor Back-and
// const router = express.Router();

// const routes = router.get('/', (request, response) => {
//   request.status(200).send({
//     title: 'Node Store API',
//     version: '0.0.1'
//   });
// });

// let route = router.get('/', (request, response) => {
//   response.status(200).send({
//     title: 'Node Store API',
//     version: '0.0.1'
//   })
// })

// let create = router.post('/', (request, response) => {
//   response.status(201).send(request.body)
// })

// let put = router.put('/:id', (request, response) => {
//   let id = request.params.id
//   response.status(200).send({ id: id, item: req.body })
// })

// let del = router.delete('/', (request, response) => {
//   response.status(200).send(request.body)
// })
