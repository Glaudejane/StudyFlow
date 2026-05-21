// lessonsData.js

export const lessonsData = {
    // ==========================================
    // MÓDULO 1: O PRESENTE E O PASSADO (SEMANAS 1 - 3)
    // ==========================================

    semana_1: {
        id: "semana_1",
        module: "Módulo 1: O Presente e o Passado",
        title: "Semana 1: Present Continuous vs. Present Simple",
        subtitle: "Status Atual vs. Instruções do Sistema",
        content:
            "O Present Continuous fala do AGORA (am/is/are + -ING). O Present Simple fala de rotinas, fatos gerais e configurações estáveis. Na programação, essa diferença é usada para separar o estado atual da aplicação das regras fixas do sistema.",
        iaInsight:
            "💡 Conexão IA:\n• Use Continuous para relatar um bug que está acontecendo em tempo real:\n'My React Native app is crashing right now.'\n• Use Simple para dar instruções fixas de comportamento (System Instructions) para a IA:\n'You always write clean code and use TypeScript.'",
        quiz: {
            question:
                "Imagine que você está definindo a persona de um assistente de IA. Qual comando define uma regra geral e estável no Present Simple?",
            options: [
                { id: "A", text: "You are helping me build a database right now." },
                { id: "B", text: "You act as a senior developer and explain concepts simply." },
                { id: "C", text: "You explained the bug perfectly yesterday." },
                { id: "D", text: "You will write the documentation later." },
            ],
            correctId: "B",
            explanation:
                "Perfeito! 'You act' (você atua) e 'explain' (explica) estão no Present Simple, ideal para definir comportamentos permanentes e regras fixas para modelos de IA.",
        },
    },

    semana_2: {
        id: "semana_2",
        module: "Módulo 1: O Presente e o Passado",
        title: "Semana 2: Past Simple e Continuous",
        subtitle: "Análise de Logs e Histórico de Erros",
        content:
            "O Past Simple indica ações concluídas no passado (ex: crashed). O Past Continuous mostra ações que estavam acontecendo, em andamento, no passado (ex: was compiling). Usamos os dois juntos para dar um relatório detalhado de um bug para a Inteligência Artificial.",
        iaInsight:
            "💡 Conexão IA:\nPara que a IA entenda a causa raiz de um problema, recompile a linha do tempo combinando os dois tempos verbais:\n'The simulator crashed (Past Simple) while I was deploying (Past Continuous) the new screen.'",
        quiz: {
            question:
                "Como você estruturaria um prompt para a IA explicando que o banco de dados caiu exatamente no momento em que você estava testando as requisições da API?",
            options: [
                { id: "A", text: "The database drops while I test the API." },
                { id: "B", text: "The database will drop while I am testing the API." },
                { id: "C", text: "The database dropped while I was testing the API." },
                { id: "D", text: "The database is dropping while I tested the API." },
            ],
            correctId: "C",
            explanation:
                "Sensacional! 'Dropped' (ação pontual concluída) e 'was testing' (ação contínua que servia de plano de fundo) dão o cenário exato e profissional que a IA precisa para analisar o log.",
        },
    },

    semana_3: {
        id: "semana_3",
        module: "Módulo 1: O Presente e o Passado",
        title: "Semana 3: Have/Have got & Used to",
        subtitle: "Legados Técnicos vs. Recursos Atuais",
        content:
            "Usamos 'Have' ou 'Have got' para falar sobre recursos e características que o nosso projeto possui no presente. Já a estrutura 'Used to' serve para falar de hábitos ou estados passados que não existem mais (antigas arquiteturas ou ferramentas legadas).",
        iaInsight:
            "💡 Conexão IA:\nAo pedir para a IA refatorar um sistema antigo para uma tecnologia moderna, explique o cenário assim:\n'Our app used to use pure React Native, but now we have Expo SDK 51. Please update this component.'",
        quiz: {
            question:
                "Você precisa pedir para a IA atualizar uma função. Como você diz que costumava salvar dados na memória simples, mas agora o projeto tem suporte ao AsyncStorage?",
            options: [
                { id: "A", text: "We used to save data in memory, but now we have AsyncStorage support." },
                { id: "B", text: "We have data in memory, but now we used to support AsyncStorage." },
                { id: "C", text: "We are saving data in memory, but now we will have AsyncStorage." },
                { id: "D", text: "We used to saving data in memory, but now we have got AsyncStorage." },
            ],
            correctId: "A",
            explanation:
                "Excelente! 'We used to save' mostra o comportamento que ficou no passado, e 'now we have' traz o recurso disponível na atualidade.",
        },
    },
    // ==========================================
    // MÓDULO 2: A PONTE ENTRE PASSADO E PRESENTE (SEMANAS 4 - 7)
    // ==========================================

    semana_4: {
        id: "semana_4",
        module: "Módulo 2: A Ponte entre Passado e Presente",
        title: "Semana 4: Present Perfect (I have done)",
        subtitle: "Histórico de Commits e Deploys",
        content:
            "O Present Perfect (sujeito + have/has + verbo no particípio) conecta o passado com o presente. Usamos quando a ação aconteceu no passado, mas o resultado dela importa AGORA. No Git e em deploys, usamos o tempo todo para dizer o que já foi alterado no sistema.",
        iaInsight:
            "💡 Conexão IA:\nAo pedir para a IA analisar o estado do projeto após uma modificação, use o Present Perfect:\n'I have updated the navigation package, and now the application is throwing an error.' (Você atualizou no passado, mas o erro está acontecendo agora).",
        quiz: {
            question:
                "Qual das frases abaixo explica corretamente para a IA que você acabou de alterar uma variável e quer ver o impacto atual?",
            options: [
                { id: "A", text: "I change the variable yesterday and it breaks." },
                { id: "B", text: "I have changed the global variable, and the screen is not rendering." },
                { id: "C", text: "I am changing the variable tomorrow." },
                { id: "D", text: "I change already the variable." },
            ],
            correctId: "B",
            explanation:
                "Perfeito! 'I have changed' indica uma ação recém-concluída cujo resultado (a tela não renderizar) está afetando o seu presente.",
        },
    },

    semana_5: {
        id: "semana_5",
        module: "Módulo 2: A Ponte entre Passado e Presente",
        title: "Semana 5: Present Perfect Continuous",
        subtitle: "Processos em Execução Contínua",
        content:
            "O Present Perfect Continuous (have/has + been + verbo com -ING) fala de ações que começaram no passado e continuam acontecendo até o exato momento. Na TI, serve para descrever tarefas repetitivas, testes demorados ou loops de feedback que você está executando há algum tempo.",
        iaInsight:
            "💡 Conexão IA:\nUse essa estrutura para pedir otimização para a IA quando estiver preso em um problema persistente:\n'I have been trying to fix this memory leak for two hours. Can you review my code?'",
        quiz: {
            question:
                "Você está horas tentando rodar um script sem sucesso. Como dizer isso à IA usando o Present Perfect Continuous?",
            options: [
                { id: "A", text: "I am running this script since morning." },
                { id: "B", text: "I ran this script for hours today." },
                { id: "C", text: "I have been running this script for hours, but it keeps failing." },
                { id: "D", text: "I will be running this script." },
            ],
            correctId: "C",
            explanation:
                "Sensacional! 'I have been running' deixa claro para a IA que a ação começou atrás e se estendeu ininterruptamente até agora.",
        },
    },

    semana_6: {
        id: "semana_6",
        module: "Módulo 2: A Ponte entre Passado e Presente",
        title: "Semana 6: For / Since & Past Simple vs. Present Perfect",
        subtitle: "Logs Temporais e Diferenciação de Bugs",
        content:
            "Usamos 'For' para falar de duração (por 3 dias) e 'Since' para o ponto de partida (desde ontem). Além disso, se você disser QUANDO algo aconteceu (ex: 'yesterday'), use Past Simple. Se o tempo não importar ou for até o presente, use Present Perfect. A IA usa essas pistas para rastrear erros em servidores.",
        iaInsight:
            "💡 Conexão IA:\n• Tempo definido (Past Simple): 'The server crashed yesterday at 5 PM.'\n• Tempo indefinido/duração (Present Perfect): 'The server has been offline since last night.'",
        quiz: {
            question:
                "Você quer que a IA saiba que sua empresa usa o mesmo banco de dados desde 2022. Qual a forma correta?",
            options: [
                { id: "A", text: "We used this database for 2022." },
                { id: "B", text: "We have used this database since 2022." },
                { id: "C", text: "We are using this database for 2022." },
                { id: "D", text: "We have been use this database since 2022." },
            ],
            correctId: "B",
            explanation:
                "Excelente! 'Since 2022' marca o ponto inicial no passado de uma ação que permanece verdadeira no presente.",
        },
    },

    semana_7: {
        id: "semana_7",
        module: "Módulo 2: A Ponte entre Passado e Presente",
        title: "Semana 7: Past Perfect",
        subtitle: "O Passado do Passado e Logs Históricos",
        content:
            "O Past Perfect (had + particípio) serve para falar de uma ação que aconteceu NO PASSADO antes de OUTRA ação também no passado. Na computação, usamos isso para explicar para a IA a ordem cronológica de eventos interdependentes (ex: o que quebrou antes do sistema cair).",
        iaInsight:
            "💡 Conexão IA:\nPerfeito para relatar conflitos de dependências ou efeitos dominó:\n'Before I updated the project version, the team had already modified the configuration file.'",
        quiz: {
            question:
                "Como você explica para a IA que, antes de você rodar o comando de testes, alguém já tinha apagado a tabela?",
            options: [
                { id: "A", text: "Before I ran the tests, someone had deleted the table." },
                { id: "B", text: "Before I have run the tests, someone deletes the table." },
                { id: "C", text: "Someone deleted the table when I run the tests." },
                { id: "D", text: "I had run the tests before someone deletes the table." },
            ],
            correctId: "A",
            explanation:
                "Isso aí! 'Had deleted' aconteceu primeiro (Passado Perfeito), e depois você 'ran the tests' (Passado Simples). A ordem dos eventos ficou cristalina para a IA.",
        },
    },
    // ==========================================
    // MÓDULO 3: PLANEJANDO O FUTURO (SEMANAS 8 - 10)
    // ==========================================

    semana_8: {
        id: "semana_8",
        module: "Módulo 3: Planejando o Futuro",
        title: "Semana 8: Presente com ideia de Futuro & Going to",
        subtitle: "Prazos de Sprints e Planos Concretos",
        content:
            "Usamos o Present Continuous para compromissos futuros com data e hora já agendadas (ex: reuniões de Sprint). Já o 'Be going to' é usado para intenções e planos futuros que nós já decidimos fazer, ou para previsões baseadas em evidências claras no presente.",
        iaInsight:
            "💡 Conexão IA:\nAo organizar um cronograma com a IA, diferencie o que já está agendado rigidamente daquilo que é apenas um plano:\n• Agendado: 'We are launching the app next Monday.'\n• Plano/Intenção: 'I am going to refactor the database layout this week.'",
        quiz: {
            question:
                "Você quer dizer para a IA que sua equipe já agendou o deploy da API para amanhã e que, por isso, você vai preparar a documentação hoje. Qual frase está correta?",
            options: [
                { id: "A", text: "We deploy the API tomorrow and I will write documentation." },
                {
                    id: "B",
                    text: "We are deploying the API tomorrow, so I am going to prepare the documentation today.",
                },
                { id: "C", text: "We deployed the API tomorrow, so I write the documentation." },
                { id: "D", text: "We going to deploy the API tomorrow, so I deploying documentation." },
            ],
            correctId: "B",
            explanation:
                "Perfeito! 'We are deploying' indica o evento futuro que já está agendado de forma oficial, e 'I am going to prepare' expressa a sua intenção firme e planejada para o dia de hoje.",
        },
    },

    semana_9: {
        id: "semana_9",
        module: "Módulo 3: Planejando o Futuro",
        title: "Semana 9: Will e Shall",
        subtitle: "Lógica Condicional e Decisões Imediatas",
        content:
            "Usamos o 'Will' para decisões tomadas no exato momento da fala (ex: quando um bug surge e você decide agir na hora) ou para previsões sobre o futuro nas quais nós apenas acreditamos, sem provas concretas. Na programação, o 'Will' funciona muito parecido com as regras condicionais (If/Else) e retornos de algoritmos.",
        iaInsight:
            "💡 Conexão IA:\nSe o sistema quebrar e você precisar dar uma instrução imediata para a IA te ajudar, use 'Will':\n'The build failed! I will paste the stack trace here, and you will analyze it for me, OK?'",
        quiz: {
            question:
                "O terminal mostrou um erro inesperado agora. Como você diz à IA, em uma decisão imediata, que vai reiniciar o servidor?",
            options: [
                { id: "A", text: "Wait, I am going to restart the server every day." },
                { id: "B", text: "Wait, I restarted the server right now." },
                { id: "C", text: "Wait, I will restart the server and see what happens." },
                { id: "D", text: "Wait, I am restart the server now." },
            ],
            correctId: "C",
            explanation:
                "Excelente! Como foi uma decisão instantânea tomada em reação ao erro do terminal, o uso do 'I will restart' é o ideal.",
        },
    },

    semana_10: {
        id: "semana_10",
        module: "Módulo 3: Planejando o Futuro",
        title: "Semana 10: Comparação de Futuros e Orações Temporais",
        subtitle: "Gatilhos (Triggers) e Condições de Parada",
        content:
            "Em orações temporais introduzidas por palavras como 'When' (quando), 'As soon as' (assim que) ou 'Until' (até que), nós NÃO usamos 'will' para falar do futuro. Em vez disso, usamos o Present Simple. Pensando como programadora, essas palavras funcionam exatamente como os gatilhos e critérios de parada de um loop (While/Until).",
        iaInsight:
            "💡 Conexão IA:\nAo criar automações ou scripts de pipelines com a ajuda da IA, estruture os gatilhos no presente:\n'As soon as the automated test finishes (Present Simple), the system will send (Will) a notification.'",
        quiz: {
            question:
                "Como você pede para a IA gerar um script que faça o seguinte: 'Assim que o usuário clicar no botão, o aplicativo mudará de cor'?",
            options: [
                { id: "A", text: "Create a script: when the user will click the button, the app will change color." },
                { id: "B", text: "Create a script: when the user clicked the button, the app changes color." },
                { id: "C", text: "Create a script: when the user clicks the button, the app will change color." },
                { id: "D", text: "Create a script: until the user clicks the button, the app changed color." },
            ],
            correctId: "C",
            explanation:
                "Sensacional! Na estrutura temporal de futuro, a condição de gatilho fica no Present Simple ('when the user clicks'), enquanto a consequência futura leva o 'will' ('the app will change').",
        },
    },
};
