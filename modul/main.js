class Tax {
    constructor(name, value, currency) {
      this.name = name;
      this.value = value;
      this.currency = currency;
    }
  }
  
  class Parser {
    regOldTax  {
          regGeneralTax: /\D{2}\d{2}\s\D{3}\s+\w+/gmi,
          regCurrencyTax: /(?<=.{5})[a-z]{3}/gmi,
          regValueTax: /(?<=\s)[0-9]+/gmi,
          regNameTax: /\w{2}(?=$)/gmi
        };
    regNewTax= {
          newTax: /\w{3}\s+\w+\-\w{2}/gi
        };
  
      parse = (str,reg) => str.match(reg)
      createNewTax = (item) => {
        return item.map((item)=>{
              var elem = new Tax(
                  this.parse(item,this.regOldTax.regNameTax),
                    this.parse(item,this.regOldTax.regValueTax),
                    this.parse(item,this.regOldTax.regCurrencyTax)
              );
                return elem;
          });
      }
      getOldTax = (string) => {
           var arrTax = [];
            arrTax = this.parse(string,this.regOldTax.regGeneralTax);
        console.log(arrTax);
            arrTax = this.createNewTax(arrTax)
        return arrTax
      }
      getNewTax = (string) => {
        var arrTax = [];
        arrTax = this.parse(string,this.regNewTax.newTax);
        arrTax = this.createNewTax(arrTax)
        return arrTax
      }
  }
  
  
  var parser = new Parser;