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



