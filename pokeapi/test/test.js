var assert = require('assert');
const service = require('../app/services');


const eventM = {path:'/test/ditto',queryStringParameters:'', headers:'', body:''};
const event = {path:'/test/DiTto',queryStringParameters:'', headers:'', body:''};


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

describe('pokeApiTest Mayusculas', function() {
    describe('#getPoke mayusculas', function() {
      it('Mostrar el nombre del pokemon en el name de la respuesta', function() {
        service.pokeapi({path:'/test/',queryStringParameters:'', headers:'', body:''}).then((data) =>{
            var buff = Buffer.from(data.body, 'base64');
            const str = buff.toString('utf-8');
            console.log(str);
            assert.equal(str.name, "ditto");
        })
      });
    });
  });