define({
  "name": "API Wolfweb",
  "version": "1.0.0",
  "description": "API REST pour les applications en ligne de la maison Wolfberger",
  "title": "API Wolfweb - Documentation",
  "url": "http://wolfweb.diatem.test/rest/v1/",
  "header": {
    "title": "Introduction",
    "content": "<h1>Introduction</h1>\n<p>La documentation suivante décrit les points d'entrée mis à disposition par l'API Wolfweb</p>\n<h2>Authentification au service</h2>\n<p>L'utilisation de cette API nécessite l'authentification via la création d'une jeton client selon le protocole OAuth2\nLa création du jeton client doit être réalisée via le service REST /login mis à disposition.\nCelui ci attend un identifiant et une clé et renvoie un jeton client à utiliser en en-tête HTTP &quot;Authorization: <token>&quot;\npour tous les appels de services ultérieurs</p>\n<h3>Endpoint /login</h3>\n<p>La création du jeton d'authentification client est effectuée par l'appel au endpoint /login en POST</p>\n<table>\n<thead>\n<tr>\n<th>Paramètre</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>userID</td>\n<td>String</td>\n<td>Nom d'identification de l'utilisateur</td>\n</tr>\n<tr>\n<td>userKey</td>\n<td>String</td>\n<td>Clé d'authentification</td>\n</tr>\n</tbody>\n</table>\n<p>Le service retourne la réponse-type ci-dessous :</p>\n<pre><code class=\"language-json\">{\n  &quot;httpStatus&quot;: 201,\n  &quot;jwt&quot;: &quot;&lt;JETONAUTHENTIFICATION&gt;&quot;\n}\n</code></pre>\n<h3>Appel sécurisé au service</h3>\n<p>Tous les appels ultérieurs aux autres endpoints du service doivent être sécurisés via la transmission du jeton client\ntransmis en en-tête HTTP.</p>\n<table>\n<thead>\n<tr>\n<th>En-tête</th>\n<th>Descriptif</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>Authorization</td>\n<td>Jeton d'authentification client</td>\n</tr>\n</tbody>\n</table>\n<h2>PARAMETRES-TYPE D'APPEL</h2>\n<p>Tous les endpoints du service implémentent les paramètres suivants :</p>\n<table>\n<thead>\n<tr>\n<th>Paramètre</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>debug</td>\n<td>Boolean</td>\n<td>Si True : renvoie des informations complémentaires pour une aide au debeuguage. Ne devrait pas être utilisé en environnement de production</td>\n</tr>\n</tbody>\n</table>\n<h2>FORMAT DE RETOUR</h2>\n<p>L'API Wolfweb ne fournit qu'un seul type de format de retour : le <code>json</code>.</p>\n<h3>Cas généraliste</h3>\n<p>Tous les endpoints du service implémentent les attributs de réponse suivants :</p>\n<table>\n<thead>\n<tr>\n<th>Attribut</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>httpStatus</td>\n<td>string</td>\n<td>Code HTTP du retour</td>\n</tr>\n</tbody>\n</table>\n<p>Si l'argument &quot;debug&quot; est fourni, les endpoints du service renvoient également les attributs suivants :</p>\n<table>\n<thead>\n<tr>\n<th>Attribut</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>executionTime</td>\n<td>integer</td>\n<td>Temps d'execution du service en ms</td>\n</tr>\n<tr>\n<td>logs</td>\n<td>array</td>\n<td>Logs retournés par le service</td>\n</tr>\n</tbody>\n</table>\n<h3>Gestion des erreurs</h3>\n<p>En cas d'erreur les endpoints du service renvoient les attributs suivants :</p>\n<table>\n<thead>\n<tr>\n<th>Attribut</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>errorCode</td>\n<td>string</td>\n<td>Code de l'erreur relevée</td>\n</tr>\n</tbody>\n</table>\n<p>Si l'argument &quot;debug&quot; est fourni, les attributs suivant sont également transmis :</p>\n<table>\n<thead>\n<tr>\n<th>Attribut</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>errorMessage</td>\n<td>string</td>\n<td>Détail de l'erreur</td>\n</tr>\n<tr>\n<td>errorStack</td>\n<td>string</td>\n<td>Stack technique de l'erreur</td>\n</tr>\n</tbody>\n</table>\n<h3>Requête de type GET</h3>\n<p>Tous les endpoints de type GET du service implémentent les attributs de réponse suivants :</p>\n<table>\n<thead>\n<tr>\n<th>Attribut</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>count</td>\n<td>integer</td>\n<td>Nombre d'éléments retournés</td>\n</tr>\n<tr>\n<td>total</td>\n<td>integer</td>\n<td>Nombre total d'éléments retournables</td>\n</tr>\n<tr>\n<td>offset</td>\n<td>integer</td>\n<td>Offset actuel</td>\n</tr>\n<tr>\n<td>ressources</td>\n<td>array</td>\n<td>Ressources retournées</td>\n</tr>\n<tr>\n<td>nocache</td>\n<td>boolean</td>\n<td>Si true : forcer un GET sans cache</td>\n</tr>\n</tbody>\n</table>\n<h3>Requête de type GET/:id, POST, PUT et PATCH</h3>\n<p>Tous les endpoints de type GET/:id, POST, PUT et PATCH du service implémentent les attributs de réponse suivants :</p>\n<table>\n<thead>\n<tr>\n<th>Attribut</th>\n<th>Type</th>\n<th>Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>ressource</td>\n<td>object</td>\n<td>Ressource retournée</td>\n</tr>\n</tbody>\n</table>\n<h2>Codes HTTP utilisés</h2>\n<p>Avant de traiter les données renvoyées par l'API, il est important de vérifier que le code HTTP retournée est bien <code>200</code> ou <code>201</code> pour les requêtes de type POST\nVoici ci-dessous la liste des codes HTTP utilisés par l'API :</p>\n<table>\n<thead>\n<tr>\n<th>Code</th>\n<th>Message</th>\n<th>Signification</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>201</td>\n<td>Created</td>\n<td>Ressource créée avec succès</td>\n</tr>\n<tr>\n<td>200</td>\n<td>OK</td>\n<td>L'appel s'est terminé avec succès</td>\n</tr>\n<tr>\n<td>400</td>\n<td>Bad Request</td>\n<td>Votre requête est incorrecte. Souvent causé par des données mal structurées dans les corps des requêtes.</td>\n</tr>\n<tr>\n<td>403</td>\n<td>Forbidden</td>\n<td>Le jeton d'authentification est certainement manquant, incorrect ou expiré</td>\n</tr>\n<tr>\n<td>404</td>\n<td>Not Found</td>\n<td>Le point d'entrée n'existe pas</td>\n</tr>\n<tr>\n<td>405</td>\n<td>Method Not Allowed</td>\n<td>Une méthode non autorisée a été utilisée</td>\n</tr>\n<tr>\n<td>500</td>\n<td>Internal Server Error</td>\n<td>Une erreur interne s'est produite, contactez le support dès que possible</td>\n</tr>\n</tbody>\n</table>\n"
  },
  "template": {
    "forceLanguage": "fr"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2018-04-06T16:07:28.200Z",
    "url": "http://apidocjs.com",
    "version": "0.17.6"
  }
});