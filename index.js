function somar(a,b){
    return a + b;
}

function subtrair(a,b){
    return a - b; 
}

function multiplicar(a,b){
    return a * b; 
}

function divir(primeiroNumero,segundoNumero){
    return primeiroNumero / segundoNumero; 
}

function maiorDeIdade(idade) {
    if (idade => 18) {
        return "Você é maior";
    } else {
        return "Você é de menor"; 
    }
}

console.log(somar(2,2));
console.log(subtrair(5,10));
console.log(multiplicar(2,2));
console.log(divir(10,2)); 
console.log(maiorDeIdade(21)); 

module.exports = {
    somar, 
    subtrair, 
    multiplicar,
    divir,
    maiorDeIdade,
}