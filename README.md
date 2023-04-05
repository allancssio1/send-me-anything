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
  ```sh
  Body: Não há
  ```
- Metodo POST com rota /products/create para criar um produto;

  ```sh
  Body: {
  "name": "laranja",
  "description": "paconte de laranja",
  "senderId": "0020b15e-020c-448d-b03c-5ff74ee1fa5c",
  "recipientId": "99ff928a-c05f-491c-95dd-0475c5ea3b35"
  }
  ```
  
- Metodo GET com rota /products/:id para trazer um produto expecífico;
```sh
  Body: Não há
  ```
- Metodo GET com rota /products/recipient/:id para trazer todos os produtos ligados ao distinatário;
```sh
  Body: Não há
  ```
- Metodo GET com rota /products/sender/:id para trazer todos os produtos ligados ao remetente;
```sh
  Body: Não há
  ```
- Metodo PUT com rota /products/:id para atualizar dados de um produto específico;
```sh
  Body: {
  "name": "Maçãs",
  "description": "Editando a descrição das laranjinhas para maçãs.",
  "recipientId": "99ff928a-c05f-491c-95dd-0475c5ea3b35"
  }
  ```
- Metodo PATCH com rota /products/:id para cancelar o envio de um produto;
```sh
  Body: Não há
  ```
- Metodo DELETE com rota /products/:id para deletar um produto específico.
```sh
  Body: Não há
  ```

### Usuários

- Metodo POST com rota /users/create para criar um usuário;
```sh
  Body: {
	"name": "allan",
	"email": "allan@gmail.com",
	"address": "1665",
	"code": "00000-180"
}
  ```
- Metodo GET com rota /users/all para trazer todos os usuários;
```sh
  Body: Não há
  ```
- Metodo PUT com rota /users/:id para atualizar um usuário;
```sh
  Body: {
	"name": "allan atualizado",
	"email": "allan-ataualizado@gmail.com",
	"address": "1665",
	"code": "00000-180"
}
  ```
- Metodo DELETE com rota /users/:id para deletar um usuário.
```sh
  Body: Não há
  ```
