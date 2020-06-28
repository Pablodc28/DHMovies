
const index = require("./src/index")

let router = function(url,res) {

switch(url){    
        case '/':        
            index.homePage(res);

            break;
            
        case '/encartelera':           
            index.enCartelera(res);            
            break;

        case '/masvotadas':            
            index.masVotadas(res);            
            break;

        case '/sucursales':
            index.sucursales(res);
            break;

        case '/contacto':
            index.contacto(res);            
        res.end();
            break;

        case '/preguntasfrecuentes':
            index.preguntasFrecuentes(res);            
            break;

        default:
            res.end('404 not found')   
            break; 
    }
}

module.exports = router