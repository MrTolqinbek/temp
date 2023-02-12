const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
    },
    servers:[
        {
            url: 'http://localhost:3000',
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                in:'header',
                name:"Authorization",
            }
        },
        schemas: {
            User: {
                type: 'object',
                required: ['firstName','id','email'],
                properties: {
                    firstName:{
                        type:'string'
                    }
                }
            }
        }
    },
    security: [{
        bearerAuth:[]
    }]
  },
  apis: ['./routes/*.js'],
};

module.exports = options;
