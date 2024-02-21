// Aqui estou enviando um olá mundo
console.log("Olá mundo!");

// Aqui abri uma variavel com meu nome
let nome = "cleiton";

console.log("Olá " + nome);
let idade = 23;
let altura = 1.75;
console.log("Nome: " + nome + " - sua idade é: " + idade + " - e sua altura é: " +altura);

// aprendi a usar let ao inves de var
let trabalha = true;

// operador ternário, um tipo de if
console.log("trabalha: " + (trabalha === true ? "Sim" : "Não"));

// variavel constante de tipo sanguineo
const sangue = "AB+";
console.log(sangue);

// variavel de tipo objeto
let endereco ={
    "rua" : "Laurindo",
    "num" : "05",
    "Bairro" : "Centro",
    "UF" : "SP",
    "Mora" : true
}
console.log(endereco);
// tipificando  a variavel
console.log(typeof(endereco));

// criando um array simples
let fruta = ["Uva","Maçã","Banana"];

console.log(fruta);

console.log(fruta [0]);

// criando um array de [2][2]
let velha= [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

console.log(velha[2][2]);
console.log(typeof(velha));

// operador ternário, um tipo de if
console.log((Array.isArray(velha)) ? "Array"  : "Não é array");
console.log(typeof(endereco));