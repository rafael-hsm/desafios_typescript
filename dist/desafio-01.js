"use strict";
// DESAFIO 01
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";
// Resposta
console.log("Desafio - 01");
let employee = {
    code: 1,
    name: "Nome"
};
console.log(employee.code = 10);
console.log(employee.name = "John");
// Também podemos ser mais explícitos
let employee2 = {
    code: 2,
    name: "Nome2"
};
console.log(employee2.code = 11);
console.log(employee2.name = "Travolta");
console.log("### FIM ###");
