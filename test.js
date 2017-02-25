
"use strict";
const PROMPT = require('readline-sync');

class Ikikata1 {
    constructor() {
        this.animals = [];
        this.continueResponse = null;
        this.counter = 0;
        this.printAnimal = (critter) => {
            this.printAnimals(critter);
        };
        process.stdout.write('\x1Bc'); //Clears the screen
        this.setContinueResponse();
        while (this.continueResponse === 1) {
            this.populateAnimals();
            this.setContinueResponse();
            this.counter++;
        }
        this.printAnimal('dog');
        console.log(`-----------------------------------------------------\n`);
        this.printAnimals();
    }

    setContinueResponse() {
        if (this.continueResponse != null) {
            this.continueResponse = -1;
            while (this.continueResponse !== 1 && this.continueResponse !== 0) {
                this.continueResponse = Number(PROMPT.question(`\nDo you want to continue? [ 0=no, 1=yes ]: `));
            }
        } else {
            this.continueResponse = 1;
        }
    }

    populateAnimals() {
        let species, name;
        while (typeof species === 'undefined' || !/(^[a-z]+$){1,20}/i.test(species)) {
            species = PROMPT.question(`Please enter animal species: `);
        }
        while (typeof name === 'undefined' || !/(^[a-z]+$){1,30}/i.test(name)) {
            name = PROMPT.question(`Please enter animal name: `);
        }
        this.animals[this.counter] = {'species': species, 'name': name};
    }

    printAnimals(critter) {
        if (typeof critter === 'undefined') {
            for (let i = 0; i < this.animals.length; i++) {
                console.log(`Type = ${this.animals[i].species}, Name = ${this.animals[i].name}`);
            }
        } else {
            let critters = this.animals.filter((x) => {
                return x.species === critter;
            });
            for (let i = 0; i < critters.length; i++) {
                console.log(`Type = ${critters[i].species}, Name = ${critters[i].name}`);
            }
        }
    }
}

(main => {
    new Ikikata1();
})();