const variableFile = require("./exporting_variables")
const Bob = require("./Bobstruction")
const bob1 = new Bob(5, 3)

// console.log(variableFile.giveMyStringAName)
// console.log(variableFile.magicNumber)

// console.log(variableFile)
// const bob1 = new Bobstruction(1, 2)
// console.log(bob1.bobTangle())

console.log(bob1.bobTangle())