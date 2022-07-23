let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior="", menor="";



for(let i=0; i<array.length; i+=1){
    if(i==0){
        menor = array[i]
    }else if(array[i].length < menor.length){
        menor = array[i]
    }

    if(array[i].length > maior.length){
        maior = array[i];
    }
}

console.log(`Maior: ${maior}\nMenor: ${menor}`)