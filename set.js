//Set é o novo tipo de objeto no ES6 que permite criar coleções de valores exclusivos.
const ASet = new Set()

ASet.add('Cream')
ASet.add({
    name:'Emanoel Antonio',
    designation: 'Web Developer And Author'
})

ASet.add('2')
console.log(ASet)

ASet.delete('2')
console.log(ASet)