// define a classic function that console logs something
// call this function with node.js

// hoisting
// logMe()

function logMe(name) {
    console.log("Hi", name)
}

const giveName = function() {
    return "Anders"
}

logMe(giveName())


// functions are first class citizens in JS

// arrow functions
const yourName = () => {
    return "Charlene"
}

console.log(yourName())



