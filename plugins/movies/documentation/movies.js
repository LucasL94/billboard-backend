const Joi = require('@hapi/joi')

exports.getMovies = {
  description: 'Get all Movies',
  tags: ['api'],
  notes: ['Get all movies from DB'],
  plugins: {
    'hapi-swagger': {
      responses:{
        200: {
          description: 'Successfully Found',
          schema: Joi.object({
            title: Joi.string(),
            genre: Joi.string(),
            length: Joi.string(),
            language: Joi.string(),
            subtitles: Joi.string(),
            stars: Joi.string()
          }).label('Result')
        },
        400: {
          description: 'Something wrong happened'
        }
      }
    }
  }
}

exports.getMovieById = {
  description: 'Get a Movie',
  tags: ['api'],
  notes: ['Get one movies by ID'],
  plugins: {
    'hapi-swagger': {
      responses:{
        200: {
          description: 'Successfully Found By ID',
          schema: Joi.object({
            title: Joi.string(),
            genre: Joi.string(),
            length: Joi.string(),
            language: Joi.string(),
            subtitles: Joi.string(),
            stars: Joi.string()
          }).label('Result')
        },
        400: {
          description: 'Something wrong happened'
        }
      },
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  }
}

exports.postMovies = {
  description: 'Post a Movie',
  tags: ['api'],
  notes: ['Adds a movie to DB'],
  plugins: {
    'hapi-swagger': {
      responses:{
        201: {
          description: 'Successfully Posted',
          schema: Joi.object({
            title: Joi.string(),
            genre: Joi.string(),
            length: Joi.string(),
            language: Joi.string(),
            subtitles: Joi.string(),
            stars: Joi.string()
          }).label('Result')
        },
        400: {
          description: 'Something wrong happened'
        }
      }
    }
  },
  validate: {
    payload: {
      title: Joi.string().required(),
      genre: Joi.string().required(),
      length: Joi.string().required(),
      language: Joi.string().required(),
      subtitles: Joi.string().required(),
      stars: Joi.string().required()
    }
  }
}

exports.updateMovieById = {
  description: 'Update a Movie',
  tags: ['api'],
  notes: ['Update one movies by ID'],
  plugins: {
    'hapi-swagger': {
      responses:{
        201: {
          description: 'Successfully Updated',
          schema: Joi.object({
            title: Joi.string(),
            genre: Joi.string(),
            length: Joi.string(),
            language: Joi.string(),
            subtitles: Joi.string(),
            stars: Joi.string()
          }).label('Result')
        },
        400: {
          description: 'Something wrong happened'
        }
      },
      validate: {
        params: {
          id: Joi.string().required()
        },
        payload: {
          subtitles: Joi.string().required(),
          stars: Joi.string().required()
        }
      }
    }
  }
}

exports.deleteMovieById = {
  description: 'Delete a Movie',
  tags: ['api'],
  notes: ['Delete one movies by ID'],
  plugins: {
    'hapi-swagger': {
      responses:{
        202: {
          description: 'Successfully Deleted',
        },
        400: {
          description: 'Something wrong happened'
        }
      },
      validate: {
        params: {
          id: Joi.string().required()
        }
      }
    }
  }
}