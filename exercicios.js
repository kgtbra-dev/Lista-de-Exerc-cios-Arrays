//17 Média dos números
let numeros2 = [5,10,4,8,6];
let soma2 = 0;
let media = 0;
for (let i = 0; i < numeros2.length; i++) {
    soma2 = soma2 + numeros2[i];
}
media = soma2 / numeros2.length;
console.log(" A média é: " + media);


//18 Maior número
let numeros3 = [15, 8, 22, 5, 12];
let maiornumero = numeros3[0];
for (let i = 1; i < numeros3.length; i++){
    if (numeros3[i] > maiornumero){
        maiornumero = numeros3[i];
    }
}
console.log(" O maior número é: " + maiornumero);


//19 Menor número
let numeros1 = [15, 8, 22, 5, 12];
let menornumero = numeros1[0];
for (let i = 0; i < numeros1.length; i++){
    if (numeros1[i] < menornumero){
        menornumero = numeros1[i];
    }
}
console.log(" O menor número é :" + menornumero);


//20 Quantidade de números pares
let numeros4 = [1,2,3,4,5,6,7,8];
let quantidadepares = 0;
for (let i = 0; i < numeros4.length; i++) 
    if (numeros4[i] % 2 ===0){
        quantidadepares = quantidadepares + 1;
    }
console.log(" A quantidade de números pares é: " + quantidadepares);


// Nível 5 — Condições com arrays
//21 Aprovados e reprovados
let notas2 = [10,7,8,5,6,3];
let aprovados = 0;
let reprovados = 0;
for (let i = 0; i < notas2.length; i++){
    if (notas2[i] >= 6)
        aprovados = aprovados + 1;
    else
        reprovados = reprovados + 1;
}
console.log(" A quantidade de aprovados é: " + aprovados);
console.log(" A quantidade de reprovados é: " + reprovados);


//22 Procurando um produto
let produtos = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let produtoBuscado = "Coxinha";
let produtoEncontrado = 0;
let produtonaoEncontrado = 0;
for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === produtoBuscado) 
       produtoEncontrado = produtoEncontrado + 1;
    else
        produtonaoEncontrado = produtonaoEncontrado + 1;
       
}
console.log(" O produto foi encontrado: " + produtoEncontrado);
console.log(" O produto não encontrado: " + produtonaoEncontrado);


//23 Verificando nota baixa
let notas3 = [10,7,8,9,7,10];
let abaixodamedia = 0;
let notasboas = 0;
for (let i = 0; i < notas3.length; i++){
    if (notas3[i] < 6)
        abaixodamedia = abaixodamedia + 1;
    else
        notasboas = notasboas + 1;
}
console.log(" Existe nota abaixo da média: " + abaixodamedia);
console.log(" Todas as notas estão boas: " + notasboas);


//24 Contando notas acima da média
let notas4 = [10,7,8,9,9,8];
let notasboas = 0;
for (let i = 0; i < notas4.length; i++){
    if (notas4[i] > 6)
        notasboas = notasboas + 1;
}
console.log(" A quantidade de notas acima da média é: " + notasboas);


//25 Lista de tarefas
let tarefas = ["Estudar", "Fazer volei", "Lavar a luça", "Ler","Arrumar a cama"];
for (let i = 0; i < tarefas.length; i++){
    console.log(tarefas[i]);
}
tarefas. push("Fazer lição de casa");
console.log(tarefas);


//25 Desafio Final
let cantina2 = ["Salgado", "Bolo", "Refri", "Chocolate", "Pão de qeuijo"];
cantina2.push("Crepe");
cantina2.shift();
cantina2[0] = "Pastel";
console.log(" Tamanho da lista:" + cantina2.length);
for (let i = 0; i <cantina2.length; i++){
    console.log(cantina2[i]);
}

let produtoBuscado = "Coxinha";
let produtoEncontrado = 0;
for (let i = 0; i < cantina2.length; i++) {
    if (cantina2[i] === produtoBuscado) {
       produtoEncontrado = produtoEncontrado + 1;
    }
}
if (produtoEncontrado > 0) {
    console.log(" O produto " + produtoBuscado + " foi encontrado na cantina.");
} else {
    console.log(" O produto " + produtoBuscado + " não foi encontrado na cantina.");
}

