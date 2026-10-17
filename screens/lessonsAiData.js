// lessonsAiData.js

export const lessonsAiData = {
    m1: {
        title: "Fundamentos sem Mistério",
        subtitle: "Módulo 1 • Inteligência Artificial",
        content:
            "Bem-vinda à sua jornada de IA, Glaudejane!\n\nPara quem está iniciando na área de tecnologia, entender Inteligência Artificial não é sobre decorar fórmulas matemáticas complexas, mas sim aprender a usar os Grandes Modelos de Linguagem (LLMs) como uma ferramenta para acelerar seu aprendizado.\n\nUm LLM funciona prevendo a próxima palavra mais provável com base no contexto que você fornece. Quando você entende como a IA 'pensa', você consegue criar perguntas muito melhores e extrair explicações detalhadas de códigos em JavaScript, HTML ou Python de forma extremamente eficiente.",
        iaInsight:
            "🤖 Dica de IA: Use a IA como um tutor paciente. Se você não entender um conceito de código, peça para ela: 'Explique-me como se eu tivesse 10 anos de idade'.",
        quiz: {
            question:
                "Qual é a melhor abordagem para um iniciante em programação utilizar a Inteligência Artificial no dia a dia?",
            correctId: "B",
            options: [
                { id: "A", text: "Copiar e colar códigos prontos sem tentar entender como eles funcionam." },
                {
                    id: "B",
                    text: "Utilizar a IA como um tutor pessoal para explicar conceitos difíceis e logs de erro linha por linha.",
                },
                { id: "C", text: "Evitar o uso de IA para não prejudicar a lógica de programação tradicional." },
            ],
            explanation:
                "Perfeito! A IA brilha quando usada como uma ferramenta pedagógica. Pedir explicações passo a passo e depurar erros ajuda você a construir autonomia de forma muito mais rápida no mercado de tecnologia!",
        },
    },
    m2: {
        title: "Engenharia de Prompts para Devs",
        subtitle: "Módulo 2 • Inteligência Artificial",
        content:
            "Saber conversar com a IA determina a qualidade do código ou da resposta que você recebe.\n\nA Engenharia de Prompts é a técnica de estruturar suas instruções de forma clara. Um prompt perfeito para um desenvolvedor deve conter quatro pilares:\n1. Papel/Persona (Ex: 'Atue como um professor sênior de JavaScript')\n2. Contexto (Ex: 'Estou aprendendo funções assíncronas')\n3. Tarefa (Ex: 'Explique a diferença entre async e await')\n4. Restrição (Ex: 'Não me dê o código pronto, use analogias do dia a dia').",
        iaInsight:
            "🤖 Dica de IA: Dar contexto evita respostas genéricas e ajuda a IA a focar exatamente na sua dúvida atual.",
        quiz: {
            question:
                "Quais são elementos essenciais para estruturar um prompt eficiente ao pedir ajuda com programação?",
            correctId: "C",
            options: [
                { id: "A", text: "Apenas colar o erro do terminal sem nenhuma explicação adicional." },
                { id: "B", text: "Escrever comandos curtos de uma única palavra, como 'JavaScript'." },
                {
                    id: "C",
                    text: "Definir um papel para a IA, contextualizar seu nível de aprendizado e dar instruções claras do que precisa.",
                },
            ],
            explanation:
                "Exatamente! Quanto melhor o contexto e o direcionamento, mais precisa, didática e útil será a resposta da inteligência artificial para o seu estudo.",
        },
    },
    m3: {
        title: "IA como seu Tutor de Código Pessoal",
        subtitle: "Módulo 3 • Inteligência Artificial",
        content:
            "Um dos maiores erros de quem está começando é pedir para a IA 'resolver' um exercício, em vez de pedir para ela 'ensinar' a resolver.\n\nExiste uma técnica simples e poderosa chamada 'Explique-me como se eu tivesse 10 anos'. Ao usar essa frase, você força a IA a abandonar o jargão técnico e usar analogias do dia a dia — o que ajuda MUITO a fixar conceitos difíceis, como recursão, APIs ou bancos de dados.\n\nOutra forma de usar a IA como tutora é pedir para ela criar pequenos quizzes sobre o que você acabou de estudar. Isso transforma a leitura passiva em prática ativa, que é como o cérebro realmente aprende e retém informação.",
        iaInsight:
            "🤖 Dica de IA: Depois de qualquer explicação, peça 'Agora me faça 3 perguntas de múltipla escolha sobre isso' — é uma forma gratuita de testar se você realmente entendeu.",
        quiz: {
            question:
                "Qual é a vantagem principal de pedir para a IA 'explicar como se você tivesse 10 anos' em vez de pedir a resposta pronta?",
            correctId: "B",
            options: [
                { id: "A", text: "A resposta fica mais curta e rápida de ler." },
                {
                    id: "B",
                    text: "A explicação usa analogias simples, o que ajuda a fixar o conceito em vez de só copiar a solução.",
                },
                { id: "C", text: "A IA erra menos quando a pergunta é feita dessa forma." },
            ],
            explanation:
                "Isso mesmo! Simplificar a linguagem não deixa a resposta 'menos técnica de verdade' — ela continua correta, só fica mais fácil de conectar com o que você já sabe, e isso é o que gera aprendizado de longo prazo.",
        },
    },
    m4: {
        title: "Depuração e Resolução de Erros",
        subtitle: "Módulo 4 • Inteligência Artificial",
        content:
            "Todo mundo que programa lida com erros — a diferença entre iniciantes e experientes não é 'nunca errar', é saber ler o erro rápido.\n\nQuando você recebe uma mensagem de erro no terminal, ela geralmente tem três informações valiosas: o TIPO do erro (ex: SyntaxError, TypeError), o ARQUIVO e LINHA onde aconteceu, e uma descrição do problema. Cole essas três informações para a IA, junto com o trecho do código relacionado, e peça para ela explicar a causa antes de te dar a correção.\n\nOutra técnica poderosa é a 'Refatoração Guiada': depois que seu código funciona, peça para a IA sugerir melhorias de organização e legibilidade, sempre pedindo para ela explicar o motivo de cada sugestão — assim você aprende boas práticas em vez de só aceitar mudanças às cegas.",
        iaInsight:
            "🤖 Dica de IA: Nunca cole só a mensagem de erro. Cole também o trecho do código relacionado — sem contexto, a IA está 'adivinhando' a causa.",
        quiz: {
            question: "Ao pedir ajuda com um erro de código para a IA, qual é a abordagem mais eficiente?",
            correctId: "A",
            options: [
                {
                    id: "A",
                    text: "Colar a mensagem de erro completa junto com o trecho de código relacionado.",
                },
                { id: "B", text: "Colar só a última palavra da mensagem de erro." },
                { id: "C", text: "Descrever o erro de memória, sem copiar o texto exato." },
            ],
            explanation:
                "Exatamente! Quanto mais contexto real você fornecer (mensagem completa + código), mais precisa será a análise da IA sobre a causa raiz do problema.",
        },
    },
    m5: {
        title: "Assistentes Inline (GitHub Copilot)",
        subtitle: "Módulo 5 • Inteligência Artificial",
        content:
            "Diferente do ChatGPT ou Gemini, que você abre numa aba separada, ferramentas como o GitHub Copilot funcionam DENTRO do seu editor de código, sugerindo trechos de código enquanto você digita.\n\nA forma mais eficaz de usar esse tipo de assistente é através de comentários. Se você escrever um comentário como '// função que calcula o total de itens de uma lista de compras', o assistente vai sugerir o código correspondente automaticamente. É como dar instruções por escrito antes de agir.\n\nExiste, porém, um risco importante: a 'dependência automática'. Aceitar sugestões sem entender o que elas fazem cria a ilusão de produtividade, mas deixa lacunas no seu aprendizado real. A regra de ouro é: só aceite uma sugestão se você conseguir explicar o que ela faz, linha por linha.",
        iaInsight:
            "🤖 Dica de IA: Use o assistente inline para acelerar tarefas repetitivas que você já domina — e use o chat (ChatGPT/Gemini) para aprender coisas novas com calma.",
        quiz: {
            question:
                "Qual é o principal risco de usar assistentes de código inline (como o GitHub Copilot) sem cuidado?",
            correctId: "C",
            options: [
                { id: "A", text: "Eles deixam o código mais lento de executar." },
                { id: "B", text: "Eles não funcionam em nenhuma linguagem de programação." },
                {
                    id: "C",
                    text: "Aceitar sugestões sem entender pode criar dependência e deixar lacunas no aprendizado.",
                },
            ],
            explanation:
                "Isso mesmo! A ferramenta é excelente para produtividade, mas a regra de ouro continua sendo: só aceite código que você consiga explicar depois.",
        },
    },
    m6: {
        title: "Projeto Prático Integrado",
        subtitle: "Módulo 6 • Inteligência Artificial",
        content:
            "Chegou a hora de juntar tudo que você aprendeu nos módulos anteriores num projeto real: conectar uma API de Inteligência Artificial a um pequeno aplicativo.\n\nUma API (Interface de Programação de Aplicações) é basicamente uma 'porta de entrada' que permite que o seu código converse com um serviço externo — nesse caso, um modelo de IA. Você envia uma pergunta (um 'prompt') pela internet, e recebe de volta uma resposta gerada pelo modelo.\n\nO fluxo básico de um projeto assim costuma ser: 1) o usuário digita algo na tela do app, 2) o app envia esse texto para a API, 3) a API processa e devolve uma resposta, 4) o app exibe essa resposta na tela. Entender esse ciclo é a base de praticamente qualquer aplicativo moderno que usa Inteligência Artificial — incluindo, inclusive, ferramentas parecidas com o próprio Claude!",
        iaInsight:
            "🤖 Dica de IA: Antes de programar a integração, teste a API manualmente (com uma ferramenta como Postman ou até o próprio navegador) para entender exatamente o formato da resposta antes de tentar ler esses dados no seu app.",
        quiz: {
            question:
                "No fluxo básico de um app conectado a uma API de IA, o que acontece logo depois do usuário digitar sua pergunta?",
            correctId: "B",
            options: [
                { id: "A", text: "O app exibe a resposta imediatamente, sem enviar nada." },
                { id: "B", text: "O app envia o texto digitado para a API processar." },
                { id: "C", text: "O aplicativo é reiniciado automaticamente." },
            ],
            explanation:
                "Perfeito! O texto do usuário precisa viajar até a API antes que qualquer resposta possa ser gerada — é a etapa central de qualquer integração com IA.",
        },
    },
    m7: {
        title: "Tokens, Contexto e Custos em LLMs",
        subtitle: "Módulo 7 • Inteligência Artificial",
        content:
            "Para trabalhar com LLMs (Modelos de Linguagem de Grande Porte) via código, você precisa entender o conceito de 'Token'. Tokens são os pedaços de palavras ou caracteres que o modelo processa para ler e gerar texto.\n\nNa prática, cada modelo possui uma 'Janela de Contexto', que é o limite máximo de tokens que ele consegue processar entre a sua pergunta (prompt) e a resposta dele. Quanto maior o texto enviado, mais tokens são consumidos.\n\nAlém disso, as APIs de IA costumam cobrar por quantidade de tokens processados (Input Tokens e Output Tokens). Gerenciar bem o tamanho do seu prompt evita erros de limite de contexto e otimiza os custos financeiros do seu aplicativo.",
        iaInsight:
            "🤖 Dica de IA: Em geral, 1.000 tokens equivalem a aproximadamente 750 palavras em inglês (ou cerca de 500 a 600 palavras em português). Sempre formate mensagens diretas e sem redundâncias para economizar recursos.",
        quiz: {
            question: "O que é a 'Janela de Contexto' em um modelo de Inteligência Artificial?",
            correctId: "A",
            options: [
                { id: "A", text: "O limite máximo de tokens (texto) que o modelo consegue ler e gerar de uma só vez." },
                { id: "B", text: "O número de usuários simultâneos no aplicativo." },
                { id: "C", text: "A velocidade da conexão de internet do servidor." },
            ],
            explanation:
                "Exatamente! A janela de contexto define o limite de memória imediata do modelo para aquela requisição.",
        },
    },

    m8: {
        title: "Modelos Open-Source vs Propriétarios",
        subtitle: "Módulo 8 • Inteligência Artificial",
        content:
            "No ecossistema moderno de IA, existem dois grandes caminhos de modelos: os Proprietários e os Open-Source (Código Aberto).\n\nModelos Proprietários (como Claude da Anthropic e GPT da OpenAI) são acessados como serviço via API. Você paga pelo uso, mas conta com alta performance sem precisar gerenciar infraestrutura robusta de servidores.\n\nJá os Modelos Open-Source (como Llama da Meta, DeepSeek e Mistral) disponibilizam os pesos do modelo. Isso permite que você faça o download e rode a IA no seu próprio servidor ou na nuvem privada, garantindo total privacidade dos dados e independência de terceiros.",
        iaInsight:
            "🤖 Dica de IA: Se o seu app lida com dados altamente confidenciais (saúde, finanças ou dados médicos), usar modelos Open-Source em servidores privados costuma ser a escolha ideal de conformidade (LGPD/GDPR).",
        quiz: {
            question: "Qual é uma das principais vantagens de utilizar um modelo de IA Open-Source?",
            correctId: "C",
            options: [
                { id: "A", text: "Ele sempre responde mais rápido do que qualquer API paga." },
                { id: "B", text: "Não exige nenhum conhecimento de programação para ser instalado." },
                { id: "C", text: "Você pode rodar no seu próprio servidor, garantindo privacidade total dos dados." },
            ],
            explanation:
                "Perfeito! Modelos Open-Source dão controle total sobre os dados e a infraestrutura do projeto.",
        },
    },

    m9: {
        title: "Engenharia de Prompt: System, User e Assistant",
        subtitle: "Módulo 9 • Inteligência Artificial",
        content:
            "Ao estruturar conversas com APIs de IA, a comunicação é organizada em três papéis fundamentais (roles): System, User e Assistant.\n\n1) System: Define a 'personalidade', limites e regras gerais da IA (ex: 'Você é um tutor amigável de programação').\n2) User: É a mensagem enviada diretamente pelo usuário do aplicativo.\n3) Assistant: São as respostas geradas pela IA ou o histórico anterior da conversa.\n\nDividir a conversa nesses três papéis garante que a IA não perca a sua identidade inicial ao longo de uma conversa longa.",
        iaInsight:
            "🤖 Dica de IA: Coloque instruções críticas e proibições na mensagem de 'System'. Isso reduz drasticamente respostas indesejadas e alucinações durante o uso do app.",
        quiz: {
            question: "Qual o papel da mensagem do tipo 'System' em uma chamada de API?",
            correctId: "B",
            options: [
                { id: "A", text: "Armazenar a senha do banco de dados do aplicativo." },
                { id: "B", text: "Definir as regras de comportamento, tom de voz e papel da IA." },
                { id: "C", text: "Exibir a tela principal para o usuário final." },
            ],
            explanation:
                "Correto! A mensagem 'System' funciona como o manual de instruções e personalidade da IA.",
        },
    },

    m10: {
        title: "O Problema das Alucinações em IA",
        subtitle: "Módulo 10 • Inteligência Artificial",
        content:
            "Modelos de linguagem são estatísticos: eles preveem as próximas palavras mais prováveis de um texto. Por causa disso, às vezes eles criam informações falsas com um tom extremamente convincente. Esse fenômeno é chamado de 'Alucinação'.\n\nComo desenvolvedor, você não deve confiar cegamente nas respostas da IA para fatos cruciais. Para combater alucinações, podemos passar contextos reais no prompt, pedir para a IA citar fontes, ou instruí-la a responder 'Não sei' caso não tenha certeza absoluta.",
        iaInsight:
            "🤖 Dica de IA: Adicione esta instrução ao seu prompt: 'Responda apenas com base nos dados fornecidos. Se a resposta não estiver no texto, diga expressamente que não possui essa informação.'",
        quiz: {
            question: "O que significa dizer que um modelo de IA 'alucinou'?",
            correctId: "A",
            options: [
                { id: "A", text: "O modelo gerou uma resposta incorreta ou inventada com aparente certeza." },
                { id: "B", text: "O modelo travou por falta de memória no dispositivo." },
                { id: "C", text: "A API retornou um erro de conexão de rede." },
            ],
            explanation:
                "Exatamente! Alucinação é a geração de dados falsos que parecem verdadeiros por causa do tom confiante da IA.",
        },
    },

    m11: {
        title: "RAG (Retrieval-Augmented Generation)",
        subtitle: "Módulo 11 • Inteligência Artificial",
        content:
            "Imagine conectar a IA aos documentos privados da sua empresa sem precisar treinar um novo modelo do zero. Isso é o RAG (Geração Aumentada por Recuperação).\n\nO RAG funciona em duas etapas principais: 1) O sistema busca nos seus arquivos (PDFs, bancos de dados, notas) o trecho exato relativo à pergunta do usuário; 2) O sistema envia esse trecho como contexto para a IA responder com precisão.\n\nEssa técnica elimina alucinações e garante que a IA responda sempre com base em dados atualizados da sua aplicação.",
        iaInsight:
            "🤖 Dica de IA: O RAG é uma das arquiteturas mais valorizadas no mercado atual para criar assistentes corporativos e sistemas de busca inteligentes.",
        quiz: {
            question: "Qual é o principal benefício da arquitetura RAG?",
            correctId: "C",
            options: [
                { id: "A", text: "Reduzir o tamanho da tela do aplicativo mobile." },
                { id: "B", text: "Substituir o código JavaScript do aplicativo." },
                { id: "C", text: "Permitir que a IA responda dúvidas usando documentos e bases de dados privadas da sua empresa." },
            ],
            explanation:
                "Perfeito! O RAG combina busca em banco de dados com a capacidade de síntese e linguagem da IA.",
        },
    },

    m12: {
        title: "Bancos de Dados Vetoriais e Embeddings",
        subtitle: "Módulo 12 • Inteligência Artificial",
        content:
            "Para fazer buscas inteligentes em sistemas como o RAG, não usamos buscas por palavras-chave tradicionais. Usamos 'Embeddings'.\n\nEmbeddings são representações numéricas (vetores) que capturam o **significado** de um texto. Por exemplo, a palavra 'Rei' e a palavra 'Rainha' terão vetores numericamente muito próximos em um espaço tridimensional.\n\nOs Bancos de Dados Vetoriais (como Pinecone, Qdrant e Chroma) são especializados em guardar e buscar esses vetores por similaridade semântica em questão de milissegundos.",
        iaInsight:
            "🤖 Dica de IA: Com Embeddings, se o usuário pesquisar por 'cachorro', o sistema encontrará documentos contendo 'cão' ou 'pet', mesmo que a palavra 'cachorro' não apareça no texto!",
        quiz: {
            question: "Para que servem os 'Embeddings' na inteligência artificial?",
            correctId: "B",
            options: [
                { id: "A", text: "Para compactar fotos e imagens do celular." },
                { id: "B", text: "Para transformar texto em representações numéricas que traduzem seu significado e contexto." },
                { id: "C", text: "Para traduzir código React Native em HTML." },
            ],
            explanation:
                "Correto! Embeddings transformam ideias e palavras em números para permitir buscas semânticas por significado.",
        },
    },

    m13: {
        title: "Function Calling e Tool Use",
        subtitle: "Módulo 13 • Inteligência Artificial",
        content:
            "Modelos modernos não apenas conversam, mas também executam ações através de 'Function Calling' (Uso de Ferramentas).\n\nCom essa técnica, você fornece à IA uma lista de funções do seu código (ex: `buscarPrevisaoDoTempo(cidade)` ou `enviarEmail(destino)`). Quando o usuário faz um pedido, a IA identifica qual função deve ser chamada e extrai os parâmetros corretos em formato JSON.\n\nO seu aplicativo lê essa resposta da IA, executa a função no seu banco de dados e devolve o resultado para a IA finalizar a resposta ao usuário.",
        iaInsight:
            "🤖 Dica de IA: O Function Calling transforma chatbots simples em **Agentes Autônomos** capazes de agendar consultas, emitir relatórios e realizar compras.",
        quiz: {
            question: "O que a IA faz durante o processo de 'Function Calling'?",
            correctId: "A",
            options: [
                { id: "A", text: "Identifica a função necessária e retorna os dados formatados (JSON) para o seu aplicativo executá-la." },
                { id: "B", text: "Acessa diretamente a conta bancária do usuário sem autorização." },
                { id: "C", text: "Apaga o código-fonte do aplicativo em caso de erro." },
            ],
            explanation:
                "Exatamente! A IA decide *quando* usar uma ferramenta e extrai os parâmetros, enquanto o seu app executa a ação real com segurança.",
        },
    },

    m14: {
        title: "Agentes de IA e Multi-Agent Systems",
        subtitle: "Módulo 14 • Inteligência Artificial",
        content:
            "Um 'Agente de IA' é um sistema que combina LLM, memória, ferramentas e capacidade de planejamento para resolver problemas complexos com pouca intervenção humana.\n\nEm um sistema 'Multi-Agente', dividimos grandes tarefas entre especialistas virtuais. Por exemplo: um 'Agente Pesquisador' coleta dados na web, um 'Agente Redator' escreve o rascunho e um 'Agente Revisor' corrige os erros do texto final.\n\nDividir tarefas complexas em agentes especializados melhora drasticamente a qualidade final do resultado.",
        iaInsight:
            "🤖 Dica de IA: Frameworks como CrewAI e LangGraph facilitam a orquestração de múltiplos agentes trabalhando juntos na mesma aplicação.",
        quiz: {
            question: "Qual a vantagem de usar uma arquitetura de Múltiplos Agentes (Multi-Agent)?",
            correctId: "C",
            options: [
                { id: "A", text: "Permite usar a IA sem conexão com a internet." },
                { id: "B", text: "Elimina a necessidade de criar interfaces gráficas nos aplicativos." },
                { id: "C", text: "Divide um problema complexo entre IAs especializadas em etapas diferentes da tarefa." },
            ],
            explanation:
                "Perfeito! Especializar pequenos agentes para tarefas específicas gera resultados muito superiores aos de um único prompt gigante.",
        },
    },

    m15: {
        title: "Streaming de Respostas em Tempo Real",
        subtitle: "Módulo 15 • Inteligência Artificial",
        content:
            "Aguardar um modelo gerar uma resposta completa de 500 palavras pode levar de 5 a 10 segundos. Para o usuário final, essa espera sem retorno parece um travamento do app.\n\nA solução para isso é o 'Streaming' (usando Server-Sent Events ou WebSockets). Em vez de esperar a resposta inteira, a API envia cada token gerado em tempo real.\n\nIsso proporciona a famosa animação de 'digitação ao vivo' que vemos em chats de IA, reduzindo a percepção de tempo de espera (Time to First Token - TTFT) para poucos milissegundos.",
        iaInsight:
            "🤖 Dica de IA: A experiência de usuário (UX) em apps com IA melhora exponencialmente quando o streaming é ativado, mesmo que o tempo total do processamento seja o mesmo.",
        quiz: {
            question: "Qual a principal vantagem de implementar Streaming de respostas no aplicativo?",
            correctId: "B",
            options: [
                { id: "A", text: "Garantir que a IA nunca cometa erros de gramática." },
                { id: "B", text: "Exibir o texto ao usuário palavra por palavra em tempo real, melhorando a experiência sem longas esperas." },
                { id: "C", text: "Economizar a bateria do celular do usuário." },
            ],
            explanation:
                "Exatamente! O Streaming entrega feedback imediato ao usuário enquanto o modelo ainda está pensando e gerando o restante do texto.",
        },
    },

    m16: {
        title: "Segurança: Prompt Injection e Moderacao",
        subtitle: "Módulo 16 • Inteligência Artificial",
        content:
            "Assim como sistemas web sofrem com 'SQL Injection', sistemas de IA sofrem com o 'Prompt Injection'. Ocorre quando um usuário mal-intencionado tenta enganar as instruções de System para fazer a IA revelar senhas, burlar regras ou gerar conteúdo inadequado.\n\nPara proteger seu app: 1) Valide e sanitize as entradas de texto; 2) Utilize APIs de Moderação gratuitas para checar frases ofensivas antes de enviar ao modelo; 3) Nunca coloque chaves de API secretas (API Keys) dentro do código do aplicativo mobile.",
        iaInsight:
            "🤖 Dica de IA: Suas chaves de API (`API_KEY`) devem ficar sempre protegidas no seu servidor Back-End (ou no ambiente `.env`), jamais expostas diretamente no código Front-End.",
        quiz: {
            question: "O que é 'Prompt Injection'?",
            correctId: "A",
            options: [
                { id: "A", text: "Uma tentativa do usuário de manipular o prompt para ignorar as regras de segurança e instruções originais da IA." },
                { id: "B", text: "A instalação de novos plugins no VS Code." },
                { id: "C", text: "Acelerar a velocidade de carregamento de um banco de dados." },
            ],
            explanation:
                "Correto! O Prompt Injection tenta fazer o modelo 'esquecer' suas instruções de segurança por meio de truques de linguagem.",
        },
    },

    m17: {
        title: "Fine-Tuning (Ajuste Fino de Modelos)",
        subtitle: "Módulo 17 • Inteligência Artificial",
        content:
            "Fine-Tuning é o processo de pegar um modelo pré-treinado existente e treiná-lo com centenas ou milhares de exemplos específicos do seu domínio de negócio.\n\nDiferente do RAG (que consulta documentos durante a conversa), o Fine-Tuning muda os pesos internos do modelo. É a técnica ideal para ensinar um modelo a adotar um tom de voz corporativo muito específico, estruturar saídas num formato rígido ou aprender terminologias médicas/jurídicas raras.",
        iaInsight:
            "🤖 Dica de IA: Antes de investir tempo e dinheiro em Fine-Tuning, esgoste as possibilidades com Prompt Engineering e RAG, que são muito mais simples e rápidos de implementar.",
        quiz: {
            question: "Qual a diferença conceitual entre RAG e Fine-Tuning?",
            correctId: "C",
            options: [
                { id: "A", text: "RAG serve para imagens e Fine-Tuning serve apenas para áudios." },
                { id: "B", text: "Não há diferença, são nomes diferentes para a mesma técnica." },
                { id: "C", text: "O RAG busca dados externos como consulta, enquanto o Fine-Tuning altera o conhecimento interno (pesos) do modelo." },
            ],
            explanation:
                "Perfeito! O RAG dá um 'livro aberto' para a IA ler na hora, enquanto o Fine-Tuning faz a IA 'estudar e memorizar' o conteúdo antes.",
        },
    },

    m18: {
        title: "Visão Computacional e Modelos Multimodais",
        subtitle: "Módulo 18 • Inteligência Artificial",
        content:
            "Os modelos mais recentes não processam apenas texto; eles são 'Multimodais'. Isso significa que conseguem entender e relacionar imagens, áudios, documentos em PDF e vídeos simultaneamente.\n\nNo desenvolvimento mobile, isso abre portas incríveis: o usuário tira uma foto de um prato e o aplicativo calcula as calorias, ou fotografa um código de erro no monitor e a IA explica a solução diretamente no app.",
        iaInsight:
            "🤖 Dica de IA: Ao enviar imagens para APIs multimodais, comprima a resolução da imagem para economizar custos de tokens e acelerar a velocidade da resposta.",
        quiz: {
            question: "O que caracteriza um modelo de IA 'Multimodal'?",
            correctId: "B",
            options: [
                { id: "A", text: "A capacidade de rodar simultaneamente em Android e iOS." },
                { id: "B", text: "A habilidade de processar e relacionar múltiplos formatos de dados, como texto, imagens, áudio e vídeo." },
                { id: "C", text: "Um modelo que fala mais de dez idiomas diferentes." },
            ],
            explanation:
                "Exatamente! Modelos multimodais expandem a IA para além do texto, permitindo que ela 'veja' e 'ouça' o mundo.",
        },
    },

    m19: {
        title: "Avaliação de Modelos (LLM Evaluation & Tracing)",
        subtitle: "Módulo 19 • Inteligência Artificial",
        content:
            "Em softwares tradicionais, testamos o código comparando entradas e saídas exatas. Em sistemas com IA, como a resposta é gerativa e varia a cada chamada, precisamos de técnicas modernas de 'LLM Evaluation'.\n\nFerramentas de observabilidade (como LangSmith e Phoenix) registram o histórico de chamadas, latência, consumo de tokens e a satisfação do usuário.\n\nTambém podemos usar a técnica 'LLM-as-a-Judge', onde um modelo mais avançado analisa e dá notas automáticas para a qualidade das respostas geradas pelo modelo do seu app.",
        iaInsight:
            "🤖 Dica de IA: Monitorar o histórico de respostas com ferramentas de tracing evita surpresas de custos altos e identifica alucinações antes que afetem muitos usuários.",
        quiz: {
            question: "O que faz a técnica 'LLM-as-a-Judge'?",
            correctId: "A",
            options: [
                { id: "A", text: "Utiliza um modelo de IA mais avançado para avaliar a qualidade e a precisão das respostas de outro modelo." },
                { id: "B", text: "Aplica processos judiciais contra usuários mal-intencionados." },
                { id: "C", text: "Decide de forma automática o valor da assinatura do aplicativo." },
            ],
            explanation:
                "Correto! Usar um modelo forte para julgar e dar notas às respostas do seu sistema garante um controle de qualidade automatizado e em escala.",
        },
    },

    m20: {
        title: "O Futuro dos Apps: Da IA Conversacional aos Agentes Autônomos",
        subtitle: "Módulo 20 • Inteligência Artificial",
        content:
            "Parabéns por chegar ao Módulo 20! O desenvolvimento de softwares passou por três grandes fases: a Era Desktop, a Era Mobile e agora a Era dos Aplicativos Inteligentes (AI-Native).\n\nO futuro dos aplicativos não é ter apenas uma caixa de chat flutuante no canto da tela, mas sim interfaces preditivas que aprendem os hábitos do usuário, automatizam fluxos repetitivos no segundo plano e tomam decisões inteligentes de forma autônoma.\n\nCom a bagagem conceitual, arquitetural e prática que você construiu ao longo destes 20 módulos, você está 100% preparado para liderar e construir os aplicativos da próxima geração!",
        iaInsight:
            "🤖 Dica de IA: Continue praticando! Combine o poder do React Native que você já domina com as APIs de IA para criar soluções que transformam a vida das pessoas.",
        quiz: {
            question: "Qual é a principal tendência da nova geração de aplicativos (AI-Native)?",
            correctId: "C",
            options: [
                { id: "A", text: "Eliminar completamente o uso de telas de celulares." },
                { id: "B", text: "Usar a IA apenas para trocar a cor do tema do app." },
                { id: "C", text: "Interfaces preditivas e agentes autônomos que executam tarefas e simplificam a vida do usuário de forma inteligente." },
            ],
            explanation:
                "Perfeito! Os novos apps integram a IA no coração do sistema para resolver problemas complexos com autonomia e fluidez.",
        },
    },
};
