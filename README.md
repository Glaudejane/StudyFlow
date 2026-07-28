# StudyFlow 📚

Aplicativo mobile de organização de estudos, com trilhas de aprendizado interativas, cronômetro de foco (Pomodoro) e sistema de gamificação por XP e níveis.

## 🚀 Funcionalidades
- Timer Pomodoro com música lo-fi de fundo e alarme ao final do ciclo
- Trilhas de estudo interativas (Inglês, Python, Inteligência Artificial e Criação de Apps)
- Lições com quiz e feedback pedagógico
- Sistema de XP e níveis, calculado a partir do progresso nos quizzes
- Progresso salvo localmente no dispositivo (AsyncStorage)

## 🧠 Tecnologias
- React Native + Expo
- React Navigation (abas + pilha de telas)
- AsyncStorage (persistência local)
- expo-audio (player de áudio para o Timer)

## 📂 Estrutura do projeto
- `screens/` — telas do app (Home, Timer, Tarefas, Perfil, trilhas de estudo)
- `navigation/` — configuração de navegação (abas inferiores + pilha de telas)
- `assets/` — ícones, splash e arquivos de áudio

## ▶️ Como rodar
```bash
npm install
npx expo start
```
Escaneie o QR code com o app **Expo Go** (Android/iOS), ou pressione `w` no terminal para abrir a versão web.

## 💡 O que aprendi
- Desenvolvimento mobile com React Native e Expo
- Gerenciamento de estado e navegação entre telas
- Persistência de dados local com AsyncStorage
- Boas práticas de Git (branches, commits, merge) em um fluxo de trabalho real