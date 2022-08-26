const mongoose = require('mongoose');

const TvShowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    
    actor: {
        type: String,
        default: 'Not Specified',
    },


    rating: {
        type: Number,
        default: 'Not Specified',
    },

    

});


const TvShow = mongoose.model('NetflixTv', TvShowSchema);

module.exports = TvShow;
