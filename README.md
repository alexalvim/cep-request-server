## CEP request server

Esta aplicação tem como responsabilidade receber um valor por requisição na URL `/getInfoByCep/:cepNumber` bater na API https://viacep.com.br e filtrar os valores recebidos para retornar apenas cep, uf, logradouro e localidade ou erro 406 quando o CEP não for válido.

### `node app.js`

Roda a aplicação na porta 3001.
