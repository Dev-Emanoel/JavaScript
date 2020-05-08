/*const numeros = [12, 24, 34, 2, 567, 2, 6, 88, 3, 5 , 7, 754]
const par = n => n % 2 == 0
const numerosPar = numeros.filter(par)

console.log(`Arrays com numeros pares: ${numerosPar}`)
*/
const videoResolutions = [
    ['QVGA', '320x240', '4:3'],
    ['VGA', '800x480', '4:3'],
    ['VGA', '720X480', '4:3'],
    ['SVGA', '800X480', '4:3'],
    ['XGA', '1024X768', '16:9'],
    ['WXGA - HD¹/720', '1280X720', '16:9'],
    ['WXGA¹', '1366X900', '16:9'],
    ['WXGA +', '1440X900', '16:10(8:5)'],
    ['UXGA', '1600X1050', '16:9'],
    ['UXGA++', '1680X1050', '16:10(8:5)'],
    ['Full HD / 1080P', '1980X1080', '16:9'],
    ['Full HD Ultra Wide[1]', '2560x1080', '21:9'],
    ['WQHD', '2560X1440', '16:9'],
    ['4K Ultra HD / 2160P', '3840X2160', '16:9'],
    ['8K UHDTV / 4320P', '7680X4320', '16:9'],
    ['10K UHDTV', '10240X4320', '21:9'],
    ['10K UHDTV', '10328X7760', '4:3'],

]

const resolution16_9 = videoResolutions.filter((value) => {
    if (value[2] == '16:9') return value
})

console.log(resolution16_9)
