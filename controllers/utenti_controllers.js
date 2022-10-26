const utentiModel = require("../models/utenti_models.js");

module.exports = {
    getUtenti: function(req, res) {
        utentiModel.returnListaUtenti((utenti)=>{
            res.send(JSON.stringify(utenti));
        });
    },

    addUtente: function (req, res) {
        console.log(req.body);
        if (req.body.email && req.body.password ){
            utentiModel.addutente(req.body.email, req.body.password, (newUtenti)=>{
                utentiModel.writeUtenti(newUtenti, ()=>{ 
                    res.send("utente: email = " + req.body.email + " password = " + req.body.password);
                });         
            });
        }
        else
            res.send("parametri errati"); 
    },

    getUtente: function (req, res){
        utentiModel.returnUtente(req.params.email,(utente)=>{
            res.send(JSON.stringify(utente));
        });
    },

    updateUtente: function (req, res){
        utentiModel.updateUtenti(req.params.email,req.body.email, req.body.password, function(utente){
           // console.log(email);
            res.send("utente "+ utente.email + " modificato")
        })
    },

    deleteUtente: function (req, res){
    
        utentiModel.deleteUtenti(req.params.email,function(email){
            res.send("utente "+ email + " cancellato")
        })
    } 
}