"use strict";
// DESAFIO 01
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";
// Resposta
let employee = {
    code: 1,
    name: "Nome"
};
employee.code = 10;
employee.name = "John";
// Também podemos ser mais explícitos
let employee2 = {
    code: 2,
    name: "Nome2"
};
employee2.code = 11;
employee2.name = "Travolta";
var profissaoEnum;
(function (profissaoEnum) {
    profissaoEnum[profissaoEnum["atriz"] = 0] = "atriz";
    profissaoEnum[profissaoEnum["ator"] = 1] = "ator";
    profissaoEnum[profissaoEnum["padeiro"] = 2] = "padeiro";
    profissaoEnum[profissaoEnum["padeira"] = 3] = "padeira";
    profissaoEnum[profissaoEnum["desenvolvedor"] = 4] = "desenvolvedor";
    profissaoEnum[profissaoEnum["desenvolvedora"] = 5] = "desenvolvedora";
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
