// Blocked scope
// {
//     let number = 1
//     {
//         let number = 2
//         console.log(number)
//     }
//     console.log(number)
// }

for (let i = 0; i < 3; i++) {
    setTimeout(()=> {
        console.log(i)
    }, 1000)
}