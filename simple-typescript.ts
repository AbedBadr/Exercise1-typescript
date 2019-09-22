interface IVATCalculator {
    calculate(amount: number): number;
}

class VATCalculator implements IVATCalculator {
    constructor() {

    }

    calculate(amount: number): number {
        var VAT = 25;
        return amount + ((amount/100)*VAT);
    }
}

const vat: IVATCalculator = new VATCalculator();

console.log(vat.calculate(100));