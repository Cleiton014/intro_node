 let entrada = require("prompt-sync")();
 
// let idade = entrada("Digite sua idade: ");

// if (idade < 18){
//     console.log("Menor");
// } else if (idade == 18){
//     console.log("Tem 18");
// } else{
//     console.log("Maior");
// }

let n = parseInt(entrada("Digite um número para visualizar a sua tabuada!"));

// let cont = 1;
// while (cont <=10){
//     let cal = (n*cont);
//     console.log(`${n} X ${cont} = ${cal}`);
//     cont++
// }

// for (let cont = 1 ; cont <=10; cont++){
//         let cal = (n*cont);
//     console.log(`${n} X ${cont} = ${cal}`);
// }
let cont = 1;
do{
    let cal = (n*cont);
    console.log(`${n} X ${cont} = ${cal}`);
    cont++
} while (cont <=10);