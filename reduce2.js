const videos = [
    {
        id: 'gwqeqgdvjtu',
        title: 'Teclado Mecânico é melhor pra Programação? + Desafio de Yutubers Tech // Vlog #117',
        views: 37298,
        likes: 1000
    },
    {
        id: 'ewewgqrvw',
        title: 'Python na Prática fazendo Web Scraping (da JavaScrip dinâmico) // Mão no Código #28',
        views: 22510,
        likes: 900
    },
    {
        id: 'xvdvafeqeg',
        title: 'As TOP 7 Profissões de Tecnologia do Futuro (O PROGRAMADOR VAI ACABAR?) // Vlog #112',
        views: 34732,
        likes: 10000
    },
]
const totalViews = videos.reduce((sum, video) => {
    sum.views += video.views
    sum.likes += video.likes
    return sum
}, {views:0,likes:0})
console.log(totalViews)