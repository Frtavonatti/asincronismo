import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

async function fetchData (urlApi) {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

const anotherFn = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`)
        const product = await fetchData(`${urlApi}/products/${products[0].id}`) 
        const categories = await fetchData(`${urlApi}/categories`) 
        console.log(product, categories)
    } catch (error) {
        console.error(error)
    }
}

anotherFn(API)

// OTRO EJERCICIO PARA DEVOLVER UNA LISTA CON TODOS LOS TITULOS DE LOS PRODUCTOS
const productListPromise = fetchData(`${API}/products`)

async function displayTitles (arrayPromise) {
    try {
        const array = await arrayPromise
        let productTitles = []
        for (let index = 0; index < array.length; index++) {
            const product = array[index];
            productTitles.push(product.title)
        }
        console.log(productTitles)
    } catch (error) {
        console.error(error)
    }
}

displayTitles(productListPromise)


