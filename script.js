// Fonction pour définir l'ancre de l'URL sur la première section
function scrollToFirstSection() {
    window.location.hash = '#section1';
}


document.addEventListener('DOMContentLoaded', function () {
    scrollToHorizontalSnap(0); // Appel de la fonction avec l'index du premier snap
});

// Écouteur d'événements pour détecter le chargement de la page
window.addEventListener('load', scrollToFirstSection);

// Écouteur d'événements pour détecter le changement d'état de l'historique de navigation (retour en arrière)
window.addEventListener('popstate', function (event) {
    // Vérifiez si l'URL actuelle est ancrée à la première section
    if (window.location.hash !== '#section1') {
        // Si ce n'est pas le cas, définissez l'ancre de l'URL sur la première section
        scrollToFirstSection();
    }
});


document.getElementById('button5').addEventListener('click', () => {
    window.open('https://conflunch.fandom.com/fr/wiki/Wiki_Conflunch', '_blank');
});
// Associe chaque bouton à sa section correspondante ou à un lien externe
document.getElementById('button2').addEventListener('click', () => navigateToSectionOrExternalLink('section3'));
document.getElementById('button3').addEventListener('click', () => navigateToSectionOrExternalLink('section4'));
document.getElementById('button4').addEventListener('click', () => navigateToSectionOrExternalLink('section5'));
document.getElementById('button6').addEventListener('click', () => navigateToSectionOrExternalLink('section6'));


// Fonction pour gérer la navigation vers les sections ou les liens externes
function navigateToSectionOrExternalLink(target) {
    const section = document.getElementById(target);
    if (section) {
        if (target === 'section5') {
            const snap1 = document.getElementById('snap1');
            if (snap1) {
                snap1.scrollIntoView({behavior: 'smooth'});
            }
        }
        if (target === 'section4') {
            const snap8 = document.getElementById('snap8');
            if (snap8) {
                snap8.scrollIntoView({behavior: 'smooth'});
            }
        } else {
            section.scrollIntoView({behavior: 'smooth'});
        }
    } else {
        // Si le lien est externe, redirige vers l'URL spécifiée
        window.location.href = target;
    }
}


// Sélectionnez tous les blocs
const blocs = document.querySelectorAll('.bloc');

// Ajoutez un écouteur d'événements de clic à chaque bloc
blocs.forEach(bloc => {
    bloc.addEventListener('click', () => {
        // Ajoutez ici votre code d'animation ou d'effet souhaité
        bloc.classList.add('animation'); // Par exemple, ajouter une classe pour déclencher une animation CSS
    });
});


// Fonction pour gérer le déplacement horizontal vers les snaps
function scrollToHorizontalSnap(targetIndex) {
    const container = document.getElementById("horizontal-scroll-container");
    container.scrollTo({left: targetIndex * container.offsetWidth, behavior: "smooth"});

    // Affiche ou masque le menu et la section de connexion en fonction de la snap horizontale actuelle
    const menuSection = document.querySelector('.menu-section');
    const connexionSection = document.querySelector('.center-container'); // Assurez-vous que la classe est correcte
    menuSection.style.display = (targetIndex === 0) ? 'block' : 'none';
    connexionSection.style.display = (targetIndex === 1) ? 'block' : 'none';
}

// Associe le bouton du menu à la deuxième snap horizontale et masque le menu après le déplacement
document.getElementById('button1').addEventListener('click', () => {
    scrollToHorizontalSnap(1); // Déplace vers la deuxième snap horizontale
});

// Réinitialise l'affichage du menu lors du retour à la première snap horizontale
document.getElementById('button7').addEventListener('click', () => {
    scrollToHorizontalSnap(0); // Déplace vers la première snap horizontale
});


// Fonction pour cacher le menu radial
function hideMenuRadial() {
    const menuRadial = document.querySelector('.menu-radial');
    menuRadial.style.display = 'none';
}

// Fonction pour afficher le menu radial
function showMenuRadial() {
    const menuRadial = document.querySelector('.menu-radial');
    menuRadial.style.display = 'block';
}

// Écouteurs d'événements pour les cercles
document.getElementById('cercle1').addEventListener('click', () => {
    hideMenuRadial(); // Cacher le menu radial lorsqu'un cercle est cliqué
    goToSnap2('9'); // Aller à la snap correspondante
});
document.getElementById('cercle2').addEventListener('click', () => {
    hideMenuRadial(); // Cacher le menu radial lorsqu'un cercle est cliqué
    goToSnap2('10'); // Aller à la snap correspondante
});
document.getElementById('cercle3').addEventListener('click', () => {
    hideMenuRadial();
    goToSnap2('11');
});
document.getElementById('cercle4').addEventListener('click', () => {
    hideMenuRadial();
    goToSnap2('12');
});
document.getElementById('cercle5').addEventListener('click', () => {
    hideMenuRadial();
    goToSnap2('13');
});
document.getElementById('cercle6').addEventListener('click', () => {
    hideMenuRadial();
    goToSnap2('14');
});
document.getElementById('cercle7').addEventListener('click', () => {
    hideMenuRadial();
    goToSnap2('15');
});
document.getElementById('cercle8').addEventListener('click', () => {
    hideMenuRadial();
    goToSnap2('16');
});
document.getElementById('cercle9').addEventListener('click', () => {
    hideMenuRadial();
    goToSnap2('17');
});
// Écouteurs d'événements pour les boutons "Retour"
document.getElementById('button13').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button14').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button15').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button16').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button17').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button18').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button19').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button20').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});
document.getElementById('button21').addEventListener('click', () => {
    showMenuRadial();
    goToSnap2('8');
});


document.addEventListener('DOMContentLoaded', function () {
    // Fonction pour déplacer vers la première snap horizontale


    // Écouteurs d'événements pour les boutons "Retour"
    document.getElementById('button8').addEventListener('click', () => goToSnap('1'));
    document.getElementById('button9').addEventListener('click', () => goToSnap('1'));
    document.getElementById('button10').addEventListener('click', () => goToSnap('1'));
    document.getElementById('button11').addEventListener('click', () => goToSnap('1'));
    document.getElementById('button12').addEventListener('click', () => goToSnap('1'));
    document.getElementById('button13').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button14').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button15').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button16').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button17').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button18').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button19').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button20').addEventListener('click', () => goToSnap2('8'));
    document.getElementById('button21').addEventListener('click', () => goToSnap2('8'));

    function goToSnap(snapNumber) {
        let snapElement = document.getElementById('snap' + snapNumber);
        let container = document.getElementById('horizontal-scroll-container3');
        container.scrollLeft = snapElement.offsetLeft;
    }

    function goToSnap2(snapNumber) {
        let snapElement = document.getElementById('snap' + snapNumber);
        let container = document.getElementById('horizontal-scroll-container4');
        container.scrollLeft = snapElement.offsetLeft;
    }


// Écouteurs d'événements pour les blocs
    document.getElementById('bloc1').addEventListener('click', () => goToSnap('3'));
    document.getElementById('bloc2').addEventListener('click', () => goToSnap('4'));
    document.getElementById('bloc3').addEventListener('click', () => goToSnap('5'));
    document.getElementById('bloc4').addEventListener('click', () => goToSnap('6'));
    document.getElementById('bloc5').addEventListener('click', () => goToSnap('7'));
    document.getElementById('cercle1').addEventListener('click', () => goToSnap2('9'));
    document.getElementById('cercle2').addEventListener('click', () => goToSnap2('10'));
    document.getElementById('cercle3').addEventListener('click', () => goToSnap2('11'));
    document.getElementById('cercle4').addEventListener('click', () => goToSnap2('12'));
    document.getElementById('cercle5').addEventListener('click', () => goToSnap2('13'));
    document.getElementById('cercle6').addEventListener('click', () => goToSnap2('14'));
    document.getElementById('cercle7').addEventListener('click', () => goToSnap2('15'));
    document.getElementById('cercle8').addEventListener('click', () => goToSnap2('16'));
    document.getElementById('cercle9').addEventListener('click', () => goToSnap2('17'));
});

// Fonction pour désactiver le défilement vertical sur les snaps 3 à 7
function disableScrollOnSnaps() {
    // Sélectionne tous les snaps de 3 à 7
    const snaps = document.querySelectorAll('#snap3, #snap4, #snap5, #snap6, #snap7');

    // Ajoute un écouteur d'événements pour chaque snap
    snaps.forEach(function (snap) {
        snap.addEventListener('wheel', function (e) {
            e.preventDefault(); // Empêche le défilement vertical
        });
    });
}

function disableScrollOnSnaps2() {
    // Sélectionne tous les snaps de 3 à 7
    const snaps = document.querySelectorAll('#snap9, #snap10, #snap11, #snap12, #snap13, #snap14, #snap15, #snap16, #snap17');

    // Ajoute un écouteur d'événements pour chaque snap
    snaps.forEach(function (snap) {
        snap.addEventListener('wheel', function (e) {
            e.preventDefault(); // Empêche le défilement vertical
        });
    });
}


document.addEventListener('DOMContentLoaded', function () {
    // Appelle la fonction pour désactiver le défilement vertical sur les snaps 3 à 7
    disableScrollOnSnaps();

    // Appelle la fonction pour désactiver le défilement vertical sur les snaps 9 à 17
    disableScrollOnSnaps2();
});




