if (localStorage.count === undefined){
    localStorage.setItem('color', 'white');
} 

let darkMode = document.getElementById('dark');
let lightMode = document.getElementById('light');

darkMode.addEventListener('click', ()=>{
    localStorage.setItem('color', 'black')
    document.body.style.backgroundColor = localStorage.color
})

lightMode.addEventListener('click', ()=>{
    localStorage.setItem('color', 'white')
    document.body.style.backgroundColor = localStorage.color
})

let corDoTexto = document.getElementById('textColor')

corDoTexto.addEventListener('click', ()=>{
    let valor = corDoTexto.value
    localStorage.setItem('textColor', valor)
    document.body.style.color = localStorage.textColor
})


let fontSize = document.getElementById('fontSize')

fontSize.addEventListener('input', ()=>{
    let valor = fontSize.value
    localStorage.setItem('fontSize', valor)
    document.body.style.fontSize = localStorage.fontSize
})

let spacing = document.getElementById('spacing')


spacing.addEventListener('input', ()=>{
    let valor = spacing.value
    localStorage.setItem('spacing', valor)
    document.body.style.lineHeight = localStorage.spacing

})


let fontFamily = document.getElementById('fontFamily')

fontFamily.addEventListener('click', ()=>{
    let valor = fontFamily.value
    localStorage.setItem('fontFamily', valor)
    document.body.style.fontFamily = localStorage.fontFamily
})

