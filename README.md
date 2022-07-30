# desafios_typescript
Repositório para compartilhar os desafios de TypeScript.

## Passo a passo para criação do projeto
1. Criamos um projeto Node com o comando:
`npm init`

O projeto foi criado sem muitas especificações, informei apenas uma descrição e o nome do author.

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
