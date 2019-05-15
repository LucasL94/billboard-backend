const Movies = require('./models/movies.model')
const boom = require('@hapi/boom')

exports.getMovies = async (req, h) => {
  try{
    const movies = await Movies.find()
    return h.response(movies)
  } catch (err) {
    throw boom.boomify(err, { statusCode: 400 })
  }
}

exports.getMovieById = async (req, h) => {
  try{
    const movies = await Movies.findById(req.params.id)
    return h.response(movies)
  } catch (err) {
    throw boom.boomify(err, { statusCode: 400 })
  }
}

exports.postMovie = async (req, h) => {
  try {
    const movies = new Movies(req.payload)
    const result = await movies.save()
    return h.response(result).code(201)
  } catch (err) {
    console.log(err)
    throw boom.boomify(err, { statusCode: 400 })
  }
}

exports.updateMovieById = async (req, h) => {
  try{
    return await Movies.updateOne({
      _id: req.params.id
    }, {
      $set: {
        subtitles: req.payload.subtitles,
        stars: req.payload.stars
      }
    }),
    h.response(await Movies.findById(req.params.id)).code(201)
  } catch (err) {
    throw boom.boomify(err, { statusCode: 400 })
  }
}

exports.deleteMovie = async (req, h) => {
  try {
    await Movies.findByIdAndDelete(req.params.id)
    return h.response('The movie has been deleted successfully').code(202)
  } catch (err) {
    throw boom.boomify(err, { statusCode: 400 })
  }
}