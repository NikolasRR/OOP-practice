export class Item {
    constructor(category, description, price) {
        if (this.constructor == Item) {
            throw new Error("Abstract classes can't be instantiated.");
        }
        this.category = category;
        this.description = description;
        this.price = price;
    }
}

export default class TaxItem extends Item {
    constructor(category, description, price) {
        super(category, description, price);
        if (this.constructor == TaxItem) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    getTax(tax = 0) {
        return tax
    }
    calculateTax(tax) {
        return this.price * this.getTax();
    }

    getTax() {}
}

const test = new TaxItem("Beer", "Brahma", 10);
console.log(test.calculateTax());