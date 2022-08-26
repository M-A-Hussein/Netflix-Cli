const  TvShow = require('./tvModel')

exports.createTvShow = async (TvShowObject) => {
    try{
        await TvShow.create(TvShowObject)
    }catch (error) {
        console.log(' error in TvShow functions')
        console.log(error)
    }
}

exports.listTvShow = async () => {
    try{
        return await  TvShow.find({})
    }catch(error) {
        console.log(error)
    }
}

exports.updateTvShow = async (TvShowObject, updateTvShows) => {
    try{
        return await TvShow.updateOne(TvShowObject, updateTvShows)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteTvShow = async (TvShowObject) => {
    try{
       return await TvShow.deleteOne(TvShowObject)
    }catch (error) {
        console.log(' error in TvShow functions')
        console.log(error)
    }
}


exports.findTvShowActor = async (actorObject) => {
    try{
       return await TvShow.find(actorObject)
    }catch (error) {
        console.log(' error in TvShow functions')
        console.log(error)
    }
}

exports.findTvShowTitle = async (titleObject) => {
    try{
        return await TvShow.findOne(titleObject)
    }catch (error) {
        console.log(' error in TvShow functions')
        console.log(error)
    }
}

exports.findTvShowRating = async (ratingObject) => {
    try{
       return await TvShow.find(ratingObject)
    }catch (error) {
        console.log(' error in TvShow functions')
        console.log(error)
    }
}


