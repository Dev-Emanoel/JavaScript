const minhaMochila =[
    'Notebook',
    'Documentos',
    'mouse sem fio',
    'escova de dentes',
    'perfume',
    'alcool em gel',
    'chocolate'
]
for (let index = 0; index < minhaMochila.length; index++) {
    console.log(`${index+1}.${minhaMochila[index]}`) 
    // if (minhaMochila[index]== 'escova de dentes') break
    //parar de procurar quando encontrar a escova de dentes.
}

// for (let index = 0; index < minhaMochila.length; index++) { 
//     if (minhaMochila[index]== 'escova de dentes') continue
//     console.log(`${index+1}.${minhaMochila[index]}`)
//     //quando ele passar pela escova de dentes ele força a continuação sem passar pelo console.
// }