const sobremesas = [
    {
        nome: 'pudim',
        diet: false,
    },
    {
        nome: 'gelatina',
        diet: false,
    },
    {
        nome: 'bolo de chocolate',
        diet: true,
    },
    {
        nome: 'pavê',
        diet: false,
    },
]

const idDiet = item => item.diet
const sobremesa = sobremesas.find(idDiet)
console.log(sobremesa)