var assert = require('assert');
const service = require('../app/services');

const event = {path:'/test/ditto',queryStringParameters:'', headers:'', body:''};

describe('pokeApiTest', function() {
  describe('#getPoke', function() {
    it('Mostrar el nombre del pokemon en el name de la respuesta', function() {
      service.pokeapi(event).then((data) =>{
          var buff = Buffer.from(data.body, 'base64');
          const str = buff.toString('utf-8');
          console.log(str);
          assert.equal(str.name, "ditto");
      })
    });
  });
});