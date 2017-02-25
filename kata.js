/**
 *   @author Anne Johnson
 *   @version 0.0.1
 *   @summary Ichi-gatsu || created: 02.24.2017
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

class Ikikata1 {
    constructor() {
        this.users = [];
        this.continueResponse = null;
        this.counter = 0;
        this.printUser = (userData) => {
            this.printUsers(userData);
        };
        process.stdout.write('\x1Bc'); //Clears the screen
        this.setContinueResponse();
        while (this.continueResponse === 1) {
            this.populateUsers();
            this.setContinueResponse();
            this.counter++;
        }
        this.printUser('bob');
        console.log(`-----------------------------------------------------\n`);
        this.printUsers();
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

    populateUsers() {
        const MIN_YEAR = 1900, MAX_YEAR =2017, CURRENT_YEAR = 2017;
        let firstName, lastName, birthYear, age;

        while (typeof firstName === 'undefined' || !/(^[a-z]+$){1,20}/i.test(firstName)) {
            firstName = PROMPT.question(`Please enter first name: `);
        }
        while (typeof lastName === 'undefined' || !/(^[a-z]+$){1,30}/i.test(lastName)) {
            lastName = PROMPT.question(`Please enter last name: `);
        }
        while (typeof birthYear === 'undefined' || birthYear < MIN_YEAR || birthYear > MAX_YEAR) {
            birthYear = PROMPT.question(`Please enter year of birth: `);
            age = Number(CURRENT_YEAR-birthYear)
        }
        this.users[this.counter] = {'firstName': firstName, 'lastName': lastName, 'age': age};
    }

    printUsers(userData) {
        if (typeof userData === 'undefined') {
            for (let i = 0; i < this.users.length; i++) {
                console.log(`Name = ${this.users[i].firstName} ${this.users[i].lastName}, Age = ${this.users[i].age}`);
            }
        } else {
            let userDatas = this.users.filter((x) => {
                return x.firstName === userData;
            });
            for (let i = 0; i < userDatas.length; i++) {
                console.log(`Name = ${userDatas[i].firstName} ${userDatas[i].lastName}, Age = ${userDatas[i].age}`);
            }
        }
    }
}

(main => {
    new Ikikata1();
})();

