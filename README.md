# Projet de ToDoLists

## Description
_Projet de L3 Informatique à réaliser dans le cadre de l'UE "Développement d'application mobile" et de l'EC "Projet" et qui traite du développement d'une application web de liste de tâches (todo list) avec le framework VueJS_

-------------------------------------


### Comment utiliser notre livrable

1) À la racine du projet, lancer la commande suivante qui permettra de lancer notre application web en local
```
npm run serve
```
Si vous faîtes face au lancement du serveur à des problèmes tel qu'un message d'erreur (code 127 par exemple), lancez la commande ci-dessous puis ré-essayer l'étape 1). Parfois juste fermer votre éditeur (s'il était ouvert) et le rouvrir puis lancer le serveur suffit à régler ce problème.
```
npm install
```

2) Vous arrivez sur la page de bienvenue. Pour pouvoir utiliser les fonctionnalités inhérentes aux toDos, se rendre dans l'onglet Connexion et renseigner les identifiants suivants : 

email: toto@toto.com
mot de passe: toto

Ou s'inscrire via l'onglet portant ce même nom.

3) Vous êtes redirigés vers votre liste des tâches, la liste peut ne pas apparaître pour des raisons encore floues, si tel est le cas, cliquer sur le bouton "supprimer" pour voir les listes crées par la propriétaire du compte test "toto". Cliquer sur l'une d'elle fera apparaître à droite les tâches relatives à cette même liste. Vous pouvez ajouter et supprimer des listes existantes.

4) Enfin, cliquer sur To do Application redirige vers la page d'accueil, et la page About vous en apprendra plus sur l'application.

### Fait

Authentification et inscription avec les appels à l'API, ajout, affichage et suppression de todolist via l'API. Afficher les todos d'une liste.
Routing.
Mise en forme avec bootstrap principalement
Architecture du store en deux dossiers distincts pour la partie account et todolist

### Non fait

Ajout, suppression, modification d'une todo
Filtrage d'une todo
Afficher le nombre de todos non faites
Gestion des données en local avec le localStorage
Bonus

### Amélioration possibles (priorisées)

Sans compter les choses "non faites": 

1) Gestion des erreurs 
2) Gestion des bugs
3) Déplacer des todos dans d'autres listes
4) Design 

### Team

* Adrien LINARES
* Mohamed CAMARA 
* Aboubacar CAMARA
* Amayes MEZINE
* Amadou KEITA


### Professeur responsable du groupe 3B:
```
M. Youssef Chahir
```

