let peca = "TORRE"

peca = peca.toLowerCase()



switch (peca){
    case "bispo":
        console.log("diagonais")
        break;
    case "cavalo":
        console.log("L")
        break;
    case "peão":
        console.log("1 ou 2 casas pra frente(no primeiro movimento), 1 casa pra frente a partir do segundo movimento, uma casa na diagonal pra frente para capturar")
        break;
    case "torre":
        console.log("Linha ou coluna")
        break;
    case "rei":
        console.log("Uma casa em qualquer direção")
        break;
    case "torre":
        console.log("Quantas casas quizer em qualquer direção")
        break;
    default:
        console.log("Sa peça ae não existe")
}