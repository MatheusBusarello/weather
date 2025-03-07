# ManchesterWeather - Projeto front end

# Descrição do projeto

Construção de uma aplicação web de previsão do tempo, com foco no front-end. O site permite você buscar cidades com as informações climáticas, como também favoritar as cidades que desejar. Existem três rotas, são elas:

  - Busca:
    - Permite selecionar a cidade desejada

  - Dashboard:
    - Visualiza a temperatura atual, mínima e máxima do dia.
    - Ícones e fundo representando a situação atual do dia (nublado, ensolarado, chuvoso,...)
    - Dia
    - Detalhes como umidade, vento, probabilidade de chuva...
    - Próximos 5 dias
    - Possibilidade de favoritar a cidade

  - Favorites:
    - Lista das cidades favoritadas
    - Possibilidade de excluir uma cidade.
  
---

## Tecnologias Utilizadas

- **Linguagens e Frameworks:**
  - React com TypeScript (com foco em mobile first)
  - Material UI
  - Axios para consumo de API

- **Testes:**
  - React Testing Library & Jest

- **API de Clima:**
  - [OpenWeatherMap API](https://openweathermap.org/api)

---

### Passos para Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/MatheusBusarello/desafio-dev-frontend
   cd desafio-dev-frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure a chave da API:
   - Copie o arquivo `.env.exemple` altere a descrição para `.env`.
   - Crie uma conta no [OpenWeatherMap API](https://openweathermap.org/api) e crie uma chave em `Minhas chaves API`
   - Acrescente esta chave no "VITE_WEATHER_APP_API"

4. Execute o projeto:
   ```bash
   npm start
   ```
---

## Testes

1. Para rodar os testes automatizados:
   ```bash
   npm test
   ```
2. Testes incluídos:
   - Verificação da renderização da busca pelas cidades;
   - Verifica a a etapa de favoritar uma cidade.

---

## Deploy

Deploy no Vercel. Link:
https://machesterweather.vercel.app/

# Figma

Para criação prévia do projeto, foi utilizado o figma:
https://www.figma.com/design/Y7Ib8jBrFNzCGNYo1GOiQj/Manchester-Weather?node-id=0-1&p=f&t=2EhcH9cVal2M0XAx-0
