"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tax = function Tax(name, value, currency) {
  _classCallCheck(this, Tax);

  this.name = name;
  this.value = value;
  this.currency = currency;
};

var Parser = function Parser() {
  var _this = this;

  _classCallCheck(this, Parser);

  this.regOldTax = {
    regGeneralTax: /\D{2}\d{2}\s\D{3}\s+\w+/gmi,
    regCurrencyTax: /(?<=.{5})[a-z]{3}/gmi,
    regValueTax: /(?<=\s)[0-9]+/gmi,
    regNameTax: /\w{2}(?=$)/gmi
  };
  this.regNewTax = {
    newTax: /\w{3}\s+\w+\-\w{2}/gi
  };

  this.parse = function (str, reg) {
    return str.match(reg);
  };

  this.createNewTax = function (item) {
    return item.map(function (item) {
      var elem = new Tax(_this.parse(item, _this.regOldTax.regNameTax), _this.parse(item, _this.regOldTax.regValueTax), _this.parse(item, _this.regOldTax.regCurrencyTax));
      return elem;
    });
  };

  this.getOldTax = function (string) {
    var arrTax = [];
    arrTax = _this.parse(string, _this.regOldTax.regGeneralTax);
    console.log(arrTax);
    arrTax = _this.createNewTax(arrTax);
    return arrTax;
  };

  this.getNewTax = function (string) {
    var arrTax = [];
    arrTax = _this.parse(string, _this.regNewTax.newTax);
    arrTax = _this.createNewTax(arrTax);
    return arrTax;
  };
};

var parser = new Parser();