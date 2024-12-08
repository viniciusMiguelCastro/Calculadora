# **Projeto: Calculadora com Backend em Node.js e Frontend em React**

## **Descrição**
Este é um projeto de uma calculadora web que realiza operações matemáticas básicas (soma, subtração, multiplicação e divisão). Ele foi desenvolvido utilizando **Node.js** para o backend e **React** para o frontend, com integração via API. O projeto também está configurado para ser executado usando Docker.

---

## **Funcionalidades**
- Operações matemáticas básicas (soma, subtração, multiplicação, divisão).
- Validação para divisão por zero.
- Interface de usuário responsiva e estilizada.
- Backend com autenticação via token JWT.
- Credenciais padrão para acesso:
  - **Usuário:** `admin@admin.com` | **Senha:** `1234`
  - **Usuário:** `user@user.com` | **Senha:** `1234`

---

## **Tecnologias utilizadas**
- **Frontend**: React.js
- **Backend**: Node.js (Express)
- **Estilização**: CSS
- **Docker**: Para ambiente de execução containerizado
- **Axios**: Para chamadas à API
- **JWT**: Para autenticação de requisições

---

## **Pré-requisitos**
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Docker](https://www.docker.com/)
- [Git](https://git-scm.com/)

---

## **Instalação e execução**

### **1. Clonando o repositório**

git clone https://github.com/viniciusMiguelCastro/Calculadora
cd Calculadora

---

## **2. Configuração do Backend**

### 2.1 Instalar Dependências do Backend
Acesse a pasta do backend e instale as dependências:
    cd backend
    npm install

### 2.2 Variáveis de Ambiente
Crie um arquivo .env na pasta backend com as seguintes variáveis de ambiente:
    JWT_SECRET=mysecretkey
    PORT=5000

### 2.3 Rodando o Backend
Para rodar o backend, execute o seguinte comando:
    npm start
Isso iniciará o backend na porta 5000.

---

## **3. Configuração do Frontend**

### 3.1 Instalar Dependências do Frontend
Acesse a pasta do frontend e instale as dependências:
    cd frontend
    cd calculadora-frontend
    npm install

### 3.2 Rodando o Frontend
Para rodar o frontend, execute o seguinte comando:
    npm start
Isso iniciará o frontend na porta 3000, onde o aplicativo React estará acessível.

---

## **Como Testar**

## **1. Acesse o Frontend: O frontend estará disponível em http://localhost:3000 **
## **2. Login: Utilize um dos seguintes usuários para autenticação: **
### Admin:
        E-mail: admin@admin.com
        Senha: 1234
### User:
        E-mail: user@user.com
        Senha: 1234

## **Cálculos: Após o login, você pode realizar cálculos utilizando os campos de entrada de valores e seleção da operação. O resultado será exibido na tela.**

---

## **Licença**
Este projeto está licenciado sob a Licença Apache 2.0. Veja o arquivo LICENSE para mais detalhes.
