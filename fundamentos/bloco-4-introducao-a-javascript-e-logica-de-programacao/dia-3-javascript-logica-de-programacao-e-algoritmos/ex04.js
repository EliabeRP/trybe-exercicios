let maior=0, primo=true;

for(let i=2; i<=50; i+=1){
    for(let j=2; j<i; j+=1){
        if(i%j==0){
            primo=false;
            break;
        }
    }

    if(primo){
        maior=i;
    }else{
        primo=true;
    }
}


console.log(maior)