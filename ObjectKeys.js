/*É uma função embutida que retorna uma matriz dos nomes de propriedades de objetos
 fornecidos na mesma ordem em que obtemos um loop padrão.*/
 let obj = {
     name: 'Emanoel',
     education: 'IT Developer'
}
console.log(Object.keys(obj));

let objArr = [
    'apple',
    'microsoft',
    'amazon',
    'alphabet',
    'tencent',
    'alibaba'
]

console.log(Object.keys(objArr))

let myObj = Object.create({},{
    getName: {
        value: function () {return this.name}
    }
})

myObj.name = 'Emanoel'
console.log(Object.keys(myObj))