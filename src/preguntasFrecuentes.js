const fs = require('fs')

let preguntasFrecuentes = {
    bd: './data/faqs.json',
    titulo: "​Sucursales",

      
    leerJSON: function() {
        let faqsJson = fs.readFileSync(this.bd, 'utf-8');
        let faqs = JSON.parse(faqsJson);
        return faqs
    },
    
    cantidad: function() {
        return this.leerJSON().total_faqs
    },

    listarfaqs: function() {
        let faqs = this.leerJSON();
        let Arrayfaqs = []

        faqs.faqs.forEach(function(faq) {
            Arrayfaqs.push(faq)
        })

        Arrayfaqs.sort()
        return Arrayfaqs
    },


}

module.exports = preguntasFrecuentes;