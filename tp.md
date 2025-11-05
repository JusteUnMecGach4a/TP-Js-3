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
    * Elle modifie le contenu de la balise bloc associée en utilisant la propriété **`innerHTML`**.

* **Optimisation de la fonction `info` (selon le principe "tant que ça fonctionne") :**
    * Suppression de la variable `const` et de la condition `if`.
    * L'instruction est réduite à l'action unique nécessaire.

* **Contenu final de formu.js (extrait des modifications):**
    ```javascript
    function definitionFenetre(){
        var largeur = window.innerWidth;
        var hauteur = window.innerHeight;
        console.log("Définition : "+largeur+'*'+hauteur);
    }

    function info(valeur, identifiant) {
        document.getElementById(identifiant).innerHTML = valeur;
    }
    ```

---

## Informations sur le Code Existant (commande.html)

* **Utilisation de la dimension réelle de l'écran (Responsive) :**
    * La ligne permettant d'utiliser une dimension réelle (adaptative) de l'écran est :
      **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**

---

## Analyse du Comportement de Redimensionnement

* **Observation lors du redimensionnement de la fenêtre :**
    * La fonction JavaScript **`definitionFenetre()`** est appelée.
    * Un message est affiché dans la **Console des outils de développement (F12)**, indiquant les dimensions de la fenêtre sous le format `Définition : [largeur]*[hauteur]`.

* **Justification (HTML & JS) :**
    * L'événement est déclenché par l'attribut **`onresize="definitionFenetre()"`** sur la balise `<body>`.
    * La fonction utilise **`window.innerWidth`** et **`window.innerHeight`** pour lire les dimensions et **`console.log`** pour les afficher.

* **Avantage principal de `console.log` vs `alert` :**
    * **`console.log` est non bloquant** : L'exécution du script continue sans interruption.
    * Contrairement à **`alert`**, qui crée une boîte de dialogue modale qui met le code en pause, `console.log` permet un débogage **discret** et n'interrompt pas l'utilisateur ni l'exécution de l'application.

---

## Analyse des Modifications CSS (Les 3 Styles)

### 1. 📱 Style Mobile (Base par défaut, Largeur < 800px)
* **Déclencheur :** Styles non conditionnels ("Mobile First").
* **Objectif :** Mise en page verticale et compacte.
* **Caractéristiques :**
    * Entête masquée (`header` en `display: none;`).
    * Navigation réduite à un seul élément (les autres `li` sont masqués).
    * Blocs de commande (`#intensite`, etc.) prenant 90% de la largeur.

### 2. 🖥️ Style Tablette/Écran Moyen (800px ≤ Largeur ≤ 1123px)
* **Déclencheur :** `@media screen and (min-width: 800px) and (max-width: 1123px)`
* **Objectif :** Passage à une mise en page **à deux colonnes**.
* **Caractéristiques :**
    * Entête affichée (`header` en `display: block;`).
    * Navigation affichée dans une **colonne latérale fixe** de 20% de largeur.
    * Contenu (`article`) décalé pour laisser de l'espace à la navigation (78% de largeur).

### 3. 💻 Style Bureau/Grand Écran (Largeur ≥ 1124px)
* **Déclencheur :** `@media screen and (min-width: 1124px)`
* **Objectif :** Mise en page **horizontale centrée** et optimisation des commandes.
* **Caractéristiques :**
    * Fond du `body` avec images de projecteur. Contenu (`#page`) centré et à fond noir.
    * Navigation en **barre horizontale** (`nav li` en `inline-block`).
    * Blocs de curseurs (`#intensite`, etc.) alignés **horizontalement** (`inline-block`, 10% de largeur).
    * Curseurs (`input[type=range]`) **tournés de 90 degrés** (`transform: rotate(90deg)`) pour l'affichage vertical.
