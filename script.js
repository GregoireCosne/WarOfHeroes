// Fonction pour gérer la navigation vers les sections ou les liens externes
function navigateToSectionOrExternalLink(target) {
    const section = document.getElementById(target);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Si le lien est externe, redirige vers l'URL spécifiée
        window.location.href = target;
    }
}

// Associe chaque bouton à sa section correspondante ou à un lien externe
document.getElementById('button2').addEventListener('click', () => navigateToSectionOrExternalLink('section3'));
document.getElementById('button3').addEventListener('click', () => navigateToSectionOrExternalLink('section4'));
document.getElementById('button4').addEventListener('click', () => navigateToSectionOrExternalLink('section5'));
document.getElementById('button5').addEventListener('click', () => navigateToSectionOrExternalLink('https://conflunch.fandom.com/fr/wiki/Wiki_Conflunch'));
document.getElementById('button6').addEventListener('click', () => navigateToSectionOrExternalLink('section6'));


document.addEventListener("DOMContentLoaded", function() {
    const cercles = document.querySelectorAll('.cercle');

    cercles.forEach(function(cercle) {
        cercle.addEventListener('click', function() {
            alert('Cercle cliqué !');
            // Ajoutez ici le code pour la redirection ou toute autre action souhaitée
        });
    });
});


// Sélectionnez tous les blocs
const blocs = document.querySelectorAll('.bloc');

// Ajoutez un écouteur d'événements de clic à chaque bloc
blocs.forEach(bloc => {
    bloc.addEventListener('click', () => {
        // Ajoutez ici votre code d'animation ou d'effet souhaité
        bloc.classList.add('animation'); // Par exemple, ajouter une classe pour déclencher une animation CSS
    });
});
