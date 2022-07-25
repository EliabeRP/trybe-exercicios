function count(num, array){
    let count=0

    for(item of array){
        if(item === num){
            count+=1
        }
    }

    return count;
}

function apareceMais(array){
    let result = Infinity; 

    for(num of array){
        if(count(num, array) > count(result, array)){
            result = num;
        }
    }

    return result;
}

arr = [2, 3, 2, 5, 8, 2, 3];

console.log(apareceMais(arr))