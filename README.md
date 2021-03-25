# pulumi-aws-js-api-poke

Aplicacion busqueda de pokemones basada en Api: https://pokeapi.co/ 
## Comenzando 🚀

- Desplegado en AWS
- Insfraestructura construida con Pulumi (https://www.pulumi.com/)
- Desarrollado en Node.js
- Test con Mocha (https://mochajs.org/)
- Front clasico (Html,CCS,Jquery)

⛵ **Deployment** para conocer como desplegar el proyecto.

Organizacion de Archivos (Detalle entre parentesis)

```
pokeapi
│   index.js (Definicion Infraestructura Pulumi Api Gateway)
│   package.json
│   pulumi.yaml (Configuracion basica Pulumi)
│
└───app
│   │   services.js (AWS Lambda)
│   
└─── Test
│   │   test.js
│
└───www
    │   404.png
    │   favicon.ico
    │   favicon.png
    │   index.html (Pagina principal)
    │   sticky-footer...
```
### Arquitectura ⛺ 

Se opto por una arquitectura serverless basado en un Api gateway un Bucket S3 y una Lambda.

![image info](arquitectura.png)


### Pre-requisitos 📋🔧

Node.js
```
$ node -v
$ v10.16.3 
# o superior
```
Pulumi (mac)
```
$ brew install pulumi
```
instalacion otros sistemas: https://www.pulumi.com/docs/get-started/install/

AWS

Cuenta en AWS y Clave de acceso CLI

Exportar claves de acceso AWS

```
$ export AWS_ACCESS_KEY_ID=<>
$ export AWS_SECRET_ACCESS_KEY=<>
```

Mocha

```
$ npm install mocha

```

## Ejecutando las pruebas ⚙️
```
$ cd pokeapi
$ npm test
```


## Despliegue 📦

```
$ cd pokeapi
$ pulumi up
```
## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Pulumi](http://www.dropwizard.io/1.0.2/docs/) - El framework de infraestructura como codigo
* [Node.js](https://maven.apache.org/) - Runtime
* [AWS](https://rometools.github.io/rome/) - Cloud

## Autor ✒️

Oscar Cortes 

@olcortesb

## Licencia 📄

Este proyecto está bajo la Licencia GNU v3 - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

Como siempre... a la familia!
Por prestarme tiempo de su tiempo!

---