# GoStack 10.0 || Desafio 03

* [1. Conceitos abordados](#1-conceitos-abordados)
* [2. Descrição do projeto](#2-descrição-do-projeto)
* [3. Iniciando o Projeto](#3-iniciando-o-projeto)
* [4. Enunciado do Projeto](#4-enunciado-do-projeto)
* [5. Criando o projeto](#5-criando-o-projeto)

##  1. Conceitos abordados

1.  utilizar multipart form data via Multer / Criar o Avatar do usuário.
2.  Vincular arquivos a tabelas na DB (Avatar a usuário).
2.  formatação e cálculo de datas via biblioteca 'date-fns'.
2.  Aplicar paginação.
3.  Criar notificações usando uma DB não-relacional (MongoDB).
4.  Envios de e-mails usando uma DB não-relacional e filas (Nodemailer e redis).

##  2. Descrição do projeto

Finalização do back-end do aplicativo Fastfeet.

O Fastfeet é um aplicativo de entregas de produtos quaisquer, similar a ifood, Rappi e UberEats. Pelo website, o usuário administrador lista, cadastra, edita e exclui: encomendas, entregadores, destinatários e problemas nas entregas.

##  3. Iniciando o projeto

1. Iniciar Dbs:
   1. DB SQL para GET / POST / PUT / DELETE de dados.
   2. DB Mongo para notificações de delivery.
   3. DB redis para gerenciar a fila de e-mail.
```
docker start database3 (port: 5434)
docker start mongofastfeet
docker start redisfastfeet
```

2. Iniciar o projeto:
```
yarn dev
```

3.  Insomnia

    1.  Página do Insomnia:
        https://insomnia.rest/download/

        Import/Export -> Import Data -> From File -> Insomnia_2020-03-31.json

4.  Acesso de administrador

    1.  email: admin@fastfeet.com
    2.  senha: 123123

##  4. Enunciado do Projeto

<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://github.com/MaisDennis/GoStack10.0-Desafio-03/blob/master/logo.png" width="300px" />
</h1>

<h3 align="center">
  Desafio 3: FastFeet, continuando a aplicação
</h3>

<h3 align="center">
  :warning: Etapa 2/4 do Desafio Final :warning:
</h3>

<p>Esse desafio faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack, por isso é fundamental que ele seja feito com muito empenho!</p>

<blockquote align="center">“Faça seu melhor, mas sempre com prazo de entrega”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-03?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-03/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-03?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Durante esse desafio vamos aprimorar a aplicação FastFeet que demos início no desafio anterior implementando funcionalidades que aprendemos durante as aulas até agora.

### **Funcionalidades do administrador**

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação para administradores.

### **1. Gestão de entregadores**

Permita que o administrador possa cadastrar entregadores para a plataforma, o entregador deve possuir os seguintes campos:

- id (id do entregador)
- name (nome do entregador);
- avatar_id (foto do entregador);
- email (email do entregador)
- created_at;
- updated_at;

Crie rotas para listagem/cadastro/atualização/remoção de entregadores;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

### **2. Gestão de encomendas**

Apesar do entregador estar cadastrado, ele não é independente dentro da plataforma, e você deve cadastrar encomendas para os entregadores.

Nessa funcionalidade criaremos um cadastro de encomendas por entregador, a encomenda possui os campos:

- id (id da entrega)
- recipient_id (referência ao destinatário);
- deliveryman_id (referência ao entregador);
- signature_id (referência à uma assinatura do destinatário, que será uma imagem);
- product (nome do produto a ser entregue);
- canceled_at (data de cancelamento, se cancelada);
- start_date (data de retirada do produto);
- end_date (data final da entrega);
- created_at;
- updated_at;

A **data de início** deve ser cadastrada assim que for feita a retirada do produto pelo entregador, e as retiradas só podem ser feitas entre as 08:00 e 18:00h.

A **data de término** da entrega deve ser cadastrada quando o entregador finalizar a entrega:

Os campos **recipient_id** e **deliveryman_id** devem ser cadastrados no momento que for cadastrada a encomenda.

Quando a encomenda é **cadastrada** para um entregador, o entregador recebe um e-mail com detalhes da encomenda, com nome do produto e uma mensagem informando-o que o produto já está disponível para a retirada.

Crie rotas para listagem/cadastro/atualização/remoção de encomendas;

Obs.: Essa funcionalidade é para administradores autenticados na aplicação.

### **Funcionalidades do entregador**

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação para os entregadores.

### **1. Visualizar encomendas**

Para que o entregador possa visualizar suas encomendas, ele deverá informar apenas seu ID de cadastro (ID do entregador no banco de dados). Essa funcionalidade deve retornar as encomendas atribuidas a ele, que **não estejam entregues ou canceladas**;

Permita também que ele liste apenas as encomendas que já foram **entregues** por ele, com base em seu ID de cadastro;

Exemplo de requisição: `GET https://fastfeet.com/deliveryman/1/deliveries`

### 2. Alterar status de encomendas

Você deve permitir que o entregador tenha rotas para incluir uma data de retirada (start_date) e data de entrega (end_date) para as encomendas. O entregador só pode fazer **5 retiradas por dia**.

Obs.: Para a funcionalidade de finalizar a entrega, você deverá permitir o envio de uma imagem que irá preencher o campo signature_id da tabela de encomendas.

### 3. Cadastrar problemas nas entregas

O entregador nem sempre conseguirá entregar as encomendas com sucesso, algumas vezes o destinatário pode estar ausente, ou o próprio entregador poderá ter algum problema com seu veículo na hora de entregar.

A tabela `delivery_problems` deve conter os seguintes campos:

- delivery_id (referência da encomenda);
- description (descrição do problema que o entregador teve);
- created_at;
- updated_at;

Crie uma rota para a distribuidora listar todas as entregas com algum problema;

Crie uma rota para listar todos os problemas de uma encomenda baseado no ID da encomenda.

Exemplo de requisição: `GET https://fastfeet.com/delivery/2/problems`

Crie uma rota para o entregador cadastrar problemas na entrega apenas informando seu ID de cadastro (ID da encomenda no banco de dados);

Exemplo de requisição: `POST https://fastfeet.com/delivery/3/problems`

Crie uma rota para a distribuidora cancelar uma entrega baseado no ID do problema. Esse cancelamento pode acontecer devido a gravidade do problema da entrega, por exemplo, em caso de perda da encomenda.

Exemplo de requisição: `DELETE https://fastfeet.com/problem/1/cancel-delivery`

Quando uma encomenda for cancelada, o entregador deve receber um e-mail informando-o sobre o cancelamento.

## **📅 Entrega**

Esse desafio **não precisa ser entregue** e não receberá correção. Além disso, o código fonte **não está disponível** por fazer parte do **desafio final**, que será corrigido para **certificação** do bootcamp. Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/Rocketseat/bootcamp-gostack-desafio-03/blob/master/LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat 👋 [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

##  5. Criando o projeto

1. Configurando o Multer
   1. (multipart form data, multer conversa com esse formato e formato json).
      1. Usado para fazer upload de imagens de avatar (deliveryman).
      ```
      yarn add multer
      ```
      1. Criar config/multr.js
    2. Criar pasta tmp/uploads (onde vao ficar os arquivos de imagens)
    3. Adicionar a routes.js
    ```
    const upload = multer(multerConfig);
    ```
    4. Insomnia:
       1. Criar Files/POST

2. Avatar.
   1. Criar FileController.js
   2. Migration de files { id, type, name, path, created_at, updated_at }:
   ```
   yarn sequelize migration:create --name=create-files
   yarn sequelize db:migrate
   ```
   3. Criar models/File.js, update database/index.js
   4. Incluir nova coluna a tabela "user" para vincular a tabela "files.
   ```
   yarn sequelize migration:create --name=add-avatar-field-to-deliverymans
   yarn sequelize db:migrate
   ```
   5. Vincular Deliveryman a File, Deliveryman.js
   ```Javascript
   static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id' });
   }
   ```
   6. Insomnia:
      1. Files/Post (Create): Multipart: file, Bearer.

3. Listagem de Deliverymen ("Deliverymans" para se enquadrar na DB).
   1. Criar DeliverymanController.js
   2. adicionar rota a routes.js
   $$$$$$$$$$$$$$$$ completar com  o restante de upload de arquivo....

4. Migration e Model de entrega (Delivery).
   1.  Migration de deliveries { id, recipient_id, deliveryman_id, product, canceled_at, start_date, end_date, created_at, updated_at, signature_id }
   ```
   yarn sequelize migration:create --name=create-deliveries
   ```
   2. Criar model Delivery.js

5. Agendamento de delivery
   1. Criar DeliveryController.js
   2. Adicionar rota a routes.js
   3. Insomnia:
      1. Deliveries/Post (Create): { recipient_id, deliveryman_id, product }

6. Validação de Delivery:
   1. Biblioteca para lidar com datas: date-fns
   ```
   yarn add date-fns@next (next: versão atual).
   ```
   2. Checks:
      1. DeliveryController.js create:
         isRecipient, isDeliveryman, checkAvailability
      2. DeliveryController.js update:
         1. isBefore openingTime,
         2. isAfter closingTime,
         3. Delivery already: started / ended / canceled.
         4. Deliveryman is making a delivery already.
      3. DeliveryController.js delete:
         1. Delivery already: ended / canceled.

7. Listando deliveries:
   1. DeliveryController.js: obs. importante ter o attributo 'path'.
   2. Adicionar rota a routes.js
   3. Insomnia:
      1. Deliveries: Get (list): Bearer

8. Aplicando paginação:
   1. Insomnia:
      1. Appointments/Get List, Query: page = 1.
      2. atualizar DeliveryController.js
