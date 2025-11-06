# 🧠 NgCortex

NgCortex é um assistente de código inteligente desenvolvido em **Angular** que integra a API da Ollama para responder perguntas.  
Ele permite enviar prompts diretamente da interface e receber respostas em tempo real.

---

## 🚀 Tecnologias

- **Angular 18+**
- **TypeScript**
- **OpenAI API (Responses Endpoint)**
- **SCSS**
- **Modo Claro/Escuro**

---

## ⚙️ Como rodar o projeto

```bash
npm install
npm start
```

Acesse:  
👉 http://localhost:4200

---

## 🔑 Configuração do Ollama

1️⃣ Baixe e instale o app ollama [https://ollama.com/](https://ollama.com/)  

2️⃣ Rode o aplicativo baixado para iniciar o ollama server

3️⃣ Baixe o modelo desejado pelo bash
```
ollama run <Modelo do Ollama>
```


Abra o arquivo:  
```
src/environments/environment.ts
```

E substitua a linha:

```ts
modelName: "gemma3:12b",
```

por:

```ts
modelName: "Modelo do Ollama aqui",
```

## 🌗 Funcionalidades

✅ Alternância entre **modo claro e escuro**  
✅ Ícone e **logo personalizados (NgCortex)**  
✅ Integração direta com IA  
✅ Layout moderno e responsivo  

---

## 🧠 Preview

![NgCortex Logo](./src/assets/ngcortex-logo-white.png)

---            


## 📄 Licença

MIT © 2025 — Desenvolvido por [Cheyenne Cattani](https://github.com/cheyennecattani) | Adaptado por [Igor Barbosa](https://github.com/igor-wolf)
