let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menor;

for(let i=0; i<numbers.length; i+=1){
    if(i==0){
        menor = numbers[i]
    }else if(numbers[i] < menor){
        menor = numbers[i]
    }
}

console.log(menor)