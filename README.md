# 💻 TP-JS-3 : Projecteur DMX (Commande Web Adaptative)

Ce projet est un Travail Pratique (TP) visant à implémenter une interface de commande web pour un projecteur simulé utilisant la norme DMX 512. L'interface est conçue pour être entièrement adaptative (Responsive) et utilise JavaScript pour gérer les interactions utilisateur en temps réel.

## 🚀 Technologies Utilisées

| Technologie | Rôle dans le Projet |
| :--- | :--- |
| **HTML5** (`commande.html`) | Structure de la page, des menus et du formulaire de commande. |
| **CSS3** (`style2.css`) | Mise en page adaptative (Responsive Design) et stylisation des contrôles (curseurs, couleurs, gobos). |
| **JavaScript** (`formu.js`) | Logique de l'interface utilisateur et interactivité en temps réel (mise à jour des valeurs). |

---

## ✨ Fonctionnalités Implémentées

### 1. Interactivité des Sélecteurs (Range)

* **Mise à jour en temps réel :** Chaque mouvement sur un curseur (`<input type="range">`) déclenche immédiatement l'affichage de sa valeur.
* **Implémentation :** L'événement **`oninput`** est directement attaché à chaque curseur dans `commande.html` pour appeler la fonction `info()`.

### 2. Fonction de Mise à Jour (JavaScript)

La fonction **`info(valeur, identifiant)`** est la clé de l'interactivité :

* Elle prend la valeur du sélecteur (`valeur`) et l'ID de la zone d'affichage (`identifiant`).
* Elle met à jour le contenu de l'élément d'affichage (`<div id="...">`) via l'instruction : `document.getElementById(identifiant).innerHTML = valeur;`

### 3. Fonction de Débogage

* La fonction **`definitionFenetre()`** est liée à l'événement `onresize` du `<body>`.
* Elle utilise **`console.log`** pour afficher les dimensions actuelles de la fenêtre de navigation, permettant un débogage non bloquant de l'adaptation de la mise en page.

---

## 🎨 Design Adaptatif (Responsive CSS)

Le fichier `style2.css` utilise trois styles principaux pour s'adapter à la taille de l'écran, grâce à la balise **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`** dans le HTML.

### 1. Style Mobile (Base par défaut, Largeur < 800px)
* **Objectif :** Mise en page verticale et compacte.
* **Disposition :** Entête masquée, navigation réduite.

### 2. Style Tablette (800px ≤ Largeur ≤ 1123px)
* **Objectif :** Mise en page **à deux colonnes**.
* **Disposition :** Navigation affichée dans une **colonne latérale fixe** (20%) sur la gauche. Contenu principal décalé à droite.

### 3. Style Bureau (Largeur ≥ 1124px)
* **Objectif :** Mise en page **horizontale centrée** et optimisée pour les commandes.
* **Disposition :** Navigation en barre horizontale. Blocs de commande alignés horizontalement, avec les curseurs **tournés de 90 degrés** (`transform: rotate(90deg)`) pour optimiser l'espace.

---

## 📂 Structure du Projet ("tp cam chiant")

Le projet se compose des fichiers principaux suivants :

* **`commande.html`** : La page d'interface de commande.
* **`formu.js`** : La logique JavaScript (fonctions `info` et `definitionFenetre`).
* **`style2.css`** : La feuille de styles adaptative.
* **`images/`** : Le répertoire contenant les ressources graphiques (logo, gobos, projecteur, etc.).
