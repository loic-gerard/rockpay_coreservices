define({ "api": [
  {
    "type": "get",
    "url": "clients",
    "title": "{get} clients",
    "description": "<p>Retourne une liste de clients <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=clients&method=get-clients\">Executer la méthode</a></p>",
    "group": "clients",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/clients.php",
    "groupTitle": "clients",
    "name": "GetClients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "clients/:id",
    "title": "{get} clients/:id",
    "description": "<p>Retourne un client <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=clients&method=get-clients/:id\">Executer la méthode</a></p>",
    "group": "clients",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/clients.php",
    "groupTitle": "clients",
    "name": "GetClientsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "clients/:id",
    "title": "{patch} clients/:id",
    "description": "<p>Modifie un client <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=clients&method=patch-clients/:id\">Executer la méthode</a></p>",
    "group": "clients",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "nom",
            "description": "<p>Nom</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "prenom",
            "description": "<p>Prénom</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/clients.php",
    "groupTitle": "clients",
    "name": "PatchClientsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "clients",
    "title": "{post} clients",
    "description": "<p>Ajoute un client <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=clients&method=post-clients\">Executer la méthode</a></p>",
    "group": "clients",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "uid",
            "description": "<p>Clé unique. Si non transmis créé une clé unique</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "nom",
            "description": "<p>Nom</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "prenom",
            "description": "<p>Prénom</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/clients.php",
    "groupTitle": "clients",
    "name": "PostClients",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "configurations/:id",
    "title": "{delete} configurations/:id",
    "description": "<p>Supprime une donnée de configuration <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=configurations&method=delete-configurations/:id\">Executer la méthode</a></p>",
    "group": "configurations",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/configurations.php",
    "groupTitle": "configurations",
    "name": "DeleteConfigurationsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "configurations",
    "title": "{get} configurations",
    "description": "<p>Retourne une liste de données de configurations <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=configurations&method=get-configurations\">Executer la méthode</a></p>",
    "group": "configurations",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "description": "<p>Si transmis filtre par domaine</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "cle",
            "description": "<p>Si transmis filtre par clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    },
    "filename": "v1/configurations.php",
    "groupTitle": "configurations",
    "name": "GetConfigurations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "configurations/:id",
    "title": "{get} configurations/:id",
    "description": "<p>Retourne une données de configuration <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=configurations&method=get-configurations/:id\">Executer la méthode</a></p>",
    "group": "configurations",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/configurations.php",
    "groupTitle": "configurations",
    "name": "GetConfigurationsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "configurations/:id",
    "title": "{patch} configurations/:id",
    "description": "<p>Modifie une donnée de configuration <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=configurations&method=patch-configurations/:id\">Executer la méthode</a></p>",
    "group": "configurations",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "description": "<p>Domaine</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "cle",
            "description": "<p>Clé</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "valeur",
            "description": "<p>Valeur</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/configurations.php",
    "groupTitle": "configurations",
    "name": "PatchConfigurationsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "configurations",
    "title": "{post} configurations",
    "description": "<p>Ajoute une donnée de configuration <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=configurations&method=post-configurations\">Executer la méthode</a></p>",
    "group": "configurations",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "defaultValue": "default",
            "description": "<p>Domaine</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "cle",
            "description": "<p>Clé</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "valeur",
            "description": "<p>Valeur</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/configurations.php",
    "groupTitle": "configurations",
    "name": "PostConfigurations",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "exemples/:id",
    "title": "{delete} exemples/:id",
    "description": "<p>Supprime un exemple <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=exemples&method=delete-exemples/:id\">Executer la méthode</a></p>",
    "group": "exemples",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/_exemples.php",
    "groupTitle": "exemples",
    "name": "DeleteExemplesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "exemples",
    "title": "{get} exemples",
    "description": "<p>Retourne une liste de modes de exemples <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=exemples&method=get-exemples\">Executer la méthode</a></p>",
    "group": "exemples",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/_exemples.php",
    "groupTitle": "exemples",
    "name": "GetExemples",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "exemples/:id",
    "title": "{get} exemples/:id",
    "description": "<p>Retourne un exemple <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=exemples&method=get-exemples/:id\">Executer la méthode</a></p>",
    "group": "exemples",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/_exemples.php",
    "groupTitle": "exemples",
    "name": "GetExemplesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "exemples/:id",
    "title": "{patch} exemples/:id",
    "description": "<p>Modifie un exemple <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=exemples&method=patch-exemples/:id\">Executer la méthode</a></p>",
    "group": "exemples",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/_exemples.php",
    "groupTitle": "exemples",
    "name": "PatchExemplesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "exemples/:id/down",
    "title": "{patch} exemples/:id/down",
    "description": "<p>Modifie l'ordre d'un exemple (descendre dans l'ordre) <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=exemples&method=patch-exemples/:id/down\">Executer la méthode</a></p>",
    "group": "exemples",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/_exemples.php",
    "groupTitle": "exemples",
    "name": "PatchExemplesIdDown",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "exemples/:id/up",
    "title": "{patch} exemples/:id/up",
    "description": "<p>Modifie l'ordre d'un exemple (remonter dans l'ordre) <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=exemples&method=patch-exemples/:id/up\">Executer la méthode</a></p>",
    "group": "exemples",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/_exemples.php",
    "groupTitle": "exemples",
    "name": "PatchExemplesIdUp",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "exemples",
    "title": "{post} exemples",
    "description": "<p>Ajoute un exemple <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=exemples&method=post-exemples\">Executer la méthode</a></p>",
    "group": "exemples",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/_exemples.php",
    "groupTitle": "exemples",
    "name": "PostExemples",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "interfacespaiement",
    "title": "{get} interfacespaiement",
    "description": "<p>Retourne une liste d'interfaces de paiement <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=interfacespaiement&method=get-interfacespaiement\">Executer la méthode</a></p>",
    "group": "interfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "id_client",
            "description": "<p>Identifiant numérique client. Si transmis filtre sur un client</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "id_typeinterfacepaiement",
            "description": "<p>Identifiant numérique type interface paiement. Si transmis filtre sur un type d'interface de paiement</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    },
    "filename": "v1/interfacespaiement.php",
    "groupTitle": "interfacespaiement",
    "name": "GetInterfacespaiement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "interfacespaiement/:id",
    "title": "{get} interfacespaiement/:id",
    "description": "<p>Retourne une interface de paiement <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=interfacespaiement&method=get-interfacespaiement/:id\">Executer la méthode</a></p>",
    "group": "interfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/interfacespaiement.php",
    "groupTitle": "interfacespaiement",
    "name": "GetInterfacespaiementId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "interfacespaiement",
    "title": "{post} interfacespaiement",
    "description": "<p>Ajoute un exemple <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=interfacespaiement&method=post-interfacespaiement\">Executer la méthode</a></p>",
    "group": "interfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "integer",
            "optional": false,
            "field": "id_client",
            "description": "<p>Identifiant numérique client.</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": false,
            "field": "id_typeinterfacepaiement",
            "description": "<p>Identifiant numérique type interface paiement.</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "uid",
            "description": "<p>Clé unique. Si non transmis le système en génère une.</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/interfacespaiement.php",
    "groupTitle": "interfacespaiement",
    "name": "PostInterfacespaiement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "microproduits/:id",
    "title": "{delete} microproduits/:id",
    "description": "<p>Supprime un microproduit <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=microproduits&method=delete-microproduits/:id\">Executer la méthode</a></p>",
    "group": "microproduits",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/microproduits.php",
    "groupTitle": "microproduits",
    "name": "DeleteMicroproduitsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "microproduits",
    "title": "{get} microproduits",
    "description": "<p>Retourne une liste de modes de microproduits (achetable via solution RFID) <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=microproduits&method=get-microproduits\">Executer la méthode</a></p>",
    "group": "microproduits",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "description": "<p>Domaine</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    },
    "filename": "v1/microproduits.php",
    "groupTitle": "microproduits",
    "name": "GetMicroproduits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "microproduits/:id",
    "title": "{get} microproduits/:id",
    "description": "<p>Retourne un microproduit <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=microproduits&method=get-microproduits/:id\">Executer la méthode</a></p>",
    "group": "microproduits",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/microproduits.php",
    "groupTitle": "microproduits",
    "name": "GetMicroproduitsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "microproduits/:id",
    "title": "{patch} microproduits/:id",
    "description": "<p>Modifie un microproduit <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=microproduits&method=patch-microproduits/:id\">Executer la méthode</a></p>",
    "group": "microproduits",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "description": "<p>Domaine</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "designation",
            "description": "<p>Designation du produit</p>"
          },
          {
            "group": "Body",
            "type": "integer",
            "optional": true,
            "field": "prix",
            "description": "<p>Prix</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "configuration",
            "description": "<p>Données complémentaires de configuration (au format JSON)</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/microproduits.php",
    "groupTitle": "microproduits",
    "name": "PatchMicroproduitsId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "microproduits",
    "title": "{post} microproduits",
    "description": "<p>Ajoute un microproduit <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=microproduits&method=post-microproduits\">Executer la méthode</a></p>",
    "group": "microproduits",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "defaultValue": "default",
            "description": "<p>Domaine</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "designation",
            "description": "<p>Designation du produit</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>Code unique</p>"
          },
          {
            "group": "Body",
            "type": "integer",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "configuration",
            "defaultValue": "{}",
            "description": "<p>Données complémentaires de configuration (au format JSON)</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/microproduits.php",
    "groupTitle": "microproduits",
    "name": "PostMicroproduits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "ping",
    "title": "{get} ping",
    "description": "<p>Ping la connexion aux services KODO <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=ping&method=get-ping\">Executer la méthode</a></p>",
    "group": "ping",
    "version": "1.0.0",
    "filename": "v1/ping.php",
    "groupTitle": "ping",
    "name": "GetPing",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "typesinterfacespaiement/:id",
    "title": "{delete} typesinterfacespaiement/:id",
    "description": "<p>Supprime un type d'interface de paiement <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=typesinterfacespaiement&method=delete-typesinterfacespaiement/:id\">Executer la méthode</a></p>",
    "group": "typesinterfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/typesinterfacespaiement.php",
    "groupTitle": "typesinterfacespaiement",
    "name": "DeleteTypesinterfacespaiementId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "typesinterfacespaiement",
    "title": "{get} typesinterfacespaiement",
    "description": "<p>Retourne une liste de types d'interfaces de paiement (un bracelet RFID est un type d'interface de paiement) <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=typesinterfacespaiement&method=get-typesinterfacespaiement\">Executer la méthode</a></p>",
    "group": "typesinterfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/typesinterfacespaiement.php",
    "groupTitle": "typesinterfacespaiement",
    "name": "GetTypesinterfacespaiement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "typesinterfacespaiement/:id",
    "title": "{get} typesinterfacespaiement/:id",
    "description": "<p>Retourne un type d'interface de paiement <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=typesinterfacespaiement&method=get-typesinterfacespaiement/:id\">Executer la méthode</a></p>",
    "group": "typesinterfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/typesinterfacespaiement.php",
    "groupTitle": "typesinterfacespaiement",
    "name": "GetTypesinterfacespaiementId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "typesinterfacespaiement/:id",
    "title": "{patch} typesinterfacespaiement/:id",
    "description": "<p>Modifie un type d'interface de paiement <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=typesinterfacespaiement&method=patch-typesinterfacespaiement/:id\">Executer la méthode</a></p>",
    "group": "typesinterfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "designation",
            "description": "<p>Désignation</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/typesinterfacespaiement.php",
    "groupTitle": "typesinterfacespaiement",
    "name": "PatchTypesinterfacespaiementId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "typesinterfacespaiement",
    "title": "{post} typesinterfacespaiement",
    "description": "<p>Ajoute un type d'interface de paiement <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=typesinterfacespaiement&method=post-typesinterfacespaiement\">Executer la méthode</a></p>",
    "group": "typesinterfacespaiement",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>UID</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "designation",
            "description": "<p>Désignation</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/typesinterfacespaiement.php",
    "groupTitle": "typesinterfacespaiement",
    "name": "PostTypesinterfacespaiement",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "universventes/:id",
    "title": "{delete} universventes/:id",
    "description": "<p>Supprime un univers de vente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=delete-universventes/:id\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "DeleteUniversventesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          }
        ]
      }
    }
  },
  {
    "type": "delete",
    "url": "universventes/:iduniversvente/microproduits/:idliaison",
    "title": "{delete} universventes/:iduniversvente/microproduits/:idliaison",
    "description": "<p>Supprime un microproduit d'un univers de vente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=delete-universventes/:iduniversvente/microproduits/:idliaison\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "DeleteUniversventesIduniversventeMicroproduitsIdliaison",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "universventes",
    "title": "{get} universventes",
    "description": "<p>Retourne une liste d'univers de vente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=get-universventes\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "description": "<p>Filtrer par domaine</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    },
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "GetUniversventes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "universventes/:id",
    "title": "{get} universventes/:id",
    "description": "<p>Retourne un universvente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=get-universventes/:id\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "GetUniversventesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "universventes/:id/microproduits",
    "title": "{get} universventes/:id/microproduits",
    "description": "<p>Retourne une liste des micros produits en vente dans l'univers de vente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=get-universventes/:id/microproduits\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "GetUniversventesIdMicroproduits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          },
          {
            "group": "QueryString",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>Décalage sur les résultats retournés (pour la pagination)</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "orderby",
            "defaultValue": "id",
            "description": "<p>Attribut utilisé pour l'ordonnancement. Pour un ordonancement aléatoire utiliser le mot clé #RANDOM</p>"
          },
          {
            "group": "QueryString",
            "type": "String",
            "optional": true,
            "field": "ordertype",
            "defaultValue": "ASC",
            "description": "<p>Mode d'ordonancement (ASC ou DESC)</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>Nombre de ressources à retourner</p>"
          },
          {
            "group": "QueryString",
            "type": "integer",
            "optional": true,
            "field": "from",
            "description": "<p>Retourne toutes les ressources donc l'id est ultérieur à cet ID (passe outre les arguments orderby, orderbytype, limit et offset)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "universventes/:iduniversvente/microproduits/:idliaison",
    "title": "{get} universventes/:iduniversvente/microproduits/:idliaison",
    "description": "<p>Retourne un microproduit lié à l'univers de vente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=get-universventes/:iduniversvente/microproduits/:idliaison\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "GetUniversventesIduniversventeMicroproduitsIdliaison",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "QueryString": [
          {
            "group": "QueryString",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "QueryString",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "universventes/:id",
    "title": "{patch} universventes/:id",
    "description": "<p>Modifie un universvente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=patch-universventes/:id\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "designation",
            "description": "<p>Désignation</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "description": "<p>Domaine</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "PatchUniversventesId",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "universventes/:iduniversvente/microproduits/:idliaison/down",
    "title": "{patch} universventes/:iduniversvente/microproduits/:idliaison/down",
    "description": "<p>Modifie l'ordre d'un produit d'un univers de vente (descendre dans l'ordre) <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=patch-universventes/:iduniversvente/microproduits/:idliaison/down\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "PatchUniversventesIduniversventeMicroproduitsIdliaisonDown",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "universventes/:iduniversvente/microproduits/:idliaison/up",
    "title": "{patch} universventes/:iduniversvente/microproduits/:idliaison/up",
    "description": "<p>Modifie l'ordre d'un produit d'un univers de vente (remonter dans l'ordre) <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=patch-universventes/:iduniversvente/microproduits/:idliaison/up\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "PatchUniversventesIduniversventeMicroproduitsIdliaisonUp",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "universventes",
    "title": "{post} universventes",
    "description": "<p>Ajoute un universvente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=post-universventes\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "designation",
            "description": "<p>Désignation</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "domaine",
            "defaultValue": "default",
            "description": "<p>Domaine</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": false,
            "field": "uid",
            "description": "<p>UID</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "PostUniversventes",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "universventes/:id/microproduits",
    "title": "{post} universventes/:id/microproduits",
    "description": "<p>Ajoute un microproduit à un univers de vente <br/><a target=\"_blank\" href=\"../../../parser/index.php?endpoint=universventes&method=post-universventes/:iduniversvente/microproduits\">Executer la méthode</a></p>",
    "group": "universventes",
    "version": "1.0.0",
    "permission": [
      {
        "name": "global"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "integer",
            "optional": false,
            "field": "id_microproduit",
            "description": "<p>Micro produit à ajouter</p>"
          },
          {
            "group": "Body",
            "type": "string",
            "optional": true,
            "field": "key",
            "defaultValue": "id",
            "description": "<p>Nom de l'attribut utilisé comme clé</p>"
          },
          {
            "group": "Body",
            "type": "boolean",
            "optional": true,
            "field": "debug",
            "defaultValue": "false",
            "description": "<p>Si true, renvoie des informations de debug.</p>"
          }
        ]
      }
    },
    "filename": "v1/universventes.php",
    "groupTitle": "universventes",
    "name": "PostUniversventesIdMicroproduits",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Jeton d'authentification (à générer avec le endpoint login)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"AEDFD547365673667365\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
