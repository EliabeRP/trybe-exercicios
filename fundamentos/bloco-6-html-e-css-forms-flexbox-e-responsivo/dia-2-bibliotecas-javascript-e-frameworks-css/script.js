const botaoEnviar = document.getElementById('enviar');

botaoEnviar.addEventListener('click', (event) => {
    event.preventDefault();
})

const botaoLimpar = document.getElementById('limpar');

botaoLimpar.addEventListener('click', (event) => {
    let form = document.getElementById('form');
    let nome = form.nome.value

    let confirma = confirm('Deseja mesmo apagar os dados adicionados no formulário?')
    if(confirma){
        form.reset()
        form.nome.focus()
    }
})