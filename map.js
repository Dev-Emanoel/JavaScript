const temperaturaCelsius = [0, 22, 31, 40, 45, 12, 3]
const toFarenheit = value => ((value * 9) / 5) + 32
const temperaturaFarenheit = temperaturaCelsius.map(toFarenheit)

console.log(temperaturaCelsius)
console.log(temperaturaFarenheit)
