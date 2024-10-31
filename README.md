# APIREST_TypeScript

Este é um projeto de API RESTful desenvolvido em TypeScript utilizando o framework Express.

## Estrutura do Projeto

Controladores: Localizados em controller, contêm a lógica de negócios para as operações de produtos.   
Middlewares: Localizados em middlewares, contêm funções intermediárias que processam requisições antes de chegarem aos controladores.   

Rotas: Definidas em routes, especificam os endpoints da API e mapeiam para os controladores correspondentes.   

Utilitários: Localizados em utils, contêm classes e funções auxiliares, como classes de erro personalizadas.   

Servidor: O arquivo server.ts inicializa o servidor Express e configura os middlewares e rotas.


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
Listar Produtos: Endpoint GET /products que retorna uma lista de produtos.   

Criar Produto: Endpoint POST /products que permite a criação de um novo produto, utilizando um middleware personalizado (myMiddleware) para processar a requisição antes de chegar ao controlador.


## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/APIREST_TypeScript.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd APIREST_TypeScript
    ```
3. Instale as dependências:
    ```sh
    npm init -y
    ```

## Configuração

Certifique-se de que o arquivo `tsconfig.json` está configurado corretamente para o seu ambiente de desenvolvimento.

## Executando o Projeto

Para iniciar o servidor, execute o seguinte comando:
```sh
npm run dev
```

## Estrutura de Diretórios

src/controller/: Contém os controladores da aplicação.       
Exemplo: products-Controller.ts.   

src/middlewares/: Contém os middlewares da aplicação.    
Exemplo: my-middleware.ts.   

src/routes/: Contém as definições de rotas da aplicação.   
 Exemplo: index.ts e products-routes.ts.   

src/types/: Contém definições de tipos TypeScript.   
 Exemplo: request.d.ts.   

src/utils/: Contém utilitários e classes de erro.   
Exemplo: app-error.ts.   

server.ts: Arquivo principal que inicializa o servidor.

## Rotas
Produtos   
GET /products: Retorna a lista de produtos.   
POST /products: Cria um novo produto. Utiliza o middleware myMiddleware.
