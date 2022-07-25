function ehfinal(str, strend){
    let ehfinal = true;
    let pos = str.length-1

    for(let i=strend.length-1; i>=0; i-=1){

        if(strend[i] != str[pos]){
            ehfinal = false
            break;
        }

        pos-=1
    }

    return ehfinal;
}

console.log(ehfinal('joaofernando', 'fernan'))