const valorVenda=200.00, custo=100.00;

if(valorVenda < 0 || custo < 0){
    console.log("Erro")
}else{
    custoTotal = custo + ((custo*20)/100)
    lucro = valorVenda - custoTotal

    console.log(`O lucro é de ${lucro}`)
}