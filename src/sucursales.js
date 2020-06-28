const fs = require('fs')

let sucursales = {
    bd: './data/theaters.json',
    titulo: "​Sucursales",

    leerJSON: function() {
        let salasJson = fs.readFileSync(this.bd, 'utf-8');
        let salas = JSON.parse(salasJson);
        return salas
    },

    CantidadDeSalas: function() {
        return this.leerJSON().total_theaters
    },

    listarSalas: function() {
        let salas = this.leerJSON();
        let ArraySalas = []
        
        salas.theaters.forEach(function(sala) {
            ArraySalas.push(sala)
        })

        ArraySalas.sort()
        return ArraySalas
    },


}


module.exports = sucursales;
