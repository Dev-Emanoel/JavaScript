function Square(){
    this.squareArray = []
}

Square.prototype.multiply = function (arr) {
    arr.forEach(function(value){
        this.squareArray.push(value*value)
    }, this)
}
const obj = new Square()
obj.multiply([2, 5, 9])
console.log(obj.squareArray)