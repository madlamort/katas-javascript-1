// Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function exercicio01() {
    let numeros = [];
    for (let i = 1; i <= 20; i++) {
        numeros.push(i);
    }
    return numeros;
}

// Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function exercicio02() {
    let numeros = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            numeros.push(i);
        }
    }
    return numeros;
}      

// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function exercicio03() {
    let numeros = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            numeros.push(i);
        }
    }
    return numeros;
}

// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function exercicio04() {
    let numeros = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            numeros.push(i);
        }
    }
    return numeros;
}

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function exercicio05() {
    let numeros = [];
    for (let i = 1; i <= 100; i++) {
        let root = Math.sqrt(i);
        if (root === Math.floor(root)) {
            numeros.push(i);
        }
    }
    return numeros;
}

// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function exercicio06() {
    let numeros = [];
    for (let i = 20; i > 0; i--) {
        numeros.push(i);
    }
    return numeros;
}

// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function exercicio07() {
    let numeros = [];
    for (let i = 20; i > 0; i--) {
        if (i % 2 === 0) {
            numeros.push(i);
        }
    }
    return numeros;
}

// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function exercicio08() {
    let numeros = [];
    for (let i = 20; i > 0; i--) {
        if (i % 2 !== 0) {
            numeros.push(i);
        }
    }
    return numeros;
}

// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function exercicio09() {
    let numeros = [];
    for (let i = 100; i > 0; i--) {
        if (i % 5 === 0) {
            numeros.push(i);
        }
    }
    return numeros;
}

// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function exercicio10() {
    let numeros = [];
    for (let i = 100; i > 0; i--) {
        let root = Math.sqrt(i);
        if (root === Math.floor(root)) {
            numeros.push(i);
        }
    }
    return numeros;
}

console.log("01) Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)")
console.log(exercicio01());
console.log("02) Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)")
console.log(exercicio02());
console.log("03) Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)")
console.log(exercicio03());
console.log("04) Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)")
console.log(exercicio04());
console.log("05) Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)")
console.log(exercicio05());
console.log("06) Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)")
console.log(exercicio06());
console.log("07) Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)")
console.log(exercicio07());
console.log("08) Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)")
console.log(exercicio08());
console.log("09) Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)")
console.log(exercicio09());
console.log("10) Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)")
console.log(exercicio10());
