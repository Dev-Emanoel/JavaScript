//É um método embutido que classifica os itens da matriz em ordem alfabética.
let stocks = [
    {
        type:"Apple", year:1975
    },
    {
        type:"Microsoft", year:1976
    },
    {
        type:"Amazon", year:1995
    }
]

let sortedDescStocks = stocks.sort((a, b) =>{
    return b.type - a.type
})

console.log(sortedDescStocks)