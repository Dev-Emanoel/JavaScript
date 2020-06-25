/*let boundFunc = func.bind(context);

Em JavaScript, a ligação de função ocorre usando o método Bind().
 por esse método, podemos vincular um objeto a uma função comum, 
 para que a função produza resultados diferentes quando necessário.*/

 let printfullName = function(cidadenatal, cidadeatual){
     console.log(this.firstName 
        + " " + this.lastName 
        + "," + " Exemplo de cidade natal: "
        + cidadenatal
        + "," 
        + " cidade atual: "
        + cidadeatual)
}
 let name2 = {
    firstName: 'Emanoel',
    lastName: 'Antonio',
}
let newPrintMethod  = printfullName.bind(name2, "Recife", "Cabo")
newPrintMethod()