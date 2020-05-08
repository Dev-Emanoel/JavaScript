const videos = [
    {
        id: 'gwqeqgdvjtu',
        title: 'Teclado Mecânico é melhor pra Programação? + Desafio de Yutubers Tech // Vlog #117',
        views: 37298
    },
    {
        id: 'ewewgqrvw',
        title: 'Python na Prática fazendo Web Scraping (da JavaScrip dinâmico) // Mão no Código #28',
        views: 22510
    },
    {
        id: 'xvdvafeqeg',
        title: 'As TOP 7 Profissões de Tecnologia do Futuro (O PROGRAMADOR VAI ACABAR?) // Vlog #112',
        views: 34732
    },
]
const totalViews = videos.reduce((sum, video) => {
    return sum + video.views
}, 0)
console.log(totalViews)