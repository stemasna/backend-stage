const fs = require("fs");
//const utenti = require("../controllers/utenti_controllers");
const mongoose=require("mongoose");
require("dotenv").config();

const utentiSchema=mongoose.Schema({
    email:{type:String, required:true, unique:true},
    //email:String, //required indica un campo obbligatorio, senza sarebbe nome:String;
    password:String,
    
});
const utentiModel=mongoose.model("user",utentiSchema);

module.exports = {
    returnUtente:function(email,callback){
        utentiModel.findOne({email:email},function(err,utente){
            if(err)
                console.log("errore ricerca "+utente);
            else{
                console.log("utente:\n"+utente);
                callback(utente);
            }
        });
    },
    returnListaUtenti: function (callback){
        utentiModel.find(function(error,utenti){
            console.log("TUTTI GLI UTENTI:\n"+utenti);
            callback(utenti);
        });
    },

    addutente: function (email, password, callback){
        let nuovoUten=new utentiModel({email:email,password:password});
        callback(nuovoUten);
    },

    writeUtenti: function(data, callback){
        data.save(function(error,result){
            if(error)
                console.log(error+"email già presente");
            else
                callback(result);
        });
    },
    deleteUtenti:function(email,callback){
        utentiModel.deleteOne({email:email }, function (err) {
            if (err)
                console.log("errore nella cancellazione di"+email)
            else
            callback(email);
        });
    },
    updateUtenti:function(IDCerca,email,password, callback){
        utentiModel.findOneAndUpdate({email: IDCerca }, {email:email,password:password}, function(err, res) {
            if (err)
               // console.log("errore nella modifica di "+email)
               throw err;
            else
                callback(res);
        });
    }
}