function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  let days = document.querySelector('#days');

  for (let day of decemberDaysList) {
    let element = document.createElement('li');
    element.innerText = day;
    element.className = 'day';
    if ([24, 25, 31].includes(day)) {
        element.className += ' holiday';
    }
    if ([4, 11, 18, 25].includes(day)){
        element.className += ' friday'
    }
    days.appendChild(element);

  }

  function criaBotaoFeriados(string) {
    let parent = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.setAttribute('id', 'btn-holiday');
    button.innerText = string;
    parent.appendChild(button);
  }

  criaBotaoFeriados('Feriados')

  let feriado = document.querySelector('#btn-holiday');

  feriado.addEventListener('click', ()=>{
    let feriados = document.querySelectorAll('.holiday');

    for (let feriado of feriados){
        feriado.style.backgroundColor = 'blue'
    }
  })
  
  function criaBotaoSextaFeira(string) {
    let parent = document.querySelector('.buttons-container');
    let button = document.createElement('button');
    button.setAttribute('id', 'btn-friday');
    button.innerText = string;
    parent.appendChild(button);
  }

  criaBotaoSextaFeira('Sexta-feira')

  let sexta = document.querySelector('#btn-friday')

  sexta.addEventListener('click', ()=>{
    let sextas = document.querySelectorAll('.friday');

    for (let day of sextas){
        day.innerText = 'SEXTA-FEIRA'
    }
  })

  days.addEventListener('mouseover', (event)=>{
    let day = event.target;
    day.style.transform = 'scale(1.25)' 
  })

  days.addEventListener('mouseout', (event)=>{
    let day = event.target;
    day.style.transform = 'scale(1)' 
  })

  function criaTarefa(string) {
    let parent = document.querySelector('.my-tasks')
    let span = document.createElement('span')
    span.innerText = string

    parent.appendChild(span)
  }

  function CorTarefa(cor) {
    let parent = document.querySelector('.my-tasks')
    let div = document.createElement('div')
    div.className = 'task'
    div.style.backgroundColor = cor

    parent.appendChild(div)
  }

  criaTarefa('Cozinhar')
  CorTarefa('green')

  task = document.querySelector('.my-tasks')

  task.addEventListener('click', (event)=>{
    let element = event.target;
    if (element.className === 'task'){
      element.className = 'task selected'
    } else if (element.className === 'task selected'){
      element.className = 'task'
    }
  })

  days.addEventListener('click', (event)=>{
    let day = event.target;
    let task = document.querySelector('.selected')
    let color = task.style.backgroundColor;

    day.style.backgroundColor = color;
  })