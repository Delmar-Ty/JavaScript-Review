class Menu {
    #hotdogs = 5;
    #hamburgers = 7;
    constructor (hotdogQty, hamburgerQty) {
        this.hotdogQty = hotdogQty;
        this.hamburgerQty = hamburgerQty;
    }

    get hotdogs() {
        return this.#hotdogs;
    }

    get hamburgers() {
        return this.#hamburgers;
    }

    calcPrice = function () {
        return (this.hotdogQty * this.hotdogs) + (this.hamburgerQty * this.hamburgers);
    }
}

let order1 = new Menu(5, 12);
console.log(`Order Total is $${order1.calcPrice()}`);
let order2 = new Menu(2, 3);
console.log(`Order Total is $${order2.calcPrice()}`);
let order3 = new Menu(10, 5);
console.log(`Order Total is $${order3.calcPrice()}`);