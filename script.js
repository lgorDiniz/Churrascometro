let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function Calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = CarnePP(duracao) * adultos + (CarnePP(duracao)/2 * criancas);
    let qtdTotalCerveja = CervejaPP(duracao) * adultos;
    let qtdTotalBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao)/2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Garrafas de Bebidas</p>`;
}

function CarnePP(duracao){
    if(duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function CervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function BebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}