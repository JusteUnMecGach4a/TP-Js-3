function definitionFenetre(){
	var largeur = window.innerWidth;
	var hauteur = window.innerHeight;
	console.log("Définition : "+largeur+'*'+hauteur);
}

function info(valeur, identifiant) {
    const elementAfficheur = document.getElementById(identifiant);
        elementAfficheur.innerHTML = valeur;
}
