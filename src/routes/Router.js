const router = express.Router();

const routes = router.get('/', (request, response) => {
  request.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  });
});

//Outra Forma de fazer
const {Router} = require('express');

const routes = Router();

routes.get('/', (request, response) => {
  request.status(200).send({
    title: 'Node Store API',
    version: '0.0.1'
  });
});

module.exports = routes