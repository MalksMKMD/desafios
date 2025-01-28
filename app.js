titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function consolebutton(){
    console.log('O botào console foi precionado');
}

function alertaamor(){
    alert('Eu amo JS');
}
console.log("Commit é o caralho")
function cidadeprompt(){
    let cidade = prompt("Diz uma cidade ai");
    alert("Estive em " + cidade + " e lembrei de vc");
}

function somaprompt(){
    let soma1 = parseInt(prompt("Diz o primeiro número"));
    let soma2 = parseInt(prompt("Diz o segundo número"));
    alert(soma1 + soma2);
}

//let resultado = prompt("Diz um número");
//let quadrado = x => x * x;
//let resultado = quadrado(prompt("Diz um número"))
//isNaN(resultado) ? console.log("Coloca um Número certo") : console.log(resultado * resultado);
//(x => console.log(x))("Olá Mundo");
//let ola = x => console.log(x);
//ola("Olá, mundo");
//(x => console.log("Olá, " + x))(prompt("Diz seu nome"));
//let nome = x => console.log("Olá, " + x);
//nome(prompt("Diz seu nome ai"));

//let media = (x, y, z) => console.log((x + y + z)/3);
//media(parseInt(prompt("Número 1")), parseInt(prompt("Número 2")), parseInt(prompt("Número 3")));
//function maiorF(){
//    console.log(Math.max(prompt("Número 1"), prompt("Número 2"), prompt("Número 3")));
//}
//maiorF()

//(x => console.log(parseInt(x) * 2))(prompt("Diz um número"));

// function imc(a, p){
//     let final = p / (a * a);
//     let resposta = "Magreza";
//     resposta = final >= 18.5 && final <= 24.9 ? "Normal" : resposta;
//     resposta = final >= 25 && final <= 29.9 ? "Sobrepeso 1" : resposta;
//     resposta = final >= 30 && final <= 39.9 ? "Obesidade 2" : resposta;
//     resposta = final >= 40 ? "Obesidade Grave 3" : resposta;
//     return "Seu imc é: " + final + " " + resposta;
// }
// console.log(imc(prompt("Sua altura"), prompt("Seu peso")));

// function fatorial(n){
//     let resultado = 1
//     for (let i = 2; i <= n; i++){
//         resultado *= i;
//     }
//     return resultado;
// }
// console.log(fatorial(prompt("Diz um número")));

// let dolarValor = (x) => x * 4.80;
// alert(dolarValor(prompt("Fala quantos dolares ce tem")));

// let areaPerimetro = (x, y) => console.log("O perímetro é: " + (x + y) * 2 + ", e a área é: " + (x * y));
// areaPerimetro(parseInt(prompt("Altura do retangulo")), parseInt(prompt("Largura do retangulo")));

// let circuloAreaPerimetro = (x) => console.log("O perímetro é: " + (x * 2 * 3.14) + ", a área é: " + ((x ** 2 * 3.14)));
// circuloAreaPerimetro(parseInt(prompt("raio do circulo")));

// function tabuada(){
//     let numeroraiz = parseInt(prompt("ë uma tabuada até 10, fala o número"));
//     for(let i = 1; i <= 10; i++){
//         console.log(numeroraiz + " vezes " + i + " é: " + (numeroraiz * i));
//     }
// }
// tabuada();

// let listaGenerica = [];
// let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
// console.log(linguagensDeProgramacao);
// linguagensDeProgramacao.push("Java", "Ruby", "GoLang");
// console.log(linguagensDeProgramacao);
// let nomes = ["Eduardo", "Adriano", "Romero Brito"];
// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);