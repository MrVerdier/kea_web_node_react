const fs = require("fs")
const faker = require("faker")
const performance = require("perf_hooks").performance
faker.locale = "sv"

var t0 = performance.now();

function createPerson(){
    return {
            namePrefix: faker.name.prefix(),
            name: faker.name.findName(),
            avatar: faker.image.avatar(),
            email: faker.internet.email()
        }
}


const amountOfPeople = 100
const people = []

for (let i = 0; i < amountOfPeople; i++) {
    people.push(createPerson())
}

var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");

let jsonData = JSON.stringify(people)

fs.writeFile("users.json", jsonData, function(err) {
    if (err) {
        throw(err);
    }
    console.log("saved to users.json")
});