import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

function postData (urlApi, data) {
    // return fetch(urlApi).then(response => response.json())
    const response = fetch(urlApi, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return response
}

const newProduct = {
    "title": "Banana Split",
    "price": 120,
    "description": "Ice cream",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, newProduct)
    .then(response => response.json())
    .then(data => console.log(data))