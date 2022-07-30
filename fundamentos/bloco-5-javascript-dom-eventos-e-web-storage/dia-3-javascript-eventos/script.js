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