const axios = require('axios').default;

const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

async function helloword (event){
    const response = await axios.get(url)
    return {
        statusCode: 200,
        body: response.data.base_experience,
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
