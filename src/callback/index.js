function sum(num1, num2){
    return num1 + num2;
}

//No necesariamente se debe llamar callback
function calc(num1, num2, callback) { 
    return callback(num1, num2);
}; 

//sum debe estar sin () y sin argumentos
console.log(calc(2, 2, sum)); 


//setTimeOut
function greeting (name) {
    console.log(`Hola ${name}`); 
}

setTimeout(greeting, 2000, "Banana")
