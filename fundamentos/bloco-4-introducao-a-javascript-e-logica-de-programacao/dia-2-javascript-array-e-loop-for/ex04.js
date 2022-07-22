let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma=0, media;

for(number of numbers){
    soma += number;
}

media = soma/numbers.length;

if(media > 20){
    console.log(`${media}\nValor maior que 20`);
}else{
    console.log(`${media}\nValor menor ou igual a 20`);
}