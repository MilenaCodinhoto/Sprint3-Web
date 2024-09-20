var carros = [
    {
        id: 1,
        nomeModelo: 'SPARK SRT05e (GEN2)',
        velocidadeAtual: '280 KM/h',
        potenciaMaxima: '250 kW',
        capacidadeBateria: '52 kWh',
        temperaturaBateria: '70°C',
        consumoEnergia: '0.85 kWh/volta',
        peso: '900 kg'
    },
    {
        id: 2,
        nomeModelo: 'SPARK SRT 01E (GEN1)',
        velocidadeAtual: '225 KM/h',
        potenciaMaxima: '200 kW',
        capacidadeBateria: '28 kWh',
        temperaturaBateria: '65°C',
        consumoEnergia: '1.25 kWh/volta',
        peso: '896 kg'
    },
    {
        id: 3,
        nomeModelo: 'AUDI E-TRON FE07',
        velocidadeAtual: '280 KM/h',
        potenciaMaxima: '250 kW',
        capacidadeBateria: '52 kWh',
        temperaturaBateria: '70°C',
        consumoEnergia: '0.85 kWh/volta',
        peso: '903 kg'
    },
    {
        id: 4,
        nomeModelo: 'JAGUAR I-TYPE 5',
        velocidadeAtual: '280 KM/h',
        potenciaMaxima: '250 kW',
        capacidadeBateria: '52 kWh',
        temperaturaBateria: '70°C',
        consumoEnergia: '0.85 kWh/volta',
        peso: '906 kg'
    },
    {
        id: 5,
        nomeModelo: 'NISSAN EDAMS IM03',
        velocidadeAtual: '280 KM/h',
        potenciaMaxima: '250 kW',
        capacidadeBateria: '52 kWh',
        temperaturaBateria: '70°C',
        consumoEnergia: '0.85 kWh/volta',
        peso: '905 kg'
    }
];


var perguntas = [
    {
        pergunta: 'Qual é a sigla da Fórmula E?',
        alternativas: [
            { alternativa: 'F1E', valor: false },
            { alternativa: 'FE', valor: true }
        ]
    },
    {
        pergunta: 'Em que ano a Fórmula E realizou sua primeira temporada?',
        alternativas: [
            { alternativa: '2013-2014', valor: true },
            { alternativa: '2014-2015', valor: false }
        ]
    },
    {
        pergunta: 'Qual é a duração aproximada de uma corrida na Fórmula E?',
        alternativas: [
            { alternativa: '1 hora', valor: false },
            { alternativa: '45 minutos', valor: true }
        ]
    },
    {
        pergunta: 'Qual é a velocidade máxima dos carros da Fórmula E?',
        alternativas: [
            { alternativa: '220 km/h', valor: false },
            { alternativa: '250 km/h', valor: true }
        ]
    },
    {
        pergunta: 'Qual é a marca de pneus oficial da Fórmula E?',
        alternativas: [
            { alternativa: 'Michelin', valor: true },
            { alternativa: 'Pirelli', valor: false }
        ]
    },
    {
        pergunta: 'Quantos títulos de pilotos já foram disputados na Fórmula E até o momento?',
        alternativas: [
            { alternativa: '6', valor: false },
            { alternativa: '7', valor: true }
        ]
    },
    {
        pergunta: 'Qual é o nome do circuito de rua em Nova York, onde a Fórmula E realiza uma corrida?',
        alternativas: [
            { alternativa: 'Brooklyn Street Circuit', valor: true },
            { alternativa: 'Manhattan Street Circuit', valor: false }
        ]
    },
    {
        pergunta: 'Quem é o atual campeão de pilotos na Fórmula E?',
        alternativas: [
            { alternativa: 'Jean-Éric Vergne', valor: false },
            { alternativa: 'António Félix da Costa', valor: true }
        ]
    },
    {
        pergunta: 'Qual é a nacionalidade da equipe DS Techeetah?',
        alternativas: [
            { alternativa: 'Alemã', valor: false },
            { alternativa: 'Francesa', valor: true }
        ]
    },
    {
        pergunta: 'Qual é a potência máxima do motor dos carros da Fórmula E durante as corridas?',
        alternativas: [
            { alternativa: '200 kW', valor: false },
            { alternativa: '250 kW', valor: true }
        ]
    },
    {
        pergunta: 'Qual é o sistema de pontuação utilizado na Fórmula E para a corrida e a pole position?',
        alternativas: [
            { alternativa: '30 pontos para a vitória, 3 pontos para a pole position', valor: true },
            { alternativa: '25 pontos para a vitória, 3 pontos para a pole position', valor: false }
        ]
    },
    {
        pergunta: 'Qual é o nome do troféu dado ao vencedor do campeonato de equipes na Fórmula E?',
        alternativas: [
            { alternativa: 'Electric Cup', valor: false },
            { alternativa: 'E-Trophy', valor: true }
        ]
    },
    {
        pergunta: 'Qual é o circuito de rua em Mônaco que faz parte do calendário da Fórmula E?',
        alternativas: [
            { alternativa: 'Circuito da Riviera', valor: false },
            { alternativa: 'Circuito de Montecarlo', valor: true }
        ]
    },
    {
        pergunta: 'Quem foi o primeiro piloto a vencer o campeonato de pilotos da Fórmula E?',
        alternativas: [
            { alternativa: 'Lucas di Grassi', valor: false },
            { alternativa: 'Nelson Piquet Jr.', valor: true }
        ]
    },
    {
        pergunta: 'Quantas equipes competiram na primeira temporada da Fórmula E?',
        alternativas: [
            { alternativa: '12', valor: true },
            { alternativa: '10', valor: false }
        ]
    },
    {
        pergunta: 'Qual é o sistema de recarga utilizado pelos carros da Fórmula E durante as corridas?',
        alternativas: [
            { alternativa: 'Recarga por indução', valor: false },
            { alternativa: 'Troca de carro', valor: true }
        ]
    },
    {
        pergunta: 'Qual é o país que mais sediou corridas da Fórmula E até o momento?',
        alternativas: [
            { alternativa: 'Alemanha', valor: false },
            { alternativa: 'Estados Unidos', valor: true }
        ]
    },
    {
        pergunta: 'Qual é o ex-piloto de Fórmula 1 que fundou a equipe Venturi Racing na Fórmula E?',
        alternativas: [
            { alternativa: 'Alain Prost', valor: false },
            { alternativa: 'Gildo Pastor', valor: true }
        ]
    },
    {
        pergunta: 'Qual é o nome do sistema de regeneração de energia usado pelos carros da Fórmula E?',
        alternativas: [
            { alternativa: 'Sistema de Recuperação de Energia Cinética (KERS)', valor: false },
            { alternativa: 'Sistema de Recuperação de Energia de Travagem (BERS)', valor: true }
        ]
    },
    {
        pergunta: 'Qual é o nome do prêmio dado ao piloto que faz a volta mais rápida durante a corrida na Fórmula E?',
        alternativas: [
            { alternativa: 'Speed Trophy', valor: false },
            { alternativa: 'TAG Heuer Fastest Lap Award', valor: true }
        ]
    }
];
