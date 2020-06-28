const fs = require('fs')

let enCartelera = {
    bd: './data/movies.json',
    
    TituloYContenido: `En Cartelera`,  

    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },

    listarPeliculas: function() {
        let movies = this.leerJSON();
        let titleMovies = []
        movies.movies.forEach(function(movie) {
            titleMovies.push(movie)
        })
        titleMovies.sort()
        return titleMovies
    },

    }



module.exports = enCartelera