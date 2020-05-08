const minhaMochila =[
    'Notebook',
    'Documentos',
    'mouse sem fio',
    'escova de dentes',
    'perfume',
    'alcool em gel'
]
for (let index = 0; index < minhaMochila.length; index++) {
    console.log(`${index+1}.${minhaMochila[index]}`) 
    //if (minhaMochila[index]== 'escova de dentes') break
    //parar de procurar quando encontrar a escova de dentes.
}