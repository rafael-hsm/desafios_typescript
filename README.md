# Desafios_typescript
Repositório para compartilhar os desafios de TypeScript.
Instruções criadas com base no Bootcamp promovido pela DIO em parceria com a Impulso. O curso Introdução Prática ao TypeScript foi ministrado pelo João Pedro Lira dos Santos - Software Engineer (Take Blip) . Link do repositório de origem: https://github.com/lira1705/mentoria-typescript/tree/main/src

## Passo a passo para criação do projeto
1. Criamos um projeto Node com o comando:`npm init`
Obs.O projeto foi criado sem muitas especificações, informei apenas: descrição e nome do author.

2. Vamos instalar o typescript como uma dependência de desenvolvimento com o comando:
`npm install --save-dev typescript`

3. Instale a biblioteca lite-server que vai procurar o "index.html" na raiz do projeto e apartir dele realizar testes utilizando qualquer biblioteca que utilizarmos nesse componente.

4. Abra o arquivo `package.json` e em scripts adicione:
`"start": "lite-server"`

5. Crie o arquivo `index.html` adcione o texto padrão (no VsCode basta digitar html5 que aparecerá a opção de autocompletar). E neste vamos adicionar a linha com o script no head do html. Exemplo: 
`<script src="desafios.js" defer></script>`
Obs. O defer serve para carregar o js após carregar todos os elementos da página.

6. Depois digitar o código no Index e alguma função no js vamos startar o projeto com o comando:
`npm start`

7. Para criar o arquivo em TypeScript execute o comando:
`tsc -init`
Obs. é criado um arquivo tsconfig.json

8. No arquivo package.json também podemos adicionar outro comando ao script para compilarmos um arquivo typescript. Vamos adicionar:
`"watch": "tsc --watch"

9. Agora basta digitarmos `npm run watch` para a compilação acontecer. Automaticamente será criado um arquivo js com o código.
