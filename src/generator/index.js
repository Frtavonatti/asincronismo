function* gen () {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen()

console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

//EJEMPLO 2

function* iterate (array) {
    for (const element of array) {
        yield element
    }
}

const numbers = [1, 2, 3, 4, 5]
const it = iterate(numbers)

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)