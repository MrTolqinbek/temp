const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          in: "header",
          name: "Authorization",
        },
      },
      schemas: {
        User: {
          type: "object",
          required: ["id", "email"],
          properties: {
            firstName: {
              type: "string",
              example: "John",
              description: "First Name",
              minLength: 3,
              maxLength: 20,
            },
            id: {
              type: "integer",
              example: 1,
              description: "User ID",
              minimum: 1,
            },
            email: {
              type: "string",
              example: "kenaa@example.com",
              description: "User Email",
              minLength: 3,
              maxLength: 20,
            },
            lastName: {
              type: "string",
              example: "Doe",
              description: "Last Name",
              minLength: 3,
              maxLength: 20,
            },
            password: {
              type: "string",
              example: "123456",
              description: "User Password",
              minLength: 4,
            },
          },
          example: {
            firstName: "John",
            id: 1,
            email: "kenaa@example.com",
            lastName: "Doe",
          },
        },
      },
      responses: {
        400: {
          description: "Bad Request",
          content: {
            "application/json": {
              description: "Bad Request",
            },
          },
        },
        401: {
            description: "Unauthorized",
            content: {
                "application/json": {
                    description: "Unauthorized",
                }
            }
        },
        403: {
            description: "Forbidden",
            content: {
                "application/json": {
                    description: "Forbidden",
                }
            }
        },
        404: {
            description: "Not Found",
            content: {
                "application/json": {
                    description: "Not Found",
                }
            }
        },
        500:{
            description: "Server Error",
            content: {
                "application/json": {
                    description: "Server Error",
                }
            }
        }
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
};

module.exports = options;
