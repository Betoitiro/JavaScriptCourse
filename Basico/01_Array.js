//Array é um tipo de dado estrutural, que serve para armazenar uma coleção de elementos, que podem ser de diferentes tipos de dados.
const alunos = ['Luiz', 'Maria', 'João'];

alunos[alunos.length] = 'Luiza'; // Adiciona um novo elemento no array
alunos.push('JoseAldo'); // Adiciona um novo elemento no array
alunos.unshift('Fábio'); // Adiciona um novo elemento no início do array

const remodivo = alunos.pop(); //Remove o último elemento do array
const removidoinicio = alunos.shift(); //Remove o primeiro elemento do array

console.log('removido no inicio ', remodivo)
console.log('removido no final', remodivo)

console.log(alunos);


const Segunda = ['open: 08:00', 'close: 18:00'];
const terca = ['open: 09:00', 'close: 12:00']; 
const quarta = ['open: 09:00', 'close: 12:00'];

console.log(Segunda, terca, quarta)
