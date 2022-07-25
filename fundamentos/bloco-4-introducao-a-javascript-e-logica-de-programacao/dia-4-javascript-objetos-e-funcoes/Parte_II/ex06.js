function somatorio(num){
    soma=0;

    for(let i=1; i<=num; i+=1){
        soma += i;
    }

    return soma;
}

console.log(somatorio(5))