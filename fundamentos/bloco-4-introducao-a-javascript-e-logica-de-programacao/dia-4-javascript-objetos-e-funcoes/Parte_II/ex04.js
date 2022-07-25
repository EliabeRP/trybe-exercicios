function achaMaior(array){
    let maior=''

    for(name of array){
     if(name.length > maior.length){
         maior = name
     }
    }
 
    return maior
 }
 
 arr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
 
 console.log(achaMaior(arr))