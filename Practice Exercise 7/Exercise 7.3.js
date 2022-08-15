class Animal {
    constructor (name, sound) {
        this.name =name;
        this.sound = sound;
    }

    output = function () {
        console.log(`${this.species} makes this sound: ${this.sound}`);
    }
}

Animal.prototype.playSound = function () {
    console.log(this.sound);
}

let cow = new Animal('cow', 'moo');
let pig = new Animal('pig', 'oink');
console.log(cow, pig);