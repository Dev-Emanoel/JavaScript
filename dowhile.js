const minhaMochila =[
    'Notebook',
    'Documentos',
    'mouse sem fio',
    'escova de dentes',
    'perfume',
    'alcool gel',
    'chocolate'
]

let index = 0
do {
    console.log(`${index + 1}. ${minhaMochila[index]}`)
    index++
} while (index < minhaMochila.length)