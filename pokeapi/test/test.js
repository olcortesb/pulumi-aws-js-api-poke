var assert = require('assert');
const service = require('../app/services');


const eventM = {path:'/test/ditto',queryStringParameters:'', headers:'', body:''};
const event = {path:'/test/DiTto',queryStringParameters:'', headers:'', body:''};


  describe('#getPoke', ()=>{
    it('Mostrar el nombre del pokemon en el name de la respuesta', async () => {
      const result = await service.pokeapi({ path: '/test/ditto', queryStringParameters: '', headers: '', body: '' });
      var buff = Buffer.from(result.body, 'base64');
      var str_1 = buff.toString('utf-8');
      console.log(JSON.parse(str_1).name);
      assert.strictEqual(JSON.parse(str_1).name, 'ditto');
    });
  });

  describe('#getPoke Mayuscula', ()=>{
    it('Mostrar el nombre del pokemon en el name de la respuesta', async () => {
      const result = await service.pokeapi({ path: '/test/Haunter', queryStringParameters: '', headers: '', body: '' });
      var buff = Buffer.from(result.body, 'base64');
      var str_1 = buff.toString('utf-8');
      console.log(JSON.parse(str_1).name);
      assert.strictEqual(JSON.parse(str_1).name, 'haunter');
    });
  });

