"use strict";
// ####################################
// DESAFIO 02
// ####################################
// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
// Resposta - Desafio - 02
console.log("Desafio - 02");
var profissaoEnum;
(function (profissaoEnum) {
    profissaoEnum["atriz"] = "atriz";
    profissaoEnum["ator"] = "ator";
    profissaoEnum["padeiro"] = "pedreiro";
    profissaoEnum["padeira"] = "padeira";
    profissaoEnum["desenvolvedor"] = "desenvolvedor";
    profissaoEnum["desenvolvedora"] = "desenvolvedora";
})(profissaoEnum || (profissaoEnum = {}));
(() => {
    const pessoa1 = {
        nome: "maria",
        idade: 29,
        profissao: profissaoEnum.atriz
    };
    const pessoa2 = {
        nome: "roberto",
        idade: 19,
        profissao: profissaoEnum.padeiro
    };
    const pessoa3 = {
        nome: "laura",
        idade: 32,
        profissao: profissaoEnum.atriz
    };
    const pessoa4 = {
        nome: "carlos",
        idade: 19,
        profissao: profissaoEnum.padeiro
    };
    console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos de idade e trabalha como ${pessoa1.profissao}.`);
    console.log(`${pessoa2.nome} tem ${pessoa2.idade} anos de idade e trabalha como ${pessoa2.profissao}.`);
    console.log(`${pessoa3.nome} tem ${pessoa3.idade} anos de idade e trabalha como ${pessoa3.profissao}.`);
    console.log(`${pessoa4.nome} tem ${pessoa4.idade} anos de idade e trabalha como ${pessoa4.profissao}.`);
})();
console.log("### FIM ###");
