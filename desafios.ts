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
let employee2: { code: number, name: string } = {
    code: 2,
    name: "Nome2"
};
employee2.code = 11;
employee2.name = "Travolta";


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

interface cadastroPessoas {
    nome: string,
    idade: number,
    profissao: profissaoEnum
}

enum profissaoEnum {
    "atriz", "ator", "padeiro", "padeira", "desenvolvedor", "desenvolvedora"
}

(() => {

    const pessoa1: cadastroPessoas = {
        nome: "maria",
        idade: 29,
        profissao: profissaoEnum.atriz
    }

    const pessoa2: cadastroPessoas = {
        nome: "roberto",
        idade: 19,
        profissao: profissaoEnum.padeiro
    }

    const pessoa3: cadastroPessoas = {
        nome: "laura",
        idade: 32,
        profissao: profissaoEnum.atriz
    };

    const pessoa4: cadastroPessoas = {
        nome: "carlos",
        idade: 19,
        profissao: profissaoEnum.padeiro
    }

    console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos de idade e trabalha como ${pessoa1.profissao}.`)
    console.log(`${pessoa2.nome} tem ${pessoa2.idade} anos de idade e trabalha como ${pessoa2.profissao}.`)
    console.log(`${pessoa3.nome} tem ${pessoa3.idade} anos de idade e trabalha como ${pessoa3.profissao}.`)
    console.log(`${pessoa4.nome} tem ${pessoa4.idade} anos de idade e trabalha como ${pessoa4.profissao}.`)
})()