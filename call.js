/*O método call chama uma função com um determinado valor e
argumentos fornecidos individualmente.*/

let name = {
    firstName: 'Emanoel',
    lastName: 'Antonio',
}

let printfullName = function(cidadeNatal){
    console.log(`${this.firstName} ${this.lastName}, 
        Cidade Natal:  
        ${cidadeNatal}`)
}

let name2 = {
    firstName: 'Lucas',
    lastName: 'Emmanuel',
}

printfullName.call(name2, 'Jaboatão')
printfullName.call(name, "Cabo")