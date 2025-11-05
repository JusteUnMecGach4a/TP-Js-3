// formu.js

function definitionFenetre(){
	var largeur = window.innerWidth;
	var hauteur = window.innerHeight;
	console.log("Définition : "+largeur+'*'+hauteur);
}

// --------------------------------------------------------
// NOUVELLE FONCTION DEMANDÉE : info(valeur, identifiant)
// --------------------------------------------------------

/**
 * Met à jour le contenu de la balise bloc associée au sélecteur manipulé.
 * * @param {string} valeur - La valeur actuelle du sélecteur (ex: 50, 128).
 * @param {string} identifiant - L'ID de la balise bloc à modifier (ex: 'intensiteValue').
 */
function info(valeur, identifiant) {
    // 1. Récupérer l'élément HTML (la balise bloc) par son identifiant.
    const elementAfficheur = document.getElementById(identifiant);

    // 2. Vérifier si l'élément existe avant de le manipuler.
    if (elementAfficheur) {
        // 3. Modifier le contenu de l'élément.
        //    Nous utilisons textContent, qui est plus sûr que innerHTML
        //    pour insérer une simple valeur numérique, mais innerHTML fonctionnera aussi.
        elementAfficheur.innerHTML = valeur; // Utilisation de innerHTML comme demandé
        // elementAfficheur.textContent = valeur; // Option plus sécurisée pour du texte/nombre brut
    }
}

// --------------------------------------------------------
// LIAISON AVEC LE HTML
// --------------------------------------------------------

/**
 * Initialise les écouteurs d'événements pour les curseurs (range)
 * et appelle la fonction info() lors de la manipulation.
 */
function lierCurseurs() {
    // Liste des paires [ID du range, ID de la balise bloc d'affichage]
    const curseurs = [
        ['intensiteRange', 'intensiteValue'],
        ['inclinaisonRange', 'inclinaisonValue'],
        ['rotationRange', 'rotationValue']
    ];

    curseurs.forEach(paire => {
        const rangeId = paire[0];
        const valueId = paire[1];

        const rangeInput = document.getElementById(rangeId);

        if (rangeInput) {
            // Ajouter un écouteur d'événement 'input' (se déclenche en glissant)
            rangeInput.addEventListener('input', function() {
                // Appel de la fonction info() avec la valeur actuelle et l'ID de la zone à modifier
                info(this.value, valueId);
            });
        }
    });
}

// Déclenchement de la liaison une fois que le HTML est complètement chargé
document.addEventListener('DOMContentLoaded', lierCurseurs);
