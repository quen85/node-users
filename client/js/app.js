var myForm = $('form');
var username = $('[name="username"]');
var password = $('[name="password"]');
var erroAddTask = $('.errorAddTask');

myForm.submit(function(evt){
    evt.preventDefault();

    // Vérifier la présence de valeur dans le formualire
    if( username.val() && password.val() ){

        // Ajouter un document dans la collection MongoDB => post()
        $.ajax({
            url: 'http://localhost:8080/api/user',
            data: myForm.serialize(),
            dataType: 'JSON',
            type: 'POST',


            success: function(data){
                // Ajouter la nouvelle tâche dans le DOM
                // addTask(data.username, data.password, data._id, false)
                console.log(data)
            },

            error: function(err){ console.log(err) },

            complete: function(){
                // Vider le formulaire
                myForm[0].reset();
            }
        })

    } else{
        // Afficher le message d'erreur
        erroAddTask.fadeIn();
    }

});