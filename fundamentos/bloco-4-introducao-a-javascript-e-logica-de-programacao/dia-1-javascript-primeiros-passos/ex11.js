const salarioBruto = 3000.00;

let salarioLiquido, inss, ir;

if(salarioBruto <= 1556.94){
    inss = (salarioBruto*8)/100
}else if(salarioBruto <=2594.92){
    inss = (salarioBruto*9)/100
}else if(salarioBruto <=5189.82){
    inss = (salarioBruto*11)/100
}else{
    inss = 570.88
}

if(salarioBruto-inss <= 1903.98){
    ir = 0
}else if(salarioBruto-inss <=2826.65){
    ir = ((salarioBruto-inss)*7.5)/100 - 142.80
}else if(salarioBruto-inss <=3751.05){
    ir = ((salarioBruto-inss)*15)/100 - 354.80
}else if(salarioBruto<=4664.68){
    ir = ((salarioBruto-inss)*22.5)/100 - 636.13
}

salarioLiquido = salarioBruto - (inss+ir);

console.log(inss)
console.log(ir)
console.log(salarioLiquido)