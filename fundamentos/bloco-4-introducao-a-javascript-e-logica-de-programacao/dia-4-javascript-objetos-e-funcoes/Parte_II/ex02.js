function achaMaior(array){
   let maior=0
   let result;

   for(num of array){
    if(num > maior){
        maior = num
        result = array.indexOf(num)
    }
   }

   return result
}

arr = [2, 3, 6, 7, 10, 1]

console.log(achaMaior(arr))