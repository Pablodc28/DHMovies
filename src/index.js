let homePage = require('./homepage');
let contacto = require('./contacto.js');
let enCartelera = require('./enCartelera.js');
let masVotadas = require('./masVotadas.js');
let sucursales = require('./sucursales.js');
let preguntasFrecuentes = require('./preguntasFrecuentes.js');

let index = {

    homePage:function(res){
        res.write("bienvenido a Home")
        res.write(homePage.titulo + '\n'+ '\n')
        
        res.write("total de peliculas " + homePage.cantidad()+ '\n\n')

        let titulos = homePage.listarPelis()
        for (titulo of titulos){
            res.write(titulo)
            res.write('\n')
        }

        res.write(homePage.pieDePagina)

        res.end()
    },


    contacto:function(res){
        res.write(contacto.TituloYContenido);
        res.end()
    },


    enCartelera:function(res){
        res.write(enCartelera.TituloYContenido+ '\n')        
        res.write("total de peliculas " + homePage.cantidad()+ '\n\n')

        let titulos = enCartelera.listarPeliculas()
        for (tituloResenia of titulos){
            res.write(tituloResenia.title + '\n'+ tituloResenia.overview)            
            res.write('\n')
        }
 
        res.end()
    },


    masVotadas:function(res){
        res.write(masVotadas.titulo + '\n')   
        
        let titulos = masVotadas.listarPelisMasVotadas()
        
        for (titulo of titulos){
            res.write(titulo.title + '\n'+ titulo.overview + '\n'+ titulo.vote_average )            
            res.write('\n')
        }

        res.end()

    },


    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo + '\n')   
        res.write('La Cantidad de Preguntas son: ' + preguntasFrecuentes.cantidad() + '\n')   

        let faqs = preguntasFrecuentes.listarfaqs()
        
        for (faq of faqs){
            res.write(faq.faq_title + '\n'+ faq.faq_answer + '\n')            
            res.write('\n')
        }

        res.end()

    },

    sucursales:function(res){
        res.write(sucursales.titulo + '\n')   
        res.write('La Cantidad de Salas son: ' + sucursales.CantidadDeSalas() + '\n')   
        
        let Salas = sucursales.listarSalas()
        
        for (sala of Salas){
            res.write(sala.name + '\n'+ sala.description + '\n'+ sala.address + '\n' )            
            res.write('\n')
        }

        res.end()   
    }
}

module.exports = index