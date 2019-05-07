var express = require('express');
var app = express();
var fetch = require('node-fetch');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/getInfoByCep/:cepNumber', function (req, res) {
  console.log('Request received. CEP number: ' + req.params.cepNumber);
  fetch('https://viacep.com.br/ws/'+ req.params.cepNumber + '/json/',
          { method: 'GET',
            mode: 'cors',
            cache: 'default' })
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if(response.erro && response.erro === true) {
          console.log('Invalid CEP');
          res.status(406).send('CEP Inválido');
        } else {
          console.log('Success');
          res.send(JSON.stringify({ logradouro: response.logradouro,
                                    localidade: response.localidade,
                                    uf: response.uf,
                                    cep: response.cep}));
        }
      })
});

app.listen(3001, function () {
  console.log('App listening on port 3001!');
});
