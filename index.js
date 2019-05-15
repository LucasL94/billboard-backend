const Hapi = require('@hapi/hapi')
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')
const mongoose = require('mongoose')
const Pack = require('./package')

const start = async () => {

  const server = await new Hapi.Server({
    host: 'localhost',
    port: 3000,
  })

  // MongoDB Connection
  try{
    await mongoose
      .connect('mongodb://localhost:27017/billboard', {useNewUrlParser: true})
    console.log('MongoDB Connected...')
  } catch(err) {
    console.log(err)
  }

  const swaggerOptions = {
    info: {
      title: 'Billboard API Documentation',
      version: Pack.version,
    },
  }

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions
    }
  ]);

  try {
    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch(err) {
    console.log(err)
  }

  // Register Plugins
  const moviesRoutes = require('./plugins/movies/routes')

  server.route(moviesRoutes)
}

start()

module.exports = start