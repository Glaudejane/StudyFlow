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
    // ==========================================
    // MÓDULO 4: POSSIBILIDADES E OBRIGAÇÕES (SEMANAS 11 - 14)
    // ==========================================

    semana_11: {
        id: "semana_11",
        module: "Módulo 4: Possibilidades e Obrigações",
        title: "Semana 11: Can, Could e Be able to",
        subtitle: "Capacidades e Limitações do Modelo",
        content:
            "Usamos 'Can' para falar de habilidades e permissões no presente. O 'Could' serve como um passado ou para fazer pedidos educados e hipóteses. Já o 'Be able to' é uma alternativa mais formal usada para falar de capacidades que conseguiremos alcançar após uma condição. Na TI, usamos essa estrutura para mapear as funções e escopo de uma API ou modelo de IA.",
        iaInsight:
            "💡 Conexão IA:\nAo testar uma nova tecnologia ou LLM, use 'Can' para validar o escopo técnico do que ela suporta:\n'Can this model process video files or can it only read text data?'",
        quiz: {
            question:
                "Você precisa perguntar à IA se ela é capaz de converter o seu código React Native atual para Swift (iOS nativo). Qual é a construção correta?",
            options: [
                { id: "A", text: "Can you translate this React Native component into Swift?" },
                { id: "B", text: "You could translating this component into Swift now?" },
                { id: "C", text: "Are you able to translated this component into Swift?" },
                { id: "D", text: "Can you translates this component into Swift?" },
            ],
            correctId: "A",
            explanation:
                "Excelente! O verbo modal 'Can' é seguido diretamente pelo verbo na sua forma base ('translate'), sendo a forma perfeita e direta para checar capacidades do modelo.",
        },
    },

    semana_12: {
        id: "semana_12",
        module: "Módulo 4: Possibilidades e Obrigações",
        title: "Semana 12: Must, Can't, May e Might",
        subtitle: "Regras Estritas de Segurança (Guardrails)",
        content:
            "O 'Must' indica uma obrigação forte ou uma necessidade absoluta. O seu oposto negativo, 'Must not' ou 'Can't', indica proibição estrita. Já 'May' e 'Might' indicam possibilidades ou permissões mais suaves. Na Engenharia de Prompts, 'Must' e 'Must not' são as palavras de ordem para evitar vazamento de dados (*data leaks*).",
        iaInsight:
            "💡 Conexão IA:\nDefina os limites éticos e de segurança da sua IA usando modais de obrigação e proibição:\n'You must protect user privacy. You must not expose internal API keys under any circumstances.'",
        quiz: {
            question:
                "Imagine que você está criando um chatbot para a Prefeitura e quer proibir a IA de inventar respostas quando ela não souber o fato. Qual instrução de sistema usa o modal correto?",
            options: [
                { id: "A", text: "You may invent data when you don't know the answer." },
                { id: "B", text: "You must not make up information if you are unsure of the facts." },
                { id: "C", text: "You can't making up information if you are unsure." },
                { id: "D", text: "You might not make up information." },
            ],
            correctId: "B",
            explanation:
                "Perfeito! 'Must not' expressa uma proibição absoluta e categórica, ideal para criar uma diretriz de segurança (*Guardrail*) inviolável no comportamento do bot.",
        },
    },

    semana_13: {
        id: "semana_13",
        module: "Módulo 4: Possibilidades e Obrigações",
        title: "Semana 13: Have to, Must e Needn't",
        subtitle: "Otimização de Contexto e Consumo de Tokens",
        content:
            "Enquanto 'Must' e 'Have to' trazem a ideia de obrigatoriedade (regras de negócio do software), o 'Needn't' (não precisa) indica ausência de obrigação. Em arquiteturas de IA, entender o que a IA *não precisa* fazer economiza processamento, tempo de resposta e dinheiro (consumo de tokens da API).",
        iaInsight:
            "💡 Conexão IA:\nPara deixar a resposta da IA mais rápida e direta, diga o que ela pode ignorar:\n'You have to write the code solution, but you needn't explain every line unless I ask you to.'",
        quiz: {
            question:
                "Como você instrui uma IA de refatoração a focar apenas no código limpo, deixando claro que ela NÃO precisa criar testes automatizados agora?",
            options: [
                { id: "A", text: "You must write clean code, but you must not generate automated tests." },
                { id: "B", text: "You have to write clean code, but you needn't create automated tests for now." },
                { id: "C", text: "You need write clean code, but you don't need creating tests." },
                { id: "D", text: "You have to write clean code, but you couldn't create automated tests." },
            ],
            correctId: "B",
            explanation:
                "Sensacional! O 'You have to' dita a obrigação principal do script e o 'you needn't' remove com precisão a necessidade dos testes, otimizando o escopo da tarefa.",
        },
    },

    semana_14: {
        id: "semana_14",
        module: "Módulo 4: Possibilidades e Obrigações",
        title: "Semana 14: Should, Would e Pedidos Educados",
        subtitle: "Refinamento de Tom e Formatação de Saída",
        content:
            "Usamos o 'Should' para dar conselhos, recomendações ou indicar o que é esperado que aconteça (boas práticas). O 'Would' cria cenários hipotéticos ou, em perguntas, serve para fazer requisições extremamente formais e polidas. No desenvolvimento, usamos para refinar a formatação das respostas da IA.",
        iaInsight:
            "💡 Conexão IA:\nUse 'Should' para passar boas práticas de arquitetura que você gostaria que a IA seguisse na saída:\n'The returned data should be formatted as a clean JSON object. Would you mind generating an example?'",
        quiz: {
            question:
                "Você quer sugerir à IA que o código gerado adote os padrões de acessibilidade, além de pedir educadamente que ela crie comentários. Qual frase encaixa melhor?",
            options: [
                { id: "A", text: "The code must be accessible and you will comment it." },
                {
                    id: "B",
                    text: "The code should follow accessibility guidelines. Would you please add comments to it?",
                },
                { id: "C", text: "The code should following guidelines. You would add comments?" },
                { id: "D", text: "The code can follow guidelines, but you should to add comments." },
            ],
            correctId: "B",
            explanation:
                "Isso aí! 'Should follow' indica uma recomendação técnica ideal (uma boa prática), e 'Would you please...' faz uma solicitação polida e profissional para a estruturação do código.",
        },
    },
    // ==========================================
    // MÓDULO 5: PREPOSIÇÕES E CONECTIVOS (SEMANAS 15 - 17)
    // ==========================================

    semana_15: {
        id: "semana_15",
        module: "Módulo 5: Preposições e Conectivos",
        title: "Semana 15: In, At e On (Tempo e Lugar)",
        subtitle: "Posicionamento de Elementos na UI e Agendamentos",
        content:
            "Usamos 'In' para espaços fechados, cidades/países, meses ou anos (ideia de dentro/geral). 'On' é usado para superfícies (telas, páginas, dias específicos da semana). 'At' é usado para pontos específicos (endereços exatos, horários ou locais precisos). Na TI, essa triade dita as regras de posicionamento de tela e configurações de fusos horários.",
        iaInsight:
            "💡 Conexão IA:\nSeja cirúrgica ao pedir para a IA estilizar sua interface ou configurar datas:\n• 'Place the button ON the screen (superfície).'\n• 'The notification triggers AT 9:00 AM (ponto exato).'\n• 'Store the user data IN the cloud database (dentro).'",
        quiz: {
            question:
                "Você precisa pedir para a IA gerar um estilo CSS onde o logo do aplicativo fique centralizado no topo da tela. Qual comando usa a preposição de superfície correta?",
            options: [
                { id: "A", text: "Please center the logo button at the screen header." },
                { id: "B", text: "Please center the logo button in the screen header." },
                { id: "C", text: "Please center the logo button on the screen header." },
                { id: "D", text: "Please center the logo button into the screen header." },
            ],
            correctId: "C",
            explanation:
                "Excelente! Como a tela do celular e o cabeçalho são tratados como superfícies visuais, a preposição correta para indicar que algo está sobre eles é o 'On' ('on the screen header').",
        },
    },

    semana_16: {
        id: "semana_16",
        module: "Módulo 5: Preposições e Conectivos",
        title: "Semana 16: Preposições de Movimento e Posição",
        subtitle: "Fluxo de Dados e Animações de Componentes",
        content:
            "Preposições de movimento como 'Into' (para dentro de), 'Through' (através de), 'To' (para) e 'From' (de/origem) descrevem ações dinâmicas. Na programação, usamos esses termos para explicar para a IA como os dados transitam entre funções ou como um componente deve deslizar em uma animação de tela.",
        iaInsight:
            "💡 Conexão IA:\nUse preposições de movimento para descrever fluxos de dados ou transições visuais em seus prompts:\n'The application fetches data FROM the API, processes it THROUGH a filter, and inserts it INTO the local state.'",
        quiz: {
            question:
                "Como você estruturaria um prompt para a IA criar uma animação onde um modal desliza de fora para dentro da área visível da tela?",
            options: [
                { id: "A", text: "Make the modal component slide from outside into the visible area." },
                { id: "B", text: "Make the modal component slide to outside through the visible area." },
                { id: "C", text: "Make the modal component slide at outside in the visible area." },
                { id: "D", text: "Make the modal component slide off outside on the visible area." },
            ],
            correctId: "A",
            explanation:
                "Sensacional! 'From' indica o ponto de origem do movimento (fora da tela) e 'into' indica a movimentação para o interior de um espaço delimitado (a área visível).",
        },
    },

    semana_17: {
        id: "semana_17",
        module: "Módulo 5: Preposições e Conectivos",
        title: "Semana 17: Combinações de Substantivos/Adjetivos + Preposições",
        subtitle: "Dependências de Software e Compatibilidade",
        content:
            "Em inglês, muitas palavras exigem uma preposição fixa (ex: 'compatible WITH', 'responsible FOR', 'depend ON'). Decorar essas combinações evita que você escreva prompts confusos ou documentações técnicas com erros de sintaxe estrutural.",
        iaInsight:
            "💡 Conexão IA:\nAo pedir ajuda à IA para instalar pacotes ou debugar dependências, use os pares corretos de palavras:\n'Is this specific version of Expo compatible WITH React Native 0.74? My code depends ON it.'",
        quiz: {
            question:
                "Você está criando a documentação do seu app com a IA e quer escrever: 'Esta função é responsável por salvar o XP'. Qual é a combinação gramatical correta?",
            options: [
                { id: "A", text: "This function is responsible with saving the XP." },
                { id: "B", text: "This function is responsible for saving the XP." },
                { id: "C", text: "This function is responsible about save the XP." },
                { id: "D", text: "This function is responsible by saving the XP." },
            ],
            correctId: "B",
            explanation:
                "Perfeito! O adjetivo 'responsible' exige obrigatoriamente a preposição 'for'. E, pelas regras da gramática, qualquer verbo vindo logo após uma preposição precisa ganhar o sufixo -ING ('for saving').",
        },
    },
    // ==========================================
  // MÓDULO 6: VERBOS COM PREPOSIÇÕES E PHRASAL VERBS (SEMANAS 18 - 20)
  // ==========================================

  "semana_18": {
    id: "semana_18",
    module: "Módulo 6: Verbos com Preposições e Phrasal Verbs",
    title: "Semana 18: Verb + Preposition",
    subtitle: "Ações Práticas em Requisições HTTP e Eventos",
    content: "Muitos verbos essenciais na programação exigem uma preposição específica para fazerem sentido em inglês. Por exemplo, nós fazemos o upload de algo PARA um lugar ('upload TO'), baixamos DE algum lugar ('download FROM'), clicamos EM algo ('click ON') e nos inscrevemos EM um serviço ('subscribe TO'). Usar essas combinações perfeitamente evita erros ao documentar códigos ou criar prompts.",
    iaInsight: "💡 Conexão IA:\nAo interagir com a IA para estruturar funções de eventos, use as regências verbais corretas:\n'Create a function that triggers when the user clicks ON the profile picture to download data FROM the server.'",
    quiz: {
      question: "Você quer que a IA crie um botão para o seu app React Native. O objetivo é que, ao clicar, o app envie o arquivo de log para o servidor. Qual frase está gramaticalmente correta?",
      options: [
        { id: "A", text: "Create a button to upload the log file into the server." },
        { id: "B", text: "Create a button to upload the log file to the server." },
        { id: "C", text: "Create a button to upload the log file at the server." },
        { id: "D", text: "Create a button to upload the log file from the server." }
      ],
      correctId: "B",
      explanation: "Perfeito! O verbo 'upload' exige a preposição 'to' para indicar o destino do envio dos dados ('upload to the server'). O 'from' seria usado se estivéssemos baixando (downloading) o arquivo."
    }
  },

  "semana_19": {
    id: "semana_19",
    module: "Módulo 6: Verbos com Preposições e Phrasal Verbs",
    title: "Semana 19: Phrasal Verbs (In, Out, On, Off)",
    subtitle: "Comandos de Autenticação e Estados de Componentes",
    content: "Phrasal Verbs são combinações de um verbo com uma preposição que, juntos, ganham um significado totalmente novo. Na TI, o grupo com 'In/Out/On/Off' gerencia acessos e estados: 'Log in / Sign in' (entrar no sistema), 'Log out / Sign out' (sair do sistema), 'Turn on' (ligar/ativar um componente como a câmera) e 'Turn off' (desligar/desativar).",
    iaInsight: "💡 Conexão IA:\nUse estes Phrasal Verbs universais para pedir telas ou fluxos de autenticação para a IA:\n'I need a screen where users can log in using their email, and a header button to let them log out safely.'"
    quiz: {
      question: "Como você pede para a IA criar uma lógica de chaves (Toggles) para ativar ou desativar as notificações do aplicativo?",
      options: [
        { id: "A", text: "Write a function to switch in and switch out the application notifications." },
        { id: "B", text: "Write a function to turn on and turn off the application notifications." },
        { id: "C", text: "Write a function to log on and log off the application notifications." },
        { id: "D", text: "Write a function to sign in and sign out the application notifications." }
      ],
      correctId: "B",
      explanation: "Sensacional! 'Turn on' e 'Turn off' são as expressões corretas para ligar/ativar e desligar/desativar componentes eletrônicos, funções de software ou estados de chaves de configuração (toggles)."
    }
  },

  "semana_20": {
    id: "semana_20",
    module: "Módulo 6: Verbos com Preposições e Phrasal Verbs",
    title: "Semana 20: Phrasal Verbs (Up, Down, Away, Back)",
    subtitle: "Manutenção de Sistemas e Rotinas de Infraestrutura",
    content: "Chegamos à última semana! O grupo de Phrasal Verbs com 'Up, Down, Away, Back' dita as regras de manutenção técnica: 'Set up' (configurar o ambiente do zero), 'Shut down' (desligar servidores de forma segura), 'Back up' (criar cópias de segurança dos dados) e 'Clean up' (limpar código morto ou lixo da memória). Dominar esses termos fecha o seu ciclo de comunicação profissional em TI.",
    iaInsight: "💡 Conexão IA:\nPeça ajuda à IA para organizar o seu projeto ou banco de dados usando termos de manutenção:\n'Help me clean up this component and show me how to back up my local database safely.'",
    quiz: {
      question: "Você terminou o seu aplicativo e quer que a IA te ajude a criar um guia de como configurar todo o ambiente do projeto no computador de outra pessoa. Qual termo você deve usar?",
      options: [
        { id: "A", text: "Help me write a guide on how to clean up the environment." },
        { id: "B", text: "Help me write a guide on how to set up the project environment." },
        { id: "C", text: "Help me write a guide on how to back up the environment." },
        { id: "D", text: "Help me write a guide on how to shut down the project." }
      ],
      correctId: "B",
      explanation: "Parabéns! 'Set up' é o phrasal verb padrão na tecnologia para se referir à instalação, preparação e configuração inicial de qualquer sistema, software ou ambiente de desenvolvimento!"
    }
  }
};
