let inputHomem = document.getElementById('homem')
let inputMulher = document.getElementById('mulher')
let inputCrianca = document.getElementById('crianca')
let inputDuracao = document.getElementById('duracao')
let resultado = document.getElementById('resultado')

function carnePH(duracao){
    if(duracao >= 6){
        return 600
    }else{
        return 450
    }
}
function carnePM(duracao){
    if(duracao >= 6){
        return 450
    }else{
        return 300
    }
}
function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000
    }else{
        return 1200
    }
}
function bebidaPP(duracao){
    if(duracao >=6){
        return 1500
    }else{
        return 1000
    }
}

function calcular(){
    console.log('Calculando...');

    let homem = inputHomem.value
    let mulher = inputMulher.value
    let crianca = inputCrianca.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePH(duracao) * homem + carnePM(duracao) * mulher + (carnePH(duracao)/2*crianca)
    let qtdTotalCerveja = cervejaPP(duracao)*homem + cervejaPP(duracao)*mulher
    let qtdTotalBebida = bebidaPP(duracao) * homem + bebidaPP(duracao) * mulher + (bebidaPP(duracao)/2*crianca)

    resultado.innerHTML = `<h3 class='result-info'>Você vai precisar de:</h3>`

    resultado.innerHTML += `<div class='result-block-meet'>
                                <img src='./img/carne.svg'>
                                <p>${qtdTotalCarne/1000} Kg. de carne.</p>
                            </div>`
    
    resultado.innerHTML += `<div class='result-block-bear'>
                                <img src='./img/cerveja.svg'>
                                <p>${Math.ceil(qtdTotalCerveja/355)} Latas de cerveja.</p>
                            </div>`
    
    resultado.innerHTML += `<div class='result-block-soda'>
                                <img src='./img/refri.svg'>
                                <p>${qtdTotalBebida/1000} L. de bebida não alcóolicas.</p>
                            </div>`
}