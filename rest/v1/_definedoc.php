<?php

    /**
     * @apiDefine default
     * @apiHeader (Header) {String} Authorization   Jeton d'authentification (à générer avec le endpoint login)
     * @apiHeaderExample {json} Header-Example:
     *     {
     *       "Authorization": "AEDFD547365673667365"
     *     }
     */

     
    /**
     * @apiDefine getId
     * @apiParam (QueryString) {string} [key=id]  Nom de l'attribut utilisé comme clé
     * @apiParam (QueryString) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     */

     /**
     * @apiDefine patch
     * @apiParam (Body) {string}  [key=id]  Nom de l'attribut utilisé comme clé
     * @apiParam (Body) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     */

     /**
     * @apiDefine key
     * @apiParam (Body) {string}  [key=id]  Nom de l'attribut utilisé comme clé
     */

     /**
     * @apiDefine post
     * @apiParam (Body) {string}  [key=id]  Nom de l'attribut utilisé comme clé
     * @apiParam (Body) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     */

     /**
     * @apiDefine getX
     * @apiParam (QueryString) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     * @apiParam (QueryString) {Integer} [offset=0]       Décalage sur les résultats retournés (pour la pagination)
     * @apiParam (QueryString) {String}  [orderby=id]     Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM
     * @apiParam (QueryString) {String}  [ordertype=ASC]  Mode d'ordonancement (ASC ou DESC)
     * @apiParam (QueryString) {integer} [limit=20]       Nombre de ressources à retourner
     * @apiParam (QueryString) {integer} [from]           Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)
     */

     /**
     * @apiDefine getXOrder
     * @apiParam (QueryString) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     * @apiParam (QueryString) {Integer} [offset=0]       Décalage sur les résultats retournés (pour la pagination)
     * @apiParam (QueryString) {String}  [orderby=ordre]  Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM
     * @apiParam (QueryString) {String}  [ordertype=ASC]  Mode d'ordonancement (ASC ou DESC)
     * @apiParam (QueryString) {integer} [limit=20]       Nombre de ressources à retourner
     * @apiParam (QueryString) {integer} [from]           Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)
     */

    /**
     * @apiDefine getXAll
     * @apiParam (QueryString) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     * @apiParam (QueryString) {String}  [orderby=id]     Attribut utilisé pour l'ordonnancement
     * @apiParam (QueryString) {String}  [ordertype=ASC]  Mode d'ordonancement (ASC ou DESC)
     */

    /**
     * @apiDefine getSpe
     * @apiParam (QueryString) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     */

    /**
     * @apiDefine delete
     * @apiParam (QueryString) {boolean} [debug=false]    Si true, renvoie des informations de debug.
     * @apiParam (QueryString) {string}  [key=id]           Nom de l'attribut utilisé comme clé
     */

    

    /**
     * @apiDefine cache
     * @apiParam (QueryString) {boolean} [nocache=false]  Si le cache est activé les résultats obtenus par ce service sont par défaut caché. Utilser nocache pour forcer la récupération de la ressource sans passer par le cache.
     */


?>