const handler = require('./handler')
const documentation = require('./documentation/movies')

const routes = [
  {
    method: 'GET',
    path: '/api/movies',
    handler: handler.getMovies,
    config: documentation.getMovies
  },
  {
    method: 'GET',
    path: '/api/movies/{id}',
    handler: handler.getMovieById,
    config: documentation.getMovieById
  },
  {
    method: 'POST',
    path: '/api/movies',
    handler: handler.postMovie,
    config: documentation.postMovies
  },
  {
    method: 'PUT',
    path: '/api/movies/{id}',
    handler: handler.updateMovieById,
    config: documentation.updateMovieById
  },
  {
    method: 'DELETE',
    path: '/api/movies{id}',
    handler: handler.deleteMovie,
    config: documentation.deleteMovieById
  }
]

module.exports = routes
