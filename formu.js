function definitionFenetre(){
	var largeur = window.innerWidth;
	var hauteur = window.innerHeight;
	console.log("Définition : "+largeur+'*'+hauteur);
}

function info(valeur, identifiant) {
	document.getElementById(identifiant).innerHTML = valeur;
}

