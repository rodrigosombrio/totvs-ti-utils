'use strict';

var Handlebars = require("handlebars");
var translations = require("index.js");

Handlebars.registerHelper('translate', function(string, lang) {
  if (lang != undefined) {
    translations.set(lang);
  }
  return new Handlebars.SafeString(translations[string][translations.language]);
});

module.exports = translations;
