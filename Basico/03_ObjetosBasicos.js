
const pessoa1 = {
    nome: 'Humberto',
    sobrenome: 'Morimitsu',
    idade: 20
}

console.log(pessoa1.nome)


function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
//passando os argumentos para os parametros da função criaPessoa
const pessoa2 = criaPessoa('João', 'Oliveira', 25)
console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)

function criarCarro(marca, modelo, ano, cor){
    return{
        marca:marca,
        modelo:modelo,
        ano: ano,
        cor: cor
    }
}

const carro = criarCarro('Fiat', 'Uno', 2020, 'Vermelho')
console.log(carro.marca)

const carro2 = {
    marca: "Vw",
    modelo: "Gol",
    ano: 2022,
    cor: "Branco",

    fala(){
        console.log(`O carro é um ${this.marca} ${this.modelo} ${this.ano} ${this.cor}`)
    }
}
carro2.fala()