# Consignation des Modifications

## Fichier HTML (commande.html)

* **Modification des éléments range (sélecteurs):**
    * Ajout de l'attribut **`oninput`** sur les trois balises `<input type="range">`.
    * L'attribut appelle la fonction `info(valeur, identifiant)` pour mettre à jour l'affichage en temps réel.

* **Détails des appels `oninput` ajoutés :**
    * `intensiteRange` : `oninput="info(this.value, 'intensiteValue')"`
    * `inclinaisonRange` : `oninput="info(this.value, 'inclinaisonValue')"`
    * `rotationRange` : `oninput="info(this.value, 'rotationValue')"`

---

## Fichier JavaScript (formu.js)

* **Ajout d'une nouvelle fonction:**
    * Déclaration de la fonction **`info(valeur, identifiant)`**.

* **Rôle de la fonction `info`:**
    * Elle récupère l'élément du DOM (la balise bloc `div`) par son **`identifiant`**.
    * Elle modifie le contenu de cet élément en utilisant la propriété **`innerHTML`** pour afficher la **`valeur`** passée en paramètre.

* **Contenu final de formu.js (extrait des modifications):**
    ```javascript
    function info(valeur, identifiant) {
        const elementAfficheur = document.getElementById(identifiant);
        if (elementAfficheur) {
            elementAfficheur.innerHTML = valeur;
        }
    }

---

## Informations sur le Code Existant (commande.html)

* **Utilisation de la dimension réelle de l'écran (Responsive) :**
    * La ligne permettant d'utiliser une dimension réelle (adaptative) de l'écran est :
      **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**
