// lessonsPythonData.js

export const lessonsPythonData = {
    py1: {
        title: "Primeiros Passos com Python",
        subtitle: "Módulo 1 • Dominando Python",
        content:
            "Bem-vinda ao mundo do Python!\n\nPython é uma das linguagens mais queridas do mundo por um motivo simples: sua sintaxe é limpa e muito parecida com a escrita em inglês. No desenvolvimento de software, nós usamos variáveis para armazenar informações na memória do computador, como se fossem caixas etiquetadas.\n\nPor exemplo, quando escrevemos 'nome = \"Glaudejane\"', criamos uma caixa chamada 'nome' que guarda um texto (String). Se escrevemos 'idade = 50', guardamos um número inteiro (Integer). Entender esses tipos de dados é a base para construir qualquer lógica ou aplicativo de sucesso!",
        iaInsight:
            "🤖 Insight de IA: Em Python, você não precisa dizer se a variável é texto ou número. Ele descobre sozinho! Isso se chama Tipagem Dinâmica.",
        quiz: {
            question:
                "Qual das seguintes alternativas representa a criação correta de uma variável de texto (String) em Python?",
            correctId: "A",
            options: [
                { id: "A", text: 'nome = "Francisca"' },
                { id: "B", text: "string nome = 'Francisca';" },
                { id: "C", text: "caixa.texto(Francisca)" },
            ],
            explanation:
                "Exatamente! Em Python, basta colocar o nome da variável, o sinal de igual (=) e o texto entre aspas. Sem ponto e vírgula, sem complicações!",
        },
    },
    py2: {
        title: "Tomada de Decisões",
        subtitle: "Módulo 2 • Dominando Python",
        content:
            "Os programas de verdade tomam decisões o tempo todo baseados em condições. Para fazer o Python analisar uma situação e escolher um caminho, usamos os comandos If (Se), Elif (Senão Se) e Else (Senão).\n\nImagine um sistema de faltas ou notas: SE a nota for maior ou igual a 7, o aluno está aprovado; SENÃO SE a nota for maior que 5, está de recuperação; SENÃO, está reprovado. A indentação (aquele espacinho no começo da linha) é obrigatória no Python para ele entender o que pertence a cada decisão!",
        iaInsight:
            "🤖 Insight de IA: Lembre-se sempre de colocar os dois pontos (:) no final do 'if' e do 'else'. Eles abrem o bloco de execução do código.",
        quiz: {
            question: "Para que serve o comando 'elif' em uma estrutura condicional no Python?",
            correctId: "C",
            options: [
                { id: "A", text: "Para finalizar o programa imediatamente." },
                { id: "B", text: "Para repetir um bloco de código várias vezes." },
                { id: "C", text: "Para testar uma nova condição caso a primeira condição do 'if' seja falsa." },
            ],
            explanation:
                "Perfeito! O 'elif' é a contração de 'else if'. Ele serve para encadear várias verificações em ordem antes de cair no caso genérico do 'else'.",
        },
    },
    py3: {
        title: "Estruturas de Repetição (Loops)",
        subtitle: "Módulo 3 • Dominando Python",
        content:
            "Computadores são excelentes em repetir tarefas sem reclamar. No Python, temos duas ferramentas principais de repetição: o 'for' e o 'while'.\n\nO loop 'for' é usado quando sabemos exatamente quantas vezes queremos repetir algo (por exemplo, enviar um e-mail para uma lista de 10 alunos). Já o loop 'while' continua rodando enquanto uma condição for verdadeira (por exemplo, mantenha o aplicativo aberto enquanto o usuário não clicar no botão sair).",
        iaInsight:
            "🤖 Insight de IA: Cuidado com o 'while'! Se a condição nunca mudar para falsa, seu código entra em um loop infinito e trava o sistema.",
        quiz: {
            question:
                "Se você precisa percorrer todos os itens de uma lista de nomes e exibir cada um na tela, qual é a estrutura de repetição mais direta e recomendada?",
            correctId: "B",
            options: [
                { id: "A", text: "A estrutura condicional If/Else." },
                { id: "B", text: "O loop 'for nome in lista_nomes:'." },
                { id: "C", text: "Um comando de parada 'break'." },
            ],
            explanation:
                "Isso mesmo! O loop 'for' em Python foi desenhado perfeitamente para percorrer coleções e listas de elementos elemento por elemento de maneira muito legível.",
        },
    },
    py4: {
        title: "Listas e Dicionários",
        subtitle: "Módulo 4 • Dominando Python",
        content:
            "Até agora guardamos dados isolados. Mas e se precisarmos guardar um conjunto de dados? Usamos Listas e Dicionários!\n\nUma Lista armazena elementos de forma ordenada entre colchetes (ex: compras = ['Arroz', 'Feijão']). Um Dicionário armazena dados no formato de Chave e Valor entre chaves (ex: aluno = {'nome': 'Mateus', 'modulo': 4}). O dicionário é perfeito para mapear propriedades de um objeto real, como os dados cadastrais do seu aplicativo!",
        iaInsight:
            "🤖 Insight de IA: Listas usam números (índices começando do 0) para achar os dados. Dicionários usam palavras-chave específicas que você define.",
        quiz: {
            question: "Como você estrutura um Dicionário em Python para armazenar o título e o autor de um livro?",
            correctId: "A",
            options: [
                { id: "A", text: "livro = {'titulo': 'Lukito Perikito', 'autor': 'Francisca'}" },
                { id: "B", text: "livro = ['titulo' -> 'Lukito Perikito']" },
                { id: "C", text: "livro = (titulo = 'Lukito Perikito')" },
            ],
            explanation:
                "Excelente! Dicionários usam chaves {} e separam a propriedade (chave) do conteúdo (valor) usando dois pontos. Perfeito para estruturar objetos complexos!",
        },
    },
    py5: {
        title: "Funções",
        subtitle: "Módulo 5 • Dominando Python",
        content:
            "Imagine que você precisa calcular o desconto de um produto em vários lugares do app. Em vez de repetir o mesmo código toda hora, você cria uma Função: um bloco de código com nome, que você escreve uma vez e usa quantas vezes quiser.\n\nEm Python, usamos a palavra 'def' para criar uma função (ex: def saudacao(nome):). Os dados que a função recebe são chamados de parâmetros, e o resultado que ela devolve usa a palavra 'return'. Depois, para usá-la, basta chamá-la pelo nome: saudacao('Ana'). O recuo do código (a indentação) mostra o que pertence à função.",
        iaInsight:
            "🤖 Insight de IA: Se uma função está fazendo coisas demais, peça para a IA ajudar a dividir em funções menores. Uma boa função faz uma coisa só, e tem um nome que explica isso.",
        quiz: {
            question: "Qual palavra usamos em Python para criar uma função?",
            correctId: "B",
            options: [
                { id: "A", text: "function nome():" },
                { id: "B", text: "def nome():" },
                { id: "C", text: "create nome():" },
            ],
            explanation:
                "Isso mesmo! Em Python, 'def' (de 'define') é a palavra que cria uma função. Depois é só chamá-la pelo nome sempre que precisar.",
        },
    },
    py6: {
        title: "Strings e Métodos de Texto",
        subtitle: "Módulo 6 • Dominando Python",
        content:
            "Strings são textos entre aspas, e quase todo app lida com elas: nomes, mensagens, e-mails. Python tem vários métodos prontos para trabalhar com texto. Por exemplo, 'Ana'.upper() devolve 'ANA', e '  oi  '.strip() remove os espaços das pontas. O método split() separa um texto em uma lista: 'a,b,c'.split(',') vira ['a', 'b', 'c'].\n\nPara montar frases com variáveis, use f-strings: coloque um 'f' antes das aspas e escreva as variáveis entre chaves. Se nome = 'Ana', então f'Olá, {nome}!' vira 'Olá, Ana!'. É a forma mais limpa de juntar texto e dados.",
        iaInsight:
            "🤖 Insight de IA: Em vez de juntar textos com o sinal de +, prefira f-strings. O código fica mais legível, e tanto a IA quanto outras pessoas entendem mais rápido o que você quis fazer.",
        quiz: {
            question: "Qual será o resultado de f'Olá, {nome}!' se nome = 'Ana'?",
            correctId: "C",
            options: [
                { id: "A", text: "Olá, {nome}!" },
                { id: "B", text: "Olá, nome!" },
                { id: "C", text: "Olá, Ana!" },
            ],
            explanation:
                "Exatamente! A f-string troca o que está entre chaves pelo valor da variável. Por isso {nome} vira Ana.",
        },
    },
    py7: {
        title: "Tratamento de Erros",
        subtitle: "Módulo 7 • Dominando Python",
        content:
            "Todo programa encontra erros: um número digitado como texto, um arquivo que não existe, uma divisão por zero. Se você não se preparar, o programa trava. Em Python, usamos 'try' e 'except' para lidar com isso sem quebrar.\n\nO código que pode dar problema vai dentro do 'try'. Se der erro, o Python pula para o 'except' e executa o plano B. Por exemplo: try: numero = int(texto) e, no except ValueError: print('Digite só números!'). Assim, em vez de travar, o app responde com uma mensagem amigável. É isso que faz um aplicativo parecer profissional.",
        iaInsight:
            "🤖 Insight de IA: Quando um erro aparecer, copie a mensagem inteira (a última linha costuma dizer o tipo, como ValueError) e peça para a IA explicar a causa antes de pedir a correção. Entender o erro ensina mais do que só consertar.",
        quiz: {
            question: "Para que serve o bloco 'except' em Python?",
            correctId: "A",
            options: [
                { id: "A", text: "Para executar um plano B quando acontece um erro dentro do 'try'" },
                { id: "B", text: "Para repetir o código do 'try' para sempre" },
                { id: "C", text: "Para apagar o erro do código-fonte" },
            ],
            explanation:
                "Perfeito! O 'except' recebe o controle quando algo dá errado no 'try', e deixa seu programa responder com calma em vez de travar.",
        },
    },
    py8: {
        title: "Arquivos e Módulos",
        subtitle: "Módulo 8 • Dominando Python",
        content:
            "Até agora, tudo que seu programa guardava sumia quando ele fechava. Para guardar dados de forma permanente, usamos arquivos. Em Python, a função open() abre um arquivo, e o jeito mais seguro é usar 'with', que fecha o arquivo sozinho ao terminar: with open('notas.txt', 'w') as arquivo: arquivo.write('Oi!'). O 'w' significa escrever, e o 'r' significa ler.\n\nOutra ideia poderosa são os módulos: código pronto, feito por outras pessoas, que você traz para o seu programa com 'import'. Por exemplo, import random dá acesso a sorteios, e import math a funções matemáticas. Você não precisa reinventar nada: Python já vem com uma biblioteca enorme, e existem milhares de outras para instalar.",
        iaInsight:
            "🤖 Insight de IA: Antes de instalar uma biblioteca nova, pergunte à IA se o Python já tem algo pronto para o que você precisa. Muitas vezes a solução já vem de graça com a linguagem.",
        quiz: {
            question: "Como trazemos o módulo 'random' para usar no seu programa?",
            correctId: "C",
            options: [
                { id: "A", text: "include random" },
                { id: "B", text: "require random" },
                { id: "C", text: "import random" },
            ],
            explanation:
                "Isso mesmo! Em Python usamos 'import' para trazer módulos prontos, e a partir daí você já pode usar tudo o que eles oferecem.",
        },
    },
};
