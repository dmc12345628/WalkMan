LPIRM - IONIC - "Walkman"
==========================

Cette application permet de controller un personnage du jeu. Malgré ses modestes capacités, ce personnage ambitionne tout de même d'atteindre le coffre au trésor présent sur la carte. Il faudra pour se faire qu'il évite les pièges dispersés sur la carte. Tout le monde peut commander le personnage, vous devrez donc anticiper les actions des autres pour atteindre l'objectif ... 

Le personnage ne répond qu'à des appels HTTP et ne comprend que les 4 ordres suivants : 
- up
- down
- right
- left 

## API 

L'API permettant de controller le personnage est accessible à l'adresse http://perette2.univ-lr.fr

Les commandes d'action du personnage se font en POST sur /action (mime type application/json) avec dans le `body` de la requête un objet du type : 

```json
{"username": "votre_username", "type":"right"}
```

Les logs sont accessibles par une requête GET sur /logs qui vous retourne une liste d'objets contenant les clés :
- username 
- action
- ts (timestamp_ms de l'action)

## Détails techniques de l'application Walkman (pour votre information)

L'application est intégralement écrite en JS. Un serveur node (express) génère la page web contenant la carte et écoute les appels HTTP provenant de vos applications. La mise à jour entre la page du jeu et le serveur est effectué en temps réel via le mécanisme des Websockets. Lorsqu'un appel valide est effectué par votre application via l'API, le serveur transmet l'ordre correspondant au navigateur qui exécute la page du jeu qui fait alors avancer le personnage et détecte les éventuelles collisions.
