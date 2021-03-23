//import * as awsx from "@pulumi/awsx";

// Define our routes, independent from the API Gateway itself.

async function helloword (event){
    return {
        statusCode: 200,
        body: "Hello, API Gateway!",
     } 
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
