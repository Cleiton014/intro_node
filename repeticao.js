 let entrada = require("prompt-sync")();
 
// let idade = entrada("Digite sua idade: ");

// if (idade < 18){
//     console.log("Menor");
// } else if (idade == 18){
//     console.log("Tem 18");
// } else{
//     console.log("Maior");
// }

// let n = parseInt(entrada("Digite um número para visualizar a sua tabuada!"));

// let cont = 1;
// while (cont <=10){
//     let cal = (n*cont);
//     console.log(`${n} X ${cont} = ${cal}`);
//     cont++
// }
            /////////////////////////////////
// for (let cont = 1 ; cont <=10; cont++){
//         let cal = (n*cont);
//     console.log(`${n} X ${cont} = ${cal}`);
// }
            /////////////////////////////////
// let cont = 1;
// do{
//     let cal = (n*cont);
//     console.log(`${n} X ${cont} = ${cal}`);
//     cont++
// } while (cont <=10);
            ////////////// exercicio com validação de senha ///////////////////
// const senha='123456';
// let cont = 0;
// do {
//     if (cont == 3){
//         break;
//     }
//     cont++;
//    var senhaDig = entrada("Digite a senha para acessar o sistema: ")
// } while (senha !== senhaDig);

// if (cont >= 3){
//     console.log("Acesso negado!");
// } else {
//     console.log("Acesso autorizado!");
// }
// entrada();

// let sn = "123456";
// let snDg = entrada("Digite a senha para acessar o sistema: ");

// while ( sn ==! snDg) {
//     snDg = entrada("Digite a senha para acessar o sistema: ");
// }
            /////  exercicio de senha com for ///////
// const senha = "123";
// for (let cont = 1 ; cont <=3; cont++){
//         var senhaDig = entrada("Digite a senha para acessar o sistema: ");
//         if (senhaDig == senha){
//             var acesso = ("Acesso liberado!");
//             break;
//         } else{
//             var acesso = ("Acesso negado!");
//         }
        
//     }
//     console.log(acesso);;
            /////  exercicio de senha com for ///////

let senha = "123";
let snCorreta = false;

for (let cont = 1; cont <=3; cont++){
    const snDg = entrada("Digite a senha: ");
    if (senha === snDg){
        snCorreta = true;
        break;
    }
}
console.log(snCorreta ? "Acesso autorizado" : "Acesso negado");
entrada();