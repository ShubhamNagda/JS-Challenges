class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.Name} sounds: ${this.sound}`)
    }
}

const Rocky = new Animal('Rocky', 'Dog', 'Barking');
Rocky.makeSound();