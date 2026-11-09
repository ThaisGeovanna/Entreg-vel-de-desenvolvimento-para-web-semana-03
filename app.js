console.log("===== BLOCO 1 =====");

let pontos = 50;
pontos = pontos + 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200;
} catch (erro) {
  console.log("Erro ao mudar MAX_PONTOS:", erro.name, "-", erro.message);
  console.log("Motivo: const não permite reatribuição, o valor não pode mudar depois de declarado.");
}

const texto = "Olá";
const numero = 42;
const verdadeiro = true;
let indefinido;
const nulo = null;

console.log("typeof texto:", typeof texto);
console.log("typeof numero:", typeof numero);
console.log("typeof verdadeiro:", typeof verdadeiro);
console.log("typeof indefinido:", typeof indefinido);
console.log("typeof nulo:", typeof nulo);

const nome = "Maria";
const idade = 20;

const fraseTemplate = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
const fraseConcatenada = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";

console.log(fraseTemplate);
console.log(fraseConcatenada);

console.log("\n===== BLOCO 2 =====");

console.log("Hoisting - 20 é maior de idade?", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

try {
  console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
  console.log("Erro ao chamar a expressão antes:", erro.name, "-", erro.message);
  console.log("Motivo: função de expressão não sofre hoisting, só existe depois da linha em que é declarada.");
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};

console.log("Depois de declarar, 15 é maior de idade?", ehMaiorDeIdadeExpressao(15));

function dobro(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2;

console.log("dobro(4):", dobro(4));
console.log("dobroExpressao(5):", dobroExpressao(5));
console.log("dobroArrow(6):", dobroArrow(6));

const dobroPadrao = (n = 1) => n * 2;

console.log("dobroPadrao(10):", dobroPadrao(10));
console.log("dobroPadrao() sem argumento:", dobroPadrao());

console.log("\n===== BLOCO 3 =====");

function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log("Nota 7:", classificarNota(7));
console.log("Nota 4.5:", classificarNota(4.5));

const corSemaforo = "amarelo";

switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

console.log("\nTabuada do 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\nContagem regressiva:");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

console.log("\nPar ou ímpar (for):");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é ímpar`);
  }
}

console.log("\nPar ou ímpar (while):");
let numeroAtual = 1;
while (numeroAtual <= 20) {
  if (numeroAtual % 2 === 0) {
    console.log(`${numeroAtual} é par`);
  } else {
    console.log(`${numeroAtual} é ímpar`);
  }
  numeroAtual++;
}

function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido";
  }
}

console.log("\nDias da semana:");
console.log(diaDaSemana(1));
console.log(diaDaSemana(4));
console.log(diaDaSemana(7));
console.log(diaDaSemana(9));