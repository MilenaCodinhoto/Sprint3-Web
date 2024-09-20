const params = new URLSearchParams(window.location.search);
const id = params.get('id')

const getInfoCarro = () => {
    const infoCarro = carros.find(carro => carro.id == id)

    document.getElementById('modelo').textContent = infoCarro.nomeModelo
    document.getElementById('velocidade').textContent = infoCarro.velocidadeAtual
    document.getElementById('potencia').textContent = infoCarro.potenciaMaxima
    document.getElementById('capacidade').textContent = infoCarro.capacidadeBateria
    document.getElementById('temperatura').textContent = infoCarro.temperaturaBateria
    document.getElementById('consumo').textContent = infoCarro.consumoEnergia
    document.getElementById('peso').textContent = infoCarro.peso
}
getInfoCarro()