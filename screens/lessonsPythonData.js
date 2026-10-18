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
    py9: {
        title: "Classes e Objetos",
        subtitle: "Módulo 9 • Dominando Python",
        content:
            "Até agora usamos dicionários para guardar os dados de um aluno ou de um livro. Mas e se quisermos guardar os dados E também as ações juntos? Para isso existe a Orientação a Objetos. Uma Classe é um molde: ela descreve como algo deve ser. Um Objeto é uma cópia criada a partir desse molde.\n\nEm Python, criamos uma classe com a palavra 'class'. O método especial __init__ prepara cada objeto novo, e o 'self' representa o próprio objeto. Exemplo: class Aluno: def __init__(self, nome): self.nome = nome. Para criar um objeto: ana = Aluno('Ana'). Agora ana.nome vale 'Ana'. Você pode criar quantos alunos quiser, todos seguindo o mesmo molde.",
        iaInsight:
            "🤖 Insight de IA: Pense nas classes como os 'substantivos' do seu app (Aluno, Produto, Pedido) e nos métodos como os 'verbos' (comprar, estudar, enviar). Se você consegue descrever seu app assim, a IA te ajuda a transformar isso em código.",
        quiz: {
            question: "Em Python, o que é uma Classe?",
            correctId: "B",
            options: [
                { id: "A", text: "Uma variável que guarda apenas números" },
                { id: "B", text: "Um molde que descreve como os objetos devem ser" },
                { id: "C", text: "Um comando que repete um código várias vezes" },
            ],
            explanation:
                "Isso mesmo! A classe é o molde, e cada objeto criado a partir dela é uma cópia que segue esse molde, com seus próprios dados.",
        },
    },
    py10: {
        title: "Mini Projeto: Quiz no Terminal",
        subtitle: "Módulo 10 • Dominando Python",
        content:
            "Chegou a hora de juntar tudo! Vamos planejar um mini jogo de quiz que roda no terminal. Ele vai usar quase tudo que você aprendeu: uma lista de dicionários com as perguntas e respostas (módulo 4), um loop for para percorrer cada pergunta (módulo 3), um if para conferir se a resposta está certa (módulo 2), uma função para fazer cada pergunta (módulo 5), f-strings para mostrar a pontuação (módulo 6) e try e except para lidar com respostas inválidas (módulo 7).\n\nO segredo dos projetos maiores é dividir em partes pequenas: primeiro as perguntas, depois a função que pergunta, depois o loop, depois a pontuação. Teste cada parte antes de juntar. Assim, quando algo der errado, você sabe exatamente onde procurar.",
        iaInsight:
            "🤖 Insight de IA: Ao pedir ajuda da IA em um projeto, peça uma parte de cada vez e teste antes de pedir a próxima. Assim você entende o que foi escrito e encontra os erros bem mais rápido.",
        quiz: {
            question: "Qual é a melhor estratégia para construir um projeto maior?",
            correctId: "A",
            options: [
                { id: "A", text: "Dividir em partes pequenas e testar cada uma antes de juntar" },
                { id: "B", text: "Escrever tudo de uma vez e só testar no final" },
                { id: "C", text: "Copiar um código pronto sem tentar entender" },
            ],
            explanation:
                "Perfeito! Dividir e testar por partes é o que programadores experientes fazem. Quando algo quebra, você já sabe em qual pedaço procurar.",
        },
    },
    py11: {
        title: "Manipulação de Arquivos e TXT",
        subtitle: "Módulo 11 • Dominando Python",
        content:
            "No módulo 8 você viu o básico de arquivos. Agora vamos mais fundo. O segundo argumento do open() é o modo: 'r' lê o arquivo, 'w' escreve apagando tudo o que havia antes, e 'a' (de append) escreve no final, sem apagar nada. Escolher o modo errado é um dos erros mais comuns: abrir com 'w' um arquivo em que você só queria acrescentar uma linha faz todo o conteúdo antigo desaparecer.\n\nPara ler, você pode usar arquivo.read() para pegar o texto todo, ou percorrer o arquivo linha por linha com um loop: for linha in arquivo: print(linha.strip()). O strip() tira o 'enter' do fim de cada linha. E lembre do with: ele fecha o arquivo sozinho, mesmo se acontecer um erro no meio do caminho.",
        iaInsight:
            "🤖 Insight de IA: Ao pedir para a IA um código que mexe com arquivos, diga o que não pode ser perdido (por exemplo, 'não apague o conteúdo atual'). Isso evita que ela escolha o modo 'w' e sobrescreva seus dados sem você perceber.",
        quiz: {
            question: "Você quer acrescentar uma linha no fim de um arquivo, sem apagar o que já existe. Qual modo usar?",
            correctId: "C",
            options: [
                { id: "A", text: "'w' (write)" },
                { id: "B", text: "'r' (read)" },
                { id: "C", text: "'a' (append)" },
            ],
            explanation:
                "Isso mesmo! O modo 'a' (append) acrescenta no final. O 'w' apagaria todo o conteúdo anterior, e o 'r' só permite ler.",
        },
    },
    py12: {
        title: "Trabalhando com Dados em JSON",
        subtitle: "Módulo 12 • Dominando Python",
        content:
            "JSON é o formato que a internet usa para trocar dados entre sistemas. Ele se parece com um dicionário Python: pares de chave e valor entre chaves, como {'nome': 'Ana', 'idade': 20}. Quase todo app que conversa com um servidor recebe e envia dados nesse formato. (No JSON de verdade, as aspas são sempre duplas.)\n\nEm Python, a biblioteca json faz a tradução. Com import json, o json.dumps(dicionario) transforma um dicionário em texto JSON, e o json.loads(texto) faz o caminho contrário, transformando o texto de volta em dicionário. O 's' de dumps e loads vem de 'string' (texto). Para trabalhar direto com arquivos, existem json.dump() e json.load(), sem o 's' no final.",
        iaInsight:
            "🤖 Insight de IA: Quando uma API devolver um JSON gigante, cole um exemplo na IA e peça para ela explicar a estrutura e mostrar como acessar cada campo em Python. Economiza muito tempo de tentativa e erro.",
        quiz: {
            question: "O que faz o json.loads(texto) em Python?",
            correctId: "A",
            options: [
                { id: "A", text: "Transforma um texto JSON em um dicionário Python" },
                { id: "B", text: "Transforma um dicionário Python em texto JSON" },
                { id: "C", text: "Apaga um arquivo JSON do computador" },
            ],
            explanation:
                "Exatamente! O loads lê um texto JSON e devolve um dicionário. O caminho contrário, de dicionário para texto, é o dumps.",
        },
    },
    py13: {
        title: "Herança: Reaproveitando Classes",
        subtitle: "Módulo 13 • Dominando Python",
        content:
            "No módulo 9 você criou classes. Agora imagine que seu app tem Aluno e Professor: os dois têm nome e e-mail, mas cada um tem coisas só suas. Em vez de repetir código, usamos a Herança: uma classe filha herda tudo de uma classe mãe e acrescenta o que for só dela.\n\nEm Python, colocamos a classe mãe entre parênteses: class Professor(Pessoa):. O professor passa a ter tudo o que a Pessoa tem. Dentro da filha, super().__init__(nome) chama o início da classe mãe para preparar os dados em comum. Se a filha criar um método com o mesmo nome de um da mãe, o dela é o que vale: isso se chama sobrescrever, e é assim que objetos diferentes respondem do seu jeito à mesma ação.",
        iaInsight:
            "🤖 Insight de IA: Antes de criar uma classe filha, pergunte à IA se a relação é mesmo de 'é um' (Professor é uma Pessoa). Quando for só 'tem um' (um Pedido tem um Cliente), costuma ser melhor guardar o objeto dentro do outro, em vez de herdar.",
        quiz: {
            question: "Em class Professor(Pessoa):, o que significa o (Pessoa)?",
            correctId: "B",
            options: [
                { id: "A", text: "Professor é uma classe independente, sem relação com Pessoa" },
                { id: "B", text: "Professor herda tudo o que a classe Pessoa tem" },
                { id: "C", text: "Pessoa herda tudo o que a classe Professor tem" },
            ],
            explanation:
                "Isso mesmo! A classe entre parênteses é a mãe. Professor herda os atributos e métodos de Pessoa, e ainda pode acrescentar os seus.",
        },
    },
};
