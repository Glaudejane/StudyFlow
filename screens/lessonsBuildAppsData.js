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
    app7: {
        title: "Lista de Tarefas com AsyncStorage",
        subtitle: "PROJETO 7 • Persistência de Dados Locais",
        content:
            "Neste projeto, você aprende a criar um app de To-Do list que guarda os dados permanentemente no dispositivo usando AsyncStorage. Quando o usuário fecha o aplicativo ou desliga o celular, as tarefas não somem. O fluxo consiste em converter o array de tarefas para JSON string na hora de salvar e converter de volta para objeto com 'JSON.parse()' na hora de carregar.",
        iaInsight:
            "💡 Dica Dev: Chaves do AsyncStorage devem seguir convenções claras como '@studyflow:tarefas' para evitar conflitos com outras bibliotecas.",
        quiz: {
            question: "Qual formato de dado o AsyncStorage exige ao salvar informações no dispositivo?",
            options: [
                { id: "A", text: "Apenas Strings (texto)" },
                { id: "B", text: "Arrays de objetos nativos do JavaScript" },
                { id: "C", text: "Arquivos de imagem em PNG" },
            ],
            correctId: "A",
            explanation:
                "Isso mesmo! O AsyncStorage aceita apenas texto/string, por isso usamos 'JSON.stringify()' antes de salvar dados complexos.",
        },
    },

    app8: {
        title: "Consumindo API de Clima em Tempo Real",
        subtitle: "PROJETO 8 • Requisições com Fetch e Async/Await",
        content:
            "Aprenda a conectar seu aplicativo ao mundo exterior! Usando a função nativa 'fetch()' e 'async/await', o app busca a temperatura e a condição do tempo atualizadas diretamente de uma API pública de meteorologia. Mostramos também como tratar estados de carregamento ('ActivityIndicator') enquanto os dados viajam pela internet.",
        iaInsight:
            "💡 Dica Dev: Sempre trate possíveis falhas de rede com blocos 'try...catch' para evitar que o aplicativo feche sozinho na mão do usuário.",
        quiz: {
            question: "Para que serve a palavra-chave 'await' em uma chamada de API?",
            options: [
                { id: "A", text: "Para reiniciar o aplicativo imediatamente" },
                { id: "B", text: "Pausa a execução até que a promessa (Promise) de dados da internet seja resolvida" },
                { id: "C", text: "Apaga a memória cache do aparelho" },
            ],
            correctId: "B",
            explanation:
                "Excelente! O 'await' aguarda os dados chegarem da rede antes de tentar exibi-los na tela do usuário.",
        },
    },

    app9: {
        title: "Navegação por Abas (Tab Navigation)",
        subtitle: "PROJETO 9 • Arquitetura de Telas com Bottom Tabs",
        content:
            "A maioria dos grandes aplicativos (como Instagram e WhatsApp) utiliza navegação por abas inferiores. Neste projeto, você vai configurar o '@react-navigation/bottom-tabs' para permitir que o usuário alterne rapidamente entre a tela Home, Notificações e Perfil, integrando ícones personalizados da biblioteca Vector Icons em cada aba.",
        iaInsight:
            "💡 Dica Dev: Mantenha no máximo de 3 a 5 abas inferiores no app. Muitas abas deixam o layout poluído e prejudicam a usabilidade no celular.",
        quiz: {
            question: "Qual é o objetivo principal do Bottom Tab Navigation?",
            options: [
                { id: "A", text: "Conectar o aplicativo com bancos de dados relacionais" },
                { id: "B", text: "Permitir a alternância rápida e intuitiva entre as telas principais no rodapé do app" },
                { id: "C", text: "Aumentar a velocidade do processador do celular" },
            ],
            correctId: "B",
            explanation:
                "Exatamente! As abas inferiores oferecem acesso fácil com o polegar aos módulos mais importantes do app.",
        },
    },

    app10: {
        title: "Modo Escuro (Dark Mode) Dinâmico",
        subtitle: "PROJETO 10 • System Theme & Context API",
        content:
            "O Modo Escuro é uma funcionalidade indispensável em apps modernos. Neste projeto, você vai aprender a usar o hook 'useColorScheme()' do React Native para identificar se o celular do usuário está no modo escuro e alterar as cores da interface automaticamente, além de permitir a troca manual por um interruptor (Switch).",
        iaInsight:
            "💡 Dica Dev: Use variáveis organizadas para suas paletas de cores (ex: `colors.background`, `colors.text`) em vez de chumbá-las direto no estilo do componente.",
        quiz: {
            question: "Qual hook nativo do React Native detecta o tema ativo do sistema operacional do celular?",
            options: [
                { id: "A", text: "useColorScheme()" },
                { id: "B", text: "useNavigation()" },
                { id: "C", text: "useState()" },
            ],
            correctId: "A",
            explanation:
                "Perfeito! O 'useColorScheme()' retorna se o dispositivo está operando no tema 'light' ou 'dark'.",
        },
    },

    app11: {
        title: "Uso da Câmera e Galeria com Expo ImagePicker",
        subtitle: "PROJETO 11 • Recursos Nativos do Dispositivo",
        content:
            "Aplicativos modernos frequentemente precisam tirar fotos de perfil ou enviar comprovantes. Neste projeto, você vai integrar o 'expo-image-picker', lidando com o pedido obrigatório de permissão da câmera e da galeria do smartphone e renderizando a foto escolhida na tela dentro de um componente de Imagem.",
        iaInsight:
            "💡 Dica Dev: Solicite permissões ao usuário apenas no momento exato em que ele clicar para tirar ou escolher a foto, explicando o motivo.",
        quiz: {
            question: "Por que devemos pedir permissão antes de acessar a câmera ou a galeria?",
            options: [
                { id: "A", text: "Porque a foto fica mais nítida após a permissão" },
                { id: "B", text: "Para respeitar a privacidade e segurança do usuário e cumprir as regras do iOS e Android" },
                { id: "C", text: "Para evitar o consumo de dados móveis 4G/5G" },
            ],
            correctId: "B",
            explanation:
                "Correto! Sistemas operacionais bloqueiam o acesso a fotos e câmeras se a permissão explícita não for concedida pelo usuário.",
        },
    },

    app12: {
        title: "Leitor de QR Code e Código de Barras",
        subtitle: "PROJETO 12 • Leitura de Dados Visuais com Expo Camera",
        content:
            "Aprenda a construir um escaneador versátil de QR Codes para validação de ingressos, leitura de links e pagamentos via PIX. Usando o módulo de câmera do Expo, ativamos o leitor de código de barras em tempo real, capturando o conteúdo codificado instantaneamente no estado da aplicação.",
        iaInsight:
            "💡 Dica Dev: Adicione uma animação visual de mira no centro da tela para orientar o usuário a posicionar o QR Code no local correto.",
        quiz: {
            question: "O que o leitor de QR Code extrai ao escanear uma imagem válida?",
            options: [
                { id: "A", text: "Sempre um código binário ilegível" },
                { id: "B", text: "O texto, URL ou código criptografado contido naquela imagem matriz" },
                { id: "C", text: "O nível de carga da bateria do celular" },
            ],
            correctId: "B",
            explanation:
                "Exatamente! O QR Code nada mais é do que um conjunto visual que armazena uma string de texto codificada.",
        },
    },

    app13: {
        title: "Notificações Push com Expo Notifications",
        subtitle: "PROJETO 13 • Engajamento e Lembretes Diários",
        content:
            "Manter o usuário engajado é o segredo dos apps de sucesso. Neste módulo, você vai configurar lembretes locais agendados usando 'expo-notifications'. O aplicativo será capaz de disparar alertas (ex: 'Hora de estudar!') mesmo quando estiver fechado em segundo plano.",
        iaInsight:
            "💡 Dica Dev: Notificações em excesso levam o usuário a desinstalar o app. Ofereça nas configurações uma opção para ele gerenciar a frequência dos avisos.",
        quiz: {
            question: "Qual o benefício das Notificações Locais Agendadas?",
            options: [
                { id: "A", text: "Não dependem de servidores externos para disparar lembretes na hora programada" },
                { id: "B", text: "Funcionam apenas quando o celular está ligado na tomada" },
                { id: "C", text: "Aumentam a resolução das imagens do app" },
            ],
            correctId: "A",
            explanation:
                "Isso mesmo! Notificações locais são agendadas diretamente no relógio interno do próprio sistema operacional do aparelho.",
        },
    },

    app14: {
        title: "Autenticação Biométrica (Face ID / Impressão Digital)",
        subtitle: "PROJETO 14 • Segurança Avançada com LocalAuthentication",
        content:
            "Dê um toque profissional de segurança ao seu aplicativo de finanças ou dados pessoais. Com a biblioteca 'expo-local-authentication', seu app desbloqueia telas sigilosas utilizando a biometria digital ou o reconhecimento facial (Face ID) cadastrados no próprio smartphone.",
        iaInsight:
            "💡 Dica Dev: Sempre forneça um plano B (como senha numérica/PIN) caso o leitor biométrico do celular da pessoa esteja danificado.",
        quiz: {
            question: "Para que serve a biblioteca Local Authentication em apps React Native?",
            options: [
                { id: "A", text: "Para criptografar fotos salvas no cartão SD" },
                { id: "B", text: "Para validar a identidade do usuário usando a biometria ou Face ID do celular" },
                { id: "C", text: "Para traduzir o aplicativo para outros idiomas" },
            ],
            correctId: "B",
            explanation:
                "Perfeito! A biblioteca aproveita a segurança do próprio hardware do smartphone para autenticar a pessoa com facilidade.",
        },
    },

    app15: {
        title: "Gerenciador de Estado com Zustand ou Redux Toolkit",
        subtitle: "PROJETO 15 • Gerenciamento Global de Dados",
        content:
            "Conforme o app cresce, passar informações de tela em tela por 'props' fica confuso (Prop Drilling). Neste projeto, criamos uma 'store' global para armazenar os dados do usuário autenticado e o carrinho de compras, permitindo que qualquer componente do app leia e altere esses dados com facilidade.",
        iaInsight:
            "💡 Dica Dev: O Zustand tornou-se extremamente popular no ecossistema React Native por ser muito leve e não exigir configurações pesadas.",
        quiz: {
            question: "Qual problema o gerenciamento de estado global resolve em um app grande?",
            options: [
                { id: "A", text: "Diminui o tamanho do arquivo APK baixado na loja" },
                { id: "B", text: "Evita o repasse excessivo de propriedades (prop drilling) entre telas distantes" },
                { id: "C", text: "Aumenta o volume do alto-falante do celular" },
            ],
            correctId: "B",
            explanation:
                "Correto! O estado global centraliza as informações para que qualquer tela acesse os dados diretamente.",
        },
    },

    app16: {
        title: "Integração de Geolocalização e Mapas Nativos",
        subtitle: "PROJETO 16 • Mapas e GPS com React Native Maps",
        content:
            "Crie um aplicativo no estilo Uber ou iFood! Neste módulo, você utilizará a biblioteca 'react-native-maps' e o 'expo-location' para capturar as coordenadas atuais do GPS (latitude e longitude) e desenhar um pino interativo (Marker) em cima do mapa nativo do dispositivo.",
        iaInsight:
            "💡 Dica Dev: Para economizar a bateria do aparelho, configure a precisão da localização do GPS de acordo com a necessidade real do seu app.",
        quiz: {
            question: "Quais são os dois valores fundamentais para posicionar um ponto em um mapa digital?",
            options: [
                { id: "A", text: "Altura e Largura" },
                { id: "B", text: "Latitude e Longitude" },
                { id: "C", text: "Pixels e DPI" },
            ],
            correctId: "B",
            explanation:
                "Exatamente! As coordenadas geográficas Globais de Latitude e Longitude identificam qualquer ponto no planeta.",
        },
    },

    app17: {
        title: "Chatbot Mobile de IA Conectado à API",
        subtitle: "PROJETO 17 • Assistente Pessoal de IA no Celular",
        content:
            "Neste projeto prático, você vai construir uma interface de chat completa com lista de mensagens rolável (`FlatList`) e caixa de envio de texto. O app envia a pergunta para uma API de Inteligência Artificial e renderiza a resposta na bolha de texto do assistente com animações de carregamento.",
        iaInsight:
            "💡 Dica Dev: Use a propriedade `inverted` na `FlatList` para que as novas mensagens apareçam suavemente na parte inferior da tela, como no WhatsApp.",
        quiz: {
            question: "Qual propriedade do componente FlatList facilita o desenvolvimento de telas de conversa/chat?",
            options: [
                { id: "A", text: "inverted" },
                { id: "B", text: "horizontal" },
                { id: "C", text: "numColumns" },
            ],
            correctId: "A",
            explanation:
                "Perfeito! A propriedade 'inverted' inverte a ordem de renderização da lista, mantendo as mensagens recentes coladas no rodapé da tela.",
        },
    },

    app18: {
        title: "App Offline-First com WatermelonDB ou Realm",
        subtitle: "PROJETO 18 • Bancos de Dados Locais de Alta Performance",
        content:
            "E se o usuário estiver no metrô ou sem internet? Aplicativos profissionais utilizam o conceito 'Offline-First'. Neste projeto, gravamos e consultamos dados pesados localmente usando um banco SQLite/Realm e sincronizamos com o servidor da nuvem apenas quando a conexão com a internet for reestabelecida.",
        iaInsight:
            "💡 Dica Dev: A biblioteca `@react-native-community/netinfo` permite monitorar em tempo real se o celular está conectado ao Wi-Fi/4G.",
        quiz: {
            question: "O que define a filosofia de desenvolvimento 'Offline-First'?",
            options: [
                { id: "A", text: "Um app que é proibido de usar a internet" },
                { id: "B", text: "Um aplicativo projetado para funcionar perfeitamente sem internet, sincronizando os dados quando a rede voltar" },
                { id: "C", text: "Um app que só roda em computadores de mesa" },
            ],
            correctId: "B",
            explanation:
                "Excelente! O aplicativo salva as alterações localmente primeiro para que o usuário não perca seu trabalho quando ficar offline.",
        },
    },

    app19: {
        title: "Animações Fluídas com React Native Reanimated",
        subtitle: "PROJETO 19 • UX Avançada e Gestos de Arrasto",
        content:
            "Eleve o nível visual do seu projeto criando animações a 60 FPS (quadros por segundo). Usando a biblioteca 'react-native-reanimated' e o 'react-native-gesture-handler', você vai construir um cartão interativo que pode ser arrastado pela tela (Swipe) e solto com efeito de mola.",
        iaInsight:
            "💡 Dica Dev: Animações executadas diretamente na 'UI Thread' do celular não travam a tela, mesmo que o aplicativo esteja processando dados em segundo plano.",
        quiz: {
            question: "Por que usarmos o React Native Reanimated em vez de animações tradicionais?",
            options: [
                { id: "A", text: "Porque ele roda na thread nativa de UI do celular, garantindo animações fluidas sem engasgos" },
                { id: "B", text: "Porque reduz o uso de espaço na memória do dispositivo" },
                { id: "C", text: "Porque dispensa o uso de código CSS" },
            ],
            correctId: "A",
            explanation:
                "Exatamente! Rodar na UI Thread garante que os gestos e animações fiquem extremamente suaves e responsivos.",
        },
    },

    app20: {
        title: "Gerando o Build de Produção (EAS Build)",
        subtitle: "PROJETO 20 • Publicando na Google Play e App Store",
        content:
            "Chegamos ao ápice da jornada! Neste projeto final, você vai preparar seu aplicativo para o mundo real. Você aprenderá a configurar os ícones de produção, a tela de splash (carregamento), gerar as chaves de assinatura e executar o comando 'eas build' para gerar o arquivo `.aab` (Android) e `.ipa` (iOS) para publicação nas lojas.",
        iaInsight:
            "💡 Dica Dev: Parabéns por concluir os 20 projetos! Agora você possui um portfólio completo de habilidades práticas em desenvolvimento mobile com React Native e Expo.",
        quiz: {
            question: "Qual serviço do ecossistema Expo é utilizado para gerar os arquivos de build finais para as lojas de apps?",
            options: [
                { id: "A", text: "EAS Build (Expo Application Services)" },
                { id: "B", text: "VS Code Extension" },
                { id: "C", text: "npm install" },
            ],
            correctId: "A",
            explanation:
                "Parabéns! O EAS Build compila seu código na nuvem e entrega o pacote pronto para ser publicado na Google Play Store e na Apple App Store!",
        },
    },
};
