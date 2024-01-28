const fnAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Async funcionando!"), 2000)
        : reject(new Error("Error: no está funcionando"))
    })  
}

const anotherFunction = async () => {
    const something = await fnAsync()
    console.log(something)
}

console.log("Before")
anotherFunction()
console.log("After")