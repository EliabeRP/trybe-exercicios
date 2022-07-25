function achaMenor(array){
    let menor=Infinity
    let result;
 
    for(num of array){
     if(num < menor){
         menor = num
         result = array.indexOf(num)
     }
    }
 
    return result
 }
 
 arr = [2, 4, 6, 7, 10, 0, -3]
 
 console.log(achaMenor(arr))