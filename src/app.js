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

const {
    createTvShow,
    listTvShow,
    updateTvShow,
    deleteTvShow,
    findTvShowTitle,
    findTvShowActor,
    findTvShowRating,
  } = require("./tvShow/tvShowFunctions");


const app = async (yargsObject) => {
  try {
    if (yargsObject.add) {
      //movie function
      await createMovie({
        rating: yargsObject.rating,
        title: yargsObject.title,
        actor: yargsObject.actor,
      });
      console.log(await listMovies());
    } else if (yargsObject.list) {
      console.log(await listMovies());
    }else if (yargsObject.update) {
      await updateMovie(
        {
          rating: yargsObject.rating,
          title: yargsObject.title,
          actor: yargsObject.actor,
        },
        {
          rating: yargsObject.updateRating,
          title: yargsObject.updateTitle,
          actor: yargsObject.updateActor,
        }
      );
      console.log(await listMovies());
    } else if (yargsObject.delete) {
      //movie function
      await deleteMovie({
        rating: yargsObject.rating,
        title: yargsObject.title,
        actor: yargsObject.actor,
      });
      console.log(await listMovies());

    } else if (yargsObject.find && yargsObject.title) {
        console.log( await findMovieTitle({title: yargsObject.title}))
  
    } else if (yargsObject.find && yargsObject.actor) {
        console.log(await findMovieActor({actor: yargsObject.actor}))
  
    } else if (yargsObject.find && yargsObject.rating) {
        console.log(await findMovieRating({rating: yargsObject.rating}));
  



        //================================================================================================================================



        
    }  else if (yargsObject.addTv) {
        await createTvShow({
          rating: yargsObject.rating,
          title: yargsObject.title,
          actor: yargsObject.actor,
        });
        console.log(await listTvShow());
        
      } else if (yargsObject.listTv) {
        console.log(await listTvShow());

      }else if (yargsObject.updateTv) {
        await updateTvShow(
          {
            rating: yargsObject.rating,
            title: yargsObject.title,
            actor: yargsObject.actor,
          },
          {
            rating: yargsObject.updateRating,
            title: yargsObject.updateTitle,
            actor: yargsObject.updateActor,
          }
        );
        console.log(await listTvShow());
      } else if (yargsObject.deleteTv) {
        //vShow function
        await deleteTvShow({
          rating: yargsObject.rating,
          title: yargsObject.title,
          actor: yargsObject.actor,
        });
        console.log(await listTvShow());
  
      } else if (yargsObject.findTv && yargsObject.title) {
          console.log( await findTvShowTitle({title: yargsObject.title}))
    
      } else if (yargsObject.findTv && yargsObject.actor) {
          console.log(await findTvShowActor({actor: yargsObject.actor}))
    
      } else if (yargsObject.findTv && yargsObject.rating) {
          console.log(await findTvShowRating({rating: yargsObject.rating}));
    
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
