const verCarro = (carro) => {
    const id = carro.getAttribute('data-id')

    window.location.href = `./carro.html?id=${id}`
}

const verCorrida = () => {
    window.location.href = './corrida.html'
}