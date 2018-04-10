'use strict';

var expect = require('chai').expect;
var translate = require('../index');

describe('#translate', function() {
    translate.set("pt-BR");
    it('translate status', function() {
        expect(translate.status.hold[translate.language]).to.equal('Em espera');
    });
    it('translate survey', function() {
        expect(translate.survey.bad[translate.language]).to.equal('Ruim');
    });
});