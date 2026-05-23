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
};
