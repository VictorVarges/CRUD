# CRUD

Uma API de CRUD de itens medievais.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/paulorenan/Trybesmith.git
```

Entre no diretório do projeto

```bash
  cd Trybesmith
```

Instale as dependências

```bash
  npm install
```
Rode o arquivo sql para criar o banco de dados

Inicie o servidor

```bash
  npm run start
```


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`


## Documentação da API

#### Cria um usuario e retorna um token de autenticação

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório**. O nome de usuario |
| `classe` | `string` | **Obrigatório**. A classe do usuario |
| `level` | `number` | **Obrigatório**. O nivel do usuario |
| `password` | `string` | **Obrigatório**. A senha do usuario |

#### Faz o login e retorna o token de autenticação

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório**. O nome do usuario |
| `password` | `string` | **Obrigatório**. A senha do usuario |

#### Faz o cadastro de produtos

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome do produto |
| `amount`    | `string` | **Obrigatório**. O montante do usuario |

#### Lista todos os produtos

```http
  GET /products
```
#### Cadastra um pedido

```http
  POST /orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `products`      | `array number` | **Obrigatório**. O ID dos produtos que quer pedir |

#### Lista todos os pedidos

```http
  GET /orders
```

#### Lista um pedido

```http
  GET /orders/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do pedido que você quer |

## Referência

 - [Awesome Readme Templates](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
