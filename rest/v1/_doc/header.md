# Introduction

La documentation suivante décrit les points d'entrée mis à disposition par l'API Wolfweb

## Authentification au service

L'utilisation de cette API nécessite l'authentification via la création d'une jeton client selon le protocole OAuth2
La création du jeton client doit être réalisée via le service REST /login mis à disposition. 
Celui ci attend un identifiant et une clé et renvoie un jeton client à utiliser en en-tête HTTP "Authorization: <token>" 
pour tous les appels de services ultérieurs

### Endpoint /login

La création du jeton d'authentification client est effectuée par l'appel au endpoint /login en POST

| Paramètre | Type                    | Description                                 |
|-----------|-------------------------|---------------------------------------------|
| userID    | String                  | Nom d'identification de l'utilisateur       |
| userKey   | String                  | Clé d'authentification                      |

Le service retourne la réponse-type ci-dessous :
```json
{
  "httpStatus": 201,
  "jwt": "<JETONAUTHENTIFICATION>"
}
```

### Appel sécurisé au service

Tous les appels ultérieurs aux autres endpoints du service doivent être sécurisés via la transmission du jeton client 
transmis en en-tête HTTP.

| En-tête   | Descriptif                                    |
|-----------|----------------------------------------------|
| Authorization    | Jeton d'authentification client       |

## PARAMETRES-TYPE D'APPEL

Tous les endpoints du service implémentent les paramètres suivants :
| Paramètre | Type                    | Description                                 |
|-----------|-------------------------|---------------------------------------------|
| debug     | Boolean                 | Si True : renvoie des informations complémentaires pour une aide au debeuguage. Ne devrait pas être utilisé en environnement de production      

## FORMAT DE RETOUR

L'API Wolfweb ne fournit qu'un seul type de format de retour : le `json`.  

### Cas généraliste

Tous les endpoints du service implémentent les attributs de réponse suivants :
| Attribut        | Type                    | Description                                 |
|-----------------|-------------------------|---------------------------------------------|
| httpStatus      | string                  | Code HTTP du retour                         |

Si l'argument "debug" est fourni, les endpoints du service renvoient également les attributs suivants :
| Attribut        | Type                    | Description                                 |
|-----------------|-------------------------|---------------------------------------------|
| executionTime   | integer                 | Temps d'execution du service en ms          |
| logs            | array                   | Logs retournés par le service               |

### Gestion des erreurs

En cas d'erreur les endpoints du service renvoient les attributs suivants :
| Attribut        | Type                    | Description                                 |
|-----------------|-------------------------|---------------------------------------------|
| errorCode       | string                  | Code de l'erreur relevée                    |

Si l'argument "debug" est fourni, les attributs suivant sont également transmis : 
| Attribut        | Type                    | Description                                 |
|-----------------|-------------------------|---------------------------------------------|
| errorMessage    | string                  | Détail de l'erreur                          |
| errorStack      | string                  | Stack technique de l'erreur                 |


### Requête de type GET

Tous les endpoints de type GET du service implémentent les attributs de réponse suivants :
| Attribut        | Type                    | Description                                 |
|-----------------|-------------------------|---------------------------------------------|
| count           | integer                 | Nombre d'éléments retournés                 |
| total           | integer                 | Nombre total d'éléments retournables        |
| offset          | integer                 | Offset actuel                               |
| ressources      | array                   | Ressources retournées                       |
| nocache         | boolean                 | Si true : forcer un GET sans cache          |

### Requête de type GET/:id, POST, PUT et PATCH

Tous les endpoints de type GET/:id, POST, PUT et PATCH du service implémentent les attributs de réponse suivants :
| Attribut        | Type                    | Description                                 |
|-----------------|-------------------------|---------------------------------------------|
| ressource       | object                  | Ressource retournée                         |


## Codes HTTP utilisés

Avant de traiter les données renvoyées par l'API, il est important de vérifier que le code HTTP retournée est bien `200` ou `201` pour les requêtes de type POST
Voici ci-dessous la liste des codes HTTP utilisés par l'API :

| Code | Message               | Signification |
|------|-----------------------|---------------|
| 201  | Created               | Ressource créée avec succès  |
| 200  | OK                    | L'appel s'est terminé avec succès |
| 400  | Bad Request           | Votre requête est incorrecte. Souvent causé par des données mal structurées dans les corps des requêtes. |
| 403  | Forbidden             | Le jeton d'authentification est certainement manquant, incorrect ou expiré |
| 404  | Not Found             | Le point d'entrée n'existe pas |
| 405  | Method Not Allowed    | Une méthode non autorisée a été utilisée |
| 500  | Internal Server Error | Une erreur interne s'est produite, contactez le support dès que possible |

