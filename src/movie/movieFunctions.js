const  Movie = require('./movieModel')

exports.createMovie = async (movieObject) => {
    try{
        await Movie.create(movieObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}

exports.listMovies = async () => {
    try{
        return await  Movie.find({})
    }catch(error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObject, updateMovies) => {
    try{
        return await Movie.updateOne(movieObject, updateMovies)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObject) => {
    try{
       return await Movie.deleteOne(movieObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}


exports.findMovieActor = async (actorObject) => {
    try{
       return await Movie.find(actorObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}

exports.findMovieTitle = async (titleObject) => {
    try{
        return await Movie.findOne(titleObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}

exports.findMovieRating = async (ratingObject) => {
    try{
       return await Movie.find(ratingObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}


