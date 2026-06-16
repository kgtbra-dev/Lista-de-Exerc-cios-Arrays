//Atividade 1 Nível Básico
let alunos = ["Kevin", "Thiago", "Paemla", "Gabi", "Dudis"];
console.log(alunos[0]);
console.log(alunos[4]);
console.log(alunos);


//Atividade 2 Lista de frutas
let frutas = ["Maçã", "Morango", "Melancia", "Mertilo"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);


//3 Acessando posições
let cores = ["Azul", "Verde", "Preto", "Branco", "Lilás"];
console.log(cores[0]);
console.log(cores[2]);
console.log(cores[4]);


//4 Alterando um valor
let produtos = ["Pastel", "Suco", "Coxinha"];
produtos[1] = "Refrigerante";
console.log(produtos);


//5 Quantidade de elementos
let cidades = ["Campinas", "Valinhos", "Piracicaba", "Vinhedo", "Hortolandia", "Sorocaba"];
console.log(' A lista possui ' + cidades.length + ' cidades ');


//Nível 2 — Manipulação de arrays
let jogos = ["Valorant", "OverWatch", "LOL"];
jogos.push("Fortnite");
console.log(jogos);


//7 Adicionando no início
let materias = ["Portugues", "Mátematica", "História"];
materias.unshift("Bioogia");
console.log(materias);


//8  Removendo o último item
let cantina = ["Coxinha", "Coca cola", "Raviole", "Pipoca"];
cantina.pop();
console.log(cantina);


//9 Removendo o primeiro item
let nomes = ["Dudis", "Kevin", "Thiago", "Manu"];
nomes.shift();
console.log(nomes);


// 10 Lista atualizada
let produtox = ["Pastel", "Suco", "Coxinha", "Chocolate"];
produtox.push("Pão de Queijo");
produtox.shift();
produtox[2] = "Esfiha";
console.log(produtox);
console.log("lista possui"+ produtox.length + " produtos ");


// Nível 3 — Percorrendo arrays com for
//11 Mostrando todos os alunos
let alunos1 = ["Kevin", "Thiago", "Pamela", "Lele"];
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i]);
}


//12 Lista numerada
let filmes = [
    "Vingadores.",
    "Vingadores  Ultimato.",
    "A era de Ultron.",
    "Homem aranha sem volta pra casa.",
    "Homem aranha de volta pra casa.",
];
for (let i = 0; i < filmes.length; i++) {
    console.log(i + 1 + " . " + filmes[i]);
}


//13 Produtos da cantina
let produtoss = ["Pastel", "Churros", "Coxinha", "Cachorro Quente"];
for (let i = 0; i < produtoss.length; i++) {
    console.log(" Produtos " + (i + 1) + " : " + produtoss[i]);
}


//14 Notas dos alunos
let notas1 = ["10", "9", "8", "7", "6"];
for (let i = 0; i < notas1.length; i++) {
    console.log(notas1[i]);
}


//15 Verificando presença
let presentes = [
    "Fulana está presente.",
    "Kevin está presente.",
    "Pamela está presente.",
    "Gabriela está presente.",
    "Thiago está presente.",
];
for (let i = 0; i < presentes.length; i++) {
    console.log(presentes[i]);
}
// Nível 4 — Cálculos com arrays
