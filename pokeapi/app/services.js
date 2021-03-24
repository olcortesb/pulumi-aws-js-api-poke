const axios = require('axios').default;

const url = 'https://pokeapi.co/api/v2/pokemon/';

async function pokeapi(event){
    const { path, queryStringParameters, headers, body } = event;
    const response = await axios.get(url + path.split('/').pop().toLowerCase())
    return {
        statusCode: 200,
        body: Buffer.from(JSON.stringify(
            {   image: response.data.sprites.back_default,
                name: response.data.name 
            }), "utf8")
            .toString("base64"),
        isBase64Encoded: true,
        headers: { "content-type": "application/json" },
    };;
}

module.exports = {pokeapi};
