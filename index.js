'use strict';

var Handlebars = require("handlebars");

/**
 * Loading component
 */

Handlebars.registerHelper('translate', function(string, lang) {
  if (lang != undefined) {
    this.translations.set(lang);
  }
  return new Handlebars.SafeString(this.translations[string][this.translations.language]);
});

let translations = {
  language: "pr-BR",
  set: function(value) {
      this.language = value;
  },
  cliente: {
    "pt-BR": "Cliente",
    "en-US": "Customer",
    "es": "Cliente",
  },
  abertura: {
    "pt-BR": "Abertura",
    "en-US": "Opening",
    "es": "Apertura",
  },
  status: {
    new: {
      "pt-BR": "Novo",
      "en-US": "New",
      "es": "Nuevo",
    },
    open: {
      "pt-BR": "Aberto",
      "en-US": "Open",
      "es": "Abierto"
    },
    pending: {
      "pt-BR": "Aguardando resposta",
      "en-US": "Waiting for an answer",
      "es": "Esperando respuesta"
    },
    hold: {
      "pt-BR": "Em espera",
      "en-US": "Hold",
      "es": "En espera"
    },
    solved: {
      "pt-BR": "Resolvido",
      "en-US": "Resolved",
      "es": "Resuelto"
    },
    closed: {
      "pt-BR": "Fechado",
      "en-US": "Closed",
      "es": "Cerrado"
    }
  },
  survey: {
    offered: {
      "pt-BR": "Oferecido",
      "en-US": "Offered",
      "es": "Ofrecido",
    },
    unoffered: {
      "pt-BR": "Não Oferecido",
      "en-US": "Unoffered",
      "es": "No Ofrecido"
    },
    good: {
      "pt-BR": "Bom",
      "en-US": "Good",
      "es": "Bueno"
    },
    bad: {
      "pt-BR": "Ruim",
      "en-US": "Bad",
      "es": "Malo"
    }
  }
}

module.exports = translations;
