const fs = require('fs')

let masVotadas = {
    bd: './data/movies.json',
    titulo: "​Más Votadas",
    
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },    
  
    
    listarPelisMasVotadas: function() {
        let movies = this.leerJSON();
        let titleMovies = []

        titleMovies = movies.movies.filter(function(movie){
            return movie.vote_average >=7
        })      

        titleMovies.sort()
        return titleMovies
    },
  

    //CantidadMasVotadas:(`Las mas votadas son: ${this.titleMovies}`) 


}

module.exports = masVotadas;
