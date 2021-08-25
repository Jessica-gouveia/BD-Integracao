const mongoose = require("mongoose") // vamos criar nosso schema 

const musicsSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String},
    duration: { type: String},
    launchYear: {type: String},
    favorited: {type: String},
    artists: {type: String},
}, {
    versionKey: false
})

const musics = mongoose.model("musics", musicsSchema)

module.exports = musics

