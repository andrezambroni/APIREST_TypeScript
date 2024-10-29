﻿# APIREST_TypeScript

Este é um projeto de API RESTful desenvolvido em TypeScript utilizando o framework Express.


## Estrutura de Diretórios
src/controller/products-Controller.ts: Contém a lógica dos controladores para a entidade "products". Define como as requisições relacionadas a produtos são tratadas.  

src/middlewares/my-middleware.ts: Contém middlewares personalizados que podem ser usados para processar requisições antes de chegarem aos controladores.

src/routes/index.ts: Define as rotas principais da aplicação.

src/routes/products-routes.ts: Define as rotas específicas para a entidade "products".

src/types/request.d.ts: Contém definições de tipos TypeScript para a aplicação, como tipos de requisições.

src/utils/app-error.ts: Contém classes e funções utilitárias, como classes de erro personalizadas.

src/server.ts: Arquivo principal que inicializa o servidor Express e configura middlewares e rotas.

## Rotas
### Produtos
GET /products: Retorna a lista de produtos.
POST /products: Cria um novo produto. Utiliza o middleware myMiddleware.


## Configuração

Certifique-se de que o arquivo `tsconfig.json` está configurado corretamente para o seu ambiente de desenvolvimento.



