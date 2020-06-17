const fetch = require('node-fetch');

const nodeFetchTest = (request, response) => {
  fetch('https://httpbin.org/get')
    .then((res) => res.json())
    .then((json) => {
      response.send(json);
    })
    .catch((error) => {
      console.log(error);
      response.status(error.statusCode).send({message: error.statusMessage});
    });
};

const nodeFetchTwoCall = async (request, response) => {
  try {
    const api1 = await fetch('https://api.github.com/users/github');
    const api2 = await fetch('https://httpbin.org/get');
    Promise.all([api1.json(), api2.json()])
      .then((results) => {
        response.send({
          api1: results[0],
          api2: results[1],
        });
      });
  } catch (e) {
    console.log(e);
    response.status(e.statusCode).send({message: e.statusMessage});
  }
};


module.exports = {
  nodeFetchTest,
  nodeFetchTwoCall,
};
