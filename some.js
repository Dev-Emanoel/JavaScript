const idadefamilia = [{
    nome: 'Priscila',
    idade: 29
},
{   nome: 'Emanoel',
    idade: 35
},
{
    nome: 'Lívia',
    idade: 10
},

]
const ehAdulto = valor => valor.idade >= 18
const temAdulto = idadefamilia.some(ehAdulto)
console.log(temAdulto)