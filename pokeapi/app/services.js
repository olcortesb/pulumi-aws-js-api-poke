const axios = require('axios').default;

const url = 'https://pokeapi.co/api/v2/pokemon/';

async function helloword (event){
    const { path, queryStringParameters, headers, body } = event;
    const response = await axios.get(url + path.split('/')[2])
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
function source(req, ctx, cb){
    cb(undefined, {
        statusCode: 200,
        body: Buffer.from(JSON.stringify({ name: "AWS" }), "utf8").toString("base64"),
        isBase64Encoded: true,
        headers: { "content-type": "application/json" },
    });
}

module.exports = {helloword,source};
