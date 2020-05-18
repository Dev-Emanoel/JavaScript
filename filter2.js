let products = [
    {nome:'Windows', company:'Microsoft'},
    {nome:'Mac', company:'Apple'},
    {nome:'Xbox', company:'Microsoft'},
    {nome:'Iphone', company:'Apple'}
]

let digitalGoods = products.filter(function(product){
    return product.company == 'Microsoft'
})

console.log(digitalGoods)