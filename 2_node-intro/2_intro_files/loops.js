const fruits = ["apple", "banana", "pineapple", "tomato"]

// fruits.forEach((element)=> {
//     console.log(element)
// })

const mapResult = fruits.map(element => {
    if(element != "apple") {
        return element   
    }
})

const filterResult = fruits.filter(fruit => !fruit.toLowerCase().includes("n"))


console.log(filterResult)

// fruits.forEach(console.log)