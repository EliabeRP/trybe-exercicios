const ang1=30, ang2=60, ang3=90;



if(ang1<0 || ang2<0 || ang3<0 || isNaN(ang1) || isNaN(ang3) || isNaN(ang3)){
    console.log("Erro")
}else{
    if(ang1+ang2+ang3 == 180){
        console.log(true)
    }else{
        console.log(false)
    }
}
 


