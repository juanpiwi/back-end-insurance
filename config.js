module.exports = {
  PORT: 3000,
  environment: 'develop',
  swagger: {
    swaggerDefinition: {
      info: {
        version: '1.0.0',
        title: 'Insurance Policy Back-End',
        description: 'Building REST API with NodeJS and Express',
        contact: {
          name: 'Juan Pablo Ferrari',
          email: 'ferrarijuanp@gmail.com'
        },
      },
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    },
    apis: [
      './api/controllers/*.js'
    ]
  }
}
