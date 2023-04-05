# Send me anything

Projeto criado para atender um desafio particular.

## Ferramentas

- NodeJs;
- TypeScript;
- Express;
- Prisma (ORM replacement);
- SQLite;

## Você precisará ter em seu computador

- Nodejs versão 16 ou superior;
- Yarn;

## Rotas

### Produtos

- Metodo GET com rota /products/all para trazer todos os produtos;
  -- Body: Não há;
- Metodo POST com rota /products/create para criar um produto;
  -- Body:
  ```sh
  {
  "name": "laranja",
  "description": "paconte de laranja",
  "senderId": "0020b15e-020c-448d-b03c-5ff74ee1fa5c",
  "recipientId": "99ff928a-c05f-491c-95dd-0475c5ea3b35"
  };
  ```
- Metodo GET com rota /products/:id para trazer um produto expecífico;
- Metodo GET com rota /products/recipient/:id para trazer todos os produtos ligados ao distinatário;
- Metodo GET com rota /products/sender/:id para trazer todos os produtos ligados ao remetente;
- Metodo PUT com rota /products/:id para atualizar dados de um produto específico;
- Metodo PATCH com rota /products/:id para cancelar o envio de um produto;
- Metodo DELETE com rota /products/:id para deletar um produto específico.

### Usuários

- Metodo POST com rota /users/create para criar um usuário;
- Metodo GET com rota /users/all para trazer todos os usuários;
- Metodo PUT com rota /users/:id para atualizar um usuário;
- Metodo DELETE com rota /users/:id para deletar um usuário.
