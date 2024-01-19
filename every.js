const idadefamilia = [
    { nome: 'Priscila', idade: 31 },
    { nome: 'Emanoel', idade: 38 },
    { nome: 'Lívia', idade: 13 },
    { nome: 'Lucas', idade: 3 },

]
const ehAdulto = valor => valor.idade >= 18
const somenteAdulto = idadefamilia.every(ehAdulto)
console.log(somenteAdulto)