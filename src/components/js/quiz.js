// Função para pegar valores aleatórios de um array
function getValoresAleatorios(array, quantidade) {
    const indicesAleatorios = getPerguntas(array, quantidade);
    const newArray = indicesAleatorios.map(indice => array[indice]);
    return newArray;
}

// Função para pegar índices aleatórios de um array
function getPerguntas(array, quantidade) {
    const indices = [];
    const tamanhoArray = array.length;

    // Verificar se a quantidade solicitada é maior que o tamanho do array
    quantidade = Math.min(quantidade, tamanhoArray);

    while (indices.length < quantidade) {
        const indiceAleatorio = Math.floor(Math.random() * tamanhoArray);

        // Verificar se o índice já foi selecionado antes para evitar repetições
        if (!indices.includes(indiceAleatorio)) {
            indices.push(indiceAleatorio);
        }
    }

    return indices;
}

const correcao = [
    {
        questao: 1,
        valor: null,
        resposta: ''
    },
    {
        questao: 2,
        valor: null,
        resposta: ''
    },
    {
        questao: 3,
        valor: null,
        resposta: ''
    }
]

async function showQuestions(perguntasArray) {
    let acertos = 0
    for (let index = 0; index < perguntasArray.length; index++) {
        const pergunta = perguntasArray[index];

        const result = await Swal.fire({
            title: pergunta.pergunta,
            color: '#1a1a1a',
            iconColor: '#0054ff',
            icon: "question",
            showDenyButton: true,
            confirmButtonColor: "#00005a",
            denyButtonColor: "#00005a",
            confirmButtonText: pergunta.alternativas[0].alternativa,
            denyButtonText: pergunta.alternativas[1].alternativa,
        });

        if (result.isConfirmed) {
            if (pergunta.alternativas[0].valor) {
                correcao[index].valor = pergunta.alternativas[0].valor;
                correcao[index].resposta = pergunta.alternativas[0].alternativa;
                acertos += 10;
            } else {
                correcao[index].valor = false;
                correcao[index].resposta = pergunta.alternativas[1].alternativa;
            }
        } else if (result.isDenied) {
            if (pergunta.alternativas[1].valor) {
                correcao[index].valor = pergunta.alternativas[1].valor;
                correcao[index].resposta = pergunta.alternativas[1].alternativa;
                acertos += 10;
            } else {
                correcao[index].valor = false
                correcao[index].resposta = pergunta.alternativas[0].alternativa;
            }
        } else {
            if (pergunta.alternativas[0].valor) {
                correcao[index].resposta = pergunta.alternativas[0].alternativa;
            } else {
                correcao[index].resposta = pergunta.alternativas[1].alternativa;
            }
        }
    }

    Swal.fire({
        title: "Quiz finalizado as resposta apareção abaixo!",
        color: '#1a1a1a',
        iconColor: '#0054ff',
        icon: "success",
        showDenyButton: false,
        confirmButtonColor: "#00005a",
        confirmButtonText: "OK",
    })

    gerarResposta()

    return acertos
}

const criarRespota = (questao) => {
    const resposta = document.createElement('p')
    if (questao.valor == null) {
        resposta.textContent = `${questao.questao}. Questão não foi respondida - Correta: ${questao.resposta}`
    } else {
        resposta.textContent = `${questao.questao}. ${questao.valor ? 'Acertou - ' + questao.resposta : 'Errou - ' + questao.resposta}`
    }

    return resposta
}

const gerarResposta = () => {
    const boxQuestoes = document.getElementById('box-questoes')
    const listaResposta = correcao.map(criarRespota)
    boxQuestoes.replaceChildren(...listaResposta)
}

const quiz = (e) => {
    e.preventDefault()

    let perguntasArray = getValoresAleatorios(perguntas, 3)

    let acertos = showQuestions(perguntasArray)
}


