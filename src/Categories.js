import TaxItem, { Item } from "./Item";

export class Beer extends TaxItem {
    getTax() {
        return 0.2;
    }
}

export class Cigar extends TaxItem {
    getTax() {
        return 0.25;
    }
}

export class Eletronics extends TaxItem {
    getTax() {
        return 0.3;
    }
}

export class Water extends Item {}