/*

function saudacao(name){
    return `Bom dia ${name}!`;
}
const variavel = saudacao('humberto')
console.log(variavel) 

function soma(x,y){
    const resultado = x + y;
    return resultado;
}
const resultado = soma(10,6)
console.log(resultado)


function divisao(x,y){
    const resultado = x / y;
    return resultado;
}
const resultadodiv = divisao(153698,3).toFixed(2)
console.log(resultadodiv)

function multiplicacao(x,y){
    const resultado = x * y
    return resultado;
}
const resultadomult = multiplicacao(132, 1269)
console.log(resultadomult)

function subtracao(x,y){
    const resultado = x - y
    return resultado
}
const resultadosub = subtracao(132, 1269)
console.log(resultadosub)

*/

const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(9))
console.log(raiz(144))

//arrow function
const raizarrow = n => n ** 0.5;
console.log(raizarrow(225))