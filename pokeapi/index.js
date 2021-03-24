// Import the [pulumi/aws](https://pulumi.io/reference/pkg/nodejs/@pulumi/aws/index.html) package
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");
const service = require('./app/services');


// Create a public HTTP endpoint (using AWS APIGateway)
const endpoint = new awsx.apigateway.API("hello", {
    routes: [
        // Serve static files from the `www` folder (using AWS S3)
        {
            path: "/",
            localPath: "www",
        },
        {
            path: "/getpoke/{key}",
            method: "GET",
            eventHandler: service.pokeapi,
            requestValidator: "PARAMS_ONLY",
            requiredParams: [{
                name: "key",
                in: "path",
            }]
        },
    ],
});

// Export the public URL for the HTTP service
exports.url = endpoint.url;
