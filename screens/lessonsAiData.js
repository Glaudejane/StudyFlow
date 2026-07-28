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
};
