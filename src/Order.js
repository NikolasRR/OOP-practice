export default class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getTotal() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    getTaxes() {
        return this.items.reduce((sum, item) => {
            switch (item.category) {
                case "Beer":
                    return sum + item.calculateTax(0.2);
                case "Cigar":
                    return sum + item.calculateTax(0.25);
                case "Eletronics":
                    return sum + item.calculateTax(0.3);
                default:
                    return sum + 0;
            }
        }, 0);
    }
}