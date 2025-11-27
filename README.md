# Hub de Ferramentas Úteis 🛠️

Este projeto é um *Hub* moderno e responsivo, desenvolvido em React com Vite, que reúne diversas ferramentas e utilitários cotidianos em uma única interface. Ele foi criado com foco na usabilidade, persistência de dados (Histórico) e na personalização com temas claro e escuro.

## 🔗 Status do Projeto & Acesso

| Detalhe | Status |
| :--- | :--- |
| **Link do Site** | [Acesse o Hub de Ferramentas aqui!](https://Xaropinhodlc.github.io/Hub-de-Ferramentas-React) |

---

## ✨ Funcionalidades Incluídas

O Hub de Ferramentas é dividido em componentes, cada um com sua utilidade específica e histórico de cálculos:

### 1. ⚖️ Calculadora de IMC (Índice de Massa Corporal)

* Calcula o IMC com base no peso e altura.
* Fornece a classificação (Abaixo do Peso, Normal, Obesidade, etc.).
* **Melhorias customizadas:** Suporte à tecla `Enter` e desabilitação do botão quando os campos estão vazios.

### 💱 Conversor de Moedas (BRL)

* Converte moedas principais (USD, EUR, JPY, etc.) para Real (BRL).
* Consome a cotação em tempo real de uma API (AwesomeAPI).
* **Melhorias customizadas:** Suporte à tecla `Enter` para iniciar a conversão.

### 3. 📊 Calculadora de Porcentagem

* Permite dois tipos de cálculo:
    * "Quanto é X% de Y?"
    * "X é qual porcentagem de Y?"
* **Melhorias customizadas:** Desabilitação dos botões de cálculo se os campos estiverem vazios.

### 4. 📈 Calculadora de Juros Compostos

* Simula o crescimento de investimentos ao longo do tempo.
* Calcula o montante final, juros ganhos e total investido, considerando:
    * Capital Inicial.
    * Taxa de Juros Anual.
    * Período de Aplicação (Anos).
    * Aporte Mensal (Opcional).
* **Melhorias customizadas:** Desabilitação do botão de cálculo se os campos obrigatórios estiverem vazios.

## 💻 Tecnologias Utilizadas

* **Front-end Framework:** React (Hooks: `useState`, `useCallback`, `useEffect`).
* **Build Tool:** Vite.
* **Estilização:** Styled Components (para modularidade e suporte a temas).
* **Roteamento:** React Router DOM (v6).
* **API:** AwesomeAPI (para cotações de moeda).
* **Deployment:** GitHub Pages e `gh-pages` CLI.
* **Hooks Customizados:** `useLocalStorage` para persistência do histórico.

## 🚀 Como Executar o Projeto Localmente

Para clonar e rodar o Hub de Ferramentas em sua máquina, siga os passos abaixo:

### Pré-requisitos

* Node.js (LTS)
* Git

### Instalação

```bash
# 1. Clone o repositório
git clone [https://github.com/Xaropinhodlc/Hub-de-Ferramentas-React.git](https://github.com/Xaropinhodlc/Hub-de-Ferramentas-React.git)

# 2. Acesse a pasta do projeto
cd Hub-de-Ferramentas-React

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento (Vite)
npm run dev

🤝 Contribuições
Contribuições são bem-vindas! Se você encontrou um bug ou tem uma ideia para uma nova ferramenta, sinta-se à vontade para abrir uma Issue ou enviar um Pull Request.

🔑 Licença
Este projeto está sob a licença MIT.
