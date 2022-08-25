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
        await Movie.updateOne(movieObject, updateMovies)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObject) => {
    try{
        await Movie.deleteOne(movieObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}


exports.deleteMovie = async (movieObject) => {
    try{
        await Movie.deleteOne(movieObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}



exports.findMovieActor = async (actorObject) => {
    try{
        await Movie.findOne(actorObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}

exports.findMovieTitle = async (titleObject) => {
    try{
        await Movie.findOne(titleObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}

exports.findMovieRating = async (ratingObject) => {
    try{
        await Movie.findOne(ratingObject)
    }catch (error) {
        console.log(' error in movie functions')
        console.log(error)
    }
}