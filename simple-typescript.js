var VATCalculator = /** @class */ (function () {
    function VATCalculator() {
    }
    VATCalculator.prototype.calculate = function (amount) {
        var VAT = 25;
        return amount + ((amount / 100) * VAT);
    };
    return VATCalculator;
}());
var vat = new VATCalculator();
console.log(vat.calculate(100));
