// objetos
const aluno = {
    nome: "Grazielli",
    idade: 20,
    curso: "Eng. Software",
    matriculaAtiva: true,
    endereco: {
        rua: "blablabla"
    }
}

const {nome, idade} = aluno

console.log(nome)
console.log(idade)

// console.log(aluno.endereco)

// //arrays
// const listaFrutas = ["Uva", "Laranja"]

// for (let index = 0; index < listaFrutas.length; index++) {
//     const element = listaFrutas[index];
//     console.log("Fruta " + index, element)
// }

// // console.log(listaFrutas);

// //funções
// const NOME = function printNome() {
//     console.log("Bruno")
// }

// NOME();

// function soma(val1, val2) {
//     return val1 + val2;
// }

// console.log(soma(2, 5))

// function subtração(val1, val2) {
//     return val1 - val2;
//…
const listaFrutas = ["Uva", "Laranja"];
const novaLista = [...listaFrutas, "Pera"];
console.log(novaLista);

//---

// const listaAbacate = listaFrutas.map(fruta => "abacate");
// console.log(listaAbacate);

//---

// const listaLaranjas = listaFrutas.filter(fruta => fruta == "Laranja");
// console.log(listaLaranjas);

//---

// const transacoesConta = [20, 10, 40, 100]
// const valorTotal = transacoesConta.reduce(
//     (valorAnterior, valorAtual) => valorAnterior + valorAtual
// )

// console.log(valorTotal)

//---