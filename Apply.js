/*Da mesma forma que o método call (), o primeiro parâmetro 
no método apply () define o valor "this", que é o objeto sobre
 o qual a função é chamada. Nesse caso, é o objeto "obj" acima.
 A única diferença de apply () com o método call () é que o 
 segundo parâmetro do método apply () aceita os argumentos para
 a função real como uma matriz.*/

let name = {
    firstName: 'Emanoel',
    lastName: 'Antonio',
}

let printfullName = function(cidadeNatal, cidadeatual){
    console.log(this.firstName 
        + " " + this.lastName 
        + "," 
        + " Cidade Natal: " 
        + cidadeNatal
        + ","
        +"cidada atual: "
        + cidadeatual)
}

let name2 = {
    firstName: 'Lucas',
    lastName: 'Emmanuel',
}

printfullName.apply(name2, ["Recife ", "Jaboatao",])
printfullName.apply(name, ["Prazeres ", "Cabo"],)