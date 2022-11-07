// Carne - 400 gr por pessoa + 6 horas - 650
// Cerveja- 1200 ml por Pessoa + 6 - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// crianças valem por 0,5\\


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao= document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculcando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

   resultado.innerHTML =  `<p>${qdtTotalCarne}g de Carne` 
   resultado.innerHTML +=  `<p>${Math.ceil(qdtTotalCerveja/350)} Latas de Cerveja de 350ml`
   resultado.innerHTML +=  `<p>${Math.ceil(qdtTotalBebidas/2000)} Refri 2 litros`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}