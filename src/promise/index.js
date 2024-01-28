const cows = 8

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve("Resuelto: operación exitosa, se pueden ordeñar")
    } else {
        reject("Rechazado: faltan vacas para poder cumplir el minimo necesario")
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Finally")
})