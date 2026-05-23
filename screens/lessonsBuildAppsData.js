// screens/lessonsBuildAppsData.js

export const lessonsBuildAppsData = {
    app1: {
        title: "Botões Estilizados e Funcionais",
        subtitle: "PROJETO 1 - O Clique Perfeito",
        content:
            "Em aplicativos, os botões são criados usando o componente 'TouchableOpacity'. Ele recebe esse nome porque, quando o usuário toca nele, sua opacidade diminui levemente, dando um feedback visual de clique. Para estilizar, usamos 'borderRadius' para arredondar as bordas, 'backgroundColor' para a cor de fundo e a propriedade 'onPress' para disparar uma função ou navegar de tela.",
        iaInsight:
            "💡 Dica Dev: Sempre use um tamanho mínimo de 48px para seus botões. Isso garante que qualquer pessoa consiga clicar sem errar o alvo!",
        quiz: {
            question: "Qual componente do React Native usamos para criar um botão que muda de opacidade ao ser tocado?",
            options: [
                { id: "A", text: "<View style={styles.button}>" },
                { id: "B", text: "<TouchableOpacity onPress={...}>" },
                { id: "C", text: "<Text style={styles.button}>" },
            ],
            correctId: "B",
            explanation:
                "Isso mesmo! O <TouchableOpacity> é o componente ideal para criar botões customizados e funcionais com feedback visual.",
        },
    },
    app2: {
        title: "Criando uma Tela de Login",
        subtitle: "PROJETO 2 - Segurança e Inputs",
        content:
            "Uma tela de login precisa de campos para capturar o que o usuário digita. Para isso, usamos o 'TextInput'. Para o campo de senha, ativamos a propriedade 'secureTextEntry={true}', que transforma as letras em pontinhos pretos automaticamente, protegendo os dados de olhares curiosos.",
        iaInsight:
            "💡 Dica Dev: Use a propriedade 'placeholder' para exibir aquele texto cinza claro dentro do campo (ex: 'Digite seu e-mail') antes do usuário começar a escrever.",
        quiz: {
            question: "Como fazemos para ocultar o texto digitado em um campo de senha no TextInput?",
            options: [
                { id: "A", text: "Usando a propriedade secureTextEntry={true}." },
                { id: "B", text: "Mudando a cor do texto para a mesma cor do fundo." },
                { id: "C", text: "Apagando o texto assim que o usuário digita." },
            ],
            correctId: "A",
            explanation: "Perfeito! A propriedade secureTextEntry é o padrão nativo para mascarar campos de senhas.",
        },
    },
    app3: {
        title: "Formulários Inteligentes com Validação",
        subtitle: "PROJETO 3 - Coletando Dados do Usuário",
        content:
            "Formulários coletam dados como Nome, Idade e Telefone. Para gerenciar o que é digitado, usamos o estado do React ('useState'). Quando o usuário clica em 'Enviar', fazemos uma validação simples: se o campo estiver vazio, usamos um 'Alert.alert()' para avisar que o preenchimento é obrigatório.",
        iaInsight:
            "💡 Dica Dev: Sempre limpe os espaços em branco que o usuário digita por engano usando a função '.trim()' do JavaScript antes de salvar os dados.",
        quiz: {
            question:
                "O que usamos no React para guardar e atualizar em tempo real o texto que o usuário digita em um formulário?",
            options: [
                { id: "A", text: "Uma folha de estilo StyleSheet." },
                { id: "B", text: "O gancho (hook) useState." },
                { id: "C", text: "Apenas uma variável comum do tipo let." },
            ],
            correctId: "B",
            explanation:
                "Exatamente! O useState cria uma variável de estado que redesenha a tela sempre que o texto muda, mantendo os dados atualizados.",
        },
    },
    app4: {
        title: "Construindo uma Calculadora",
        subtitle: "PROJETO 4 - Lógica e Operações Matemáticas",
        content:
            "Para criar uma calculadora funcional, organizamos os botões numéricos em uma grade (Grid) usando propriedades do Flexbox como 'flexDirection: row' e 'flexWrap: wrap'. Quando o usuário clica nas operações (+, -, *, /), convertemos os textos dos campos com 'parseInt()' ou 'parseFloat()' para que o JavaScript faça a conta matemática real em vez de apenas juntar os textos.",
        iaInsight:
            "💡 Dica Dev: No JavaScript, se você somar duas strings ('2' + '2'), o resultado será '22'. Por isso, converter para número antes da soma é vital!",
        quiz: {
            question: "Por que precisamos converter o valor do TextInput antes de fazer uma operação matemática?",
            options: [
                { id: "A", text: "Porque o TextInput sempre devolve o valor como Texto (String)." },
                { id: "B", text: "Porque números ocupam mais espaço na tela do celular." },
                { id: "C", text: "Porque o React Native não aceita o símbolo de adição." },
            ],
            correctId: "A",
            explanation:
                "Isso mesmo! Tudo o que vem do TextInput vem como texto. Precisamos converter para número para fazer cálculos reais.",
        },
    },
    app5: {
        title: "Exibindo um Calendário Interativo",
        subtitle: "PROJETO 5 - Manipulando Datas",
        content:
            "Exibir calendários ou seletores de data no celular fica muito mais fácil quando usamos componentes prontos da comunidade (como o datetimepicker). Aprendemos a capturar a data selecionada pelo usuário, formatá-la no padrão brasileiro (DD/MM/AAAA) e exibi-la em um Text elegante na tela.",
        iaInsight:
            "💡 Dica Dev: Lembre-se que no JavaScript os meses começam no 0 (Janeiro é 0, Fevereiro é 1). Sempre some +1 na hora de mostrar o mês!",
        quiz: {
            question: "No JavaScript, qual número representa o mês de Janeiro ao manipular datas nativas?",
            options: [
                { id: "A", text: "O número 1." },
                { id: "B", text: "O número 0." },
                { id: "C", text: "O número 12." },
            ],
            correctId: "B",
            explanation:
                "Perfeito! A contagem dos meses no objeto Date do JavaScript é baseada em índice zero, logo Janeiro é 0.",
        },
    },
    app6: {
        title: "Criando um Joguinho de Matemática",
        subtitle: "PROJETO 6 - Gamificação e Números Aleatórios",
        content:
            "Para criar um joguinho divertido, geramos dois números aleatórios usando 'Math.floor(Math.random() * 10)'. O app exibe a pergunta na tela (ex: 'Quanto é 5 + 3?'). Se o aluno digitar o resultado correto, o app atualiza o placar de pontos e gera um novo desafio na hora!",
        iaInsight:
            "💡 Dica Dev: Jogos educativos precisam de feedback imediato. Sons simples ou cores (verde para acerto, vermelho para erro) aumentam muito o engajamento!",
        quiz: {
            question: "Qual função do JavaScript usamos para gerar um número aleatório?",
            options: [
                { id: "A", text: "Math.random()" },
                { id: "B", text: "Math.sqrt()" },
                { id: "C", text: "Math.round()" },
            ],
            correctId: "A",
            explanation:
                "Excelente! Math.random() gera um número quebrado entre 0 e 1, que multiplicamos e arredondamos para criar nossos desafios dinâmicos.",
        },
    },
};
