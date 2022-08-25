require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");

const {
  createMovie,
  listMovies,
  updateMovie,
  deleteMovie,
  findMovieTitle,
  findMovieActor,
  findMovieRating,
} = require("./movie/movieFunctions");

const app = async (yargsObject) => {
  try {
    if (yargsObject.add) {
      //movie function
      await createMovie({
        rating: yargsObject.rating,
        releaseDate: yargsObject.releaseDate,
        title: yargsObject.title,
        actor: yargsObject.actor,
      });
      console.log(await listMovies());
    } else if (yargsObject.list) {
      console.log(await listMovies());
    }

    if (yargsObject.update) {
      await updateMovie(
        {
          rating: yargsObject.rating,
          releaseDate: yargsObject.releaseDate,
          title: yargsObject.title,
          actor: yargsObject.actor,
        },
        {
          rating: yargsObject.updateRating,
          releaseDate: yargsObject.updateReleaseDate,
          title: yargsObject.updateTitle,
          actor: yargsObject.updateActor,
        }
      );
      console.log(await listMovies());
    }


    if (yargsObject.delete) {
      //movie function
      await deleteMovie({
        rating: yargsObject.rating,
        releaseDate: yargsObject.releaseDate,
        title: yargsObject.title,
        actor: yargsObject.actor,
      });
      console.log(await listMovies());
    }

    
    if (yargsObject.findTitle) {
        await findMovieTitle({Title: yargsObject.title});
        console.log(yargsObject.title);
  
      } 

    if (yargsObject.findActor) {
      await findMovieActor({actor: yargsObject.actor});
      console.log(yargsObject.actor);

    } 

    if (yargsObject.findRating) {
        await findMovieActor({rating: yargsObject.rating});
        console.log(findMovieActor);
  
      } 

    
    
    else {
      console.log("incorrect command");
    }
    await mongoose.disconnect();
  } catch (error) {
    console.log(error);
    await mongoose.disconnect();
  }
};

app(yargs.argv);
