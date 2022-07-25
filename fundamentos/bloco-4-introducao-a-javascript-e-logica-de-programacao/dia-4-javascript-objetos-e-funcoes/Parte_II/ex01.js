//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function ehPalindromo(string){
    reverse = string.split('').reverse().join('');

    if(string === reverse){
        return true
    }else {
        return false
    }
}

console.log(ehPalindromo('arara'))