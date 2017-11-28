// Configuration du module
let express = require('express');
let router = express.Router();

let mongodb = require('mongodb');

let ObjectId = mongodb.ObjectID;

let MongoClient = mongodb.MongoClient;

let mongodbUrl = 'mongodb://localhost:27017/profiles';

// Configuration de la route principale => http://localhost:8080/api/
router.get('/', (req, res, next) => {
    res.json({ res: 'Bienvenue dans votre API' })
});

router.post('/user', (req, res, next) => {



    // Récupération des données depuis la requête
    let task = req.body;

    // Vérifier la présence de valeur dans la requête

        // Définition de la propriété isDone
        // task.isDone = false;

        // Ouvrir une connexion sur la base MongoDb
        MongoClient.connect(mongodbUrl, (err, db) =>{

            // Tester la connexion
            if(err){ res.send(err); db.close(); }
            else{

                // Ajouter un document dans la collection 'list' => insert
                db.collection('users').insert([task], (err, data) => {

                    // Vérification de a commande MongoDb
                    if(err){  res.send(err) }
                    else{
                        res.send(task)
                        // Fermer la connexion à la base MongoDb
                        db.close()
                    }
                })
            }
        })

});

// Export du module
module.exports = router;