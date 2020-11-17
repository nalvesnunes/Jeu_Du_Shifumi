//const imageArr = ["feuille.svg", "pierre.svg", "ciseaux.svg"]

// ON RECUPERE L'ID DE L'IMAGE CLIQUÉE 
$(document).ready(function() {
    var pcc = document.getElementsByClassName("pcc")
        //Score utilisateur
    var userScore = 0
        //Score ordinateur
    var botScore = 0
    const phrase = "L'ordi a joué : "

    for (var i = 0; i < pcc.length; i++) {
        pcc[i].addEventListener('click', showpcc)

        function showpcc() {

            var userChoice = this.id
                // console.log(userChoice)   
                // CREATION DU CHOIX RANDOM DE L'ORDI 
            var num = Math.random()
            if (num <= 0.3333) {
                num = "papier"
            } else if (0.3333 < num && num <= 0.6666) {
                num = "caillou"
            } else {
                num = "ciseaux"
            }
            // console.log("botChoice " + num)
            // console.log("myChoice "+ userChoice)
            var outcome
            var text
            switch (num) {
                case "ciseaux":
                    if (userChoice === "ciseaux") {
                        outcome = "Égalité";
                    } else if (userChoice === "caillou") {
                        outcome = "Tu as gagné !";
                    } else {
                        outcome = "Tu as perdu !";
                    }
                    break;

                case "caillou":
                    if (userChoice === "ciseaux") {
                        outcome = "Tu as perdu !";
                    } else if (userChoice === "caillou") {
                        outcome = "Égalité";
                    } else {
                        outcome = "Tu as gagné !";
                    }
                    break;

                case "papier":
                    if (userChoice === "ciseaux") {
                        outcome = "Tu as gagné !";
                    } else if (userChoice === "caillou") {
                        outcome = "Tu as perdu !";
                    } else {
                        outcome = "Égalité";
                    }
                    break;
                default:
                    text = "Recommence"
                    break;
            }
            // AFFICHAGE DU SCORE 

            if (outcome === "Tu as gagné !") {
                userScore = userScore + 1
                document.getElementById("userScore").innerHTML = userScore
                document.getElementById("botScore").innerHTML = botScore

            } else if (outcome === "Tu as perdu !") {
                botScore = botScore + 1
                document.getElementById("userScore").innerHTML = userScore
                document.getElementById("botScore").innerHTML = botScore

            } else {
                document.getElementById("userScore").innerHTML = userScore
                document.getElementById("botScore").innerHTML = botScore
            }

            document.getElementById("winner").innerHTML = phrase + num + " : " + outcome


        }
    }


    // Version drag & Drop
    //$(function() {

    /*$("#f").draggable();
    $("#droppable").droppable({
        accept: "#f"
    });
    $("#p").draggable();
    $("#droppable").droppable({
        accept: "#p"
    });*/

    /* $("#c").draggable();
        $("#droppable").droppable({
            accept: "#c",
            drop: function(event, ui) {
                //alert(ui.droppable.id);
                alert(ui.draggable.find('Select').attr('id'));

                showpcc();
            }
        });

    });*/

});



/*Explication des fonctions
Const : C'est une constance, elle est juste accessible à la lecture.
Son ID ne peut pas être réaffecté. Et on ne peut déclarer qu'une seule constance.
Break : Permet de terminer une bouche (type switch) qui est en cours d'exécution.
Et de passer à l'instruction suivante.
Switch : Evalue & selon le résultat obtenu et le cas associé, éxecute les instructions
correspondantes. "Case" définit chaque cas possible & les instructions à réaliser.
=== Egalité stricte*/