## Integração do Banco de Dados Mongo com API :rocket:

As informações que eram adicionadas na API , ficavam salvas em arquivos JSON dentro da pasta models. Porém , agora queremos que ela fique salva no nosso banco de dados. Para isso, devemos criar uma collection no MongoDB. 

Antes de criar uma collection vamos criar uma database

`use musicas`

Criando uma collection:

`db.createCollection('musicas')`

Inserindo as músicas que estavam na minha models :

`db.musicas.insertMany([])`

### MVC

E sempre acompanhando os projetos , a arquitetura MVC está aqui para garantir que tudo estará na sua devida pasta e responsabilidade. :wink:

### Mongoose

O mongoose é a biblioteca do Node.js que permite a conexão com o banco de dados do MongoDB, criar modelos, esquemas, bem como utilizar comandos/ consultas do mongo para a manipulação dos dados. Para que essa "conversa" seja realizada é preciso criar uma string de conexão no nosso app.js. 

Ok , ok , agora que a conexão está feita podemos criar uma comunicação direta com o banco, através do nosso **Schema**, que serve para validação e tipagem das propriedades do nosso documento. É no Schema que vamos dizer qual dado e o tipo (string, boolean...). O Schema fica na nossa pasta models.

#### Métodos nativos do Mongoose

Atualizando as funções utilizamos alguns métodos nativos do Mongoose como o `save`, `find`, `findOne`, `updateOne`, `deleteOne` e outros como:

Para inserir: `save`, `create` e `insertMany`;

Para consultar: `find`, `findById`, `findOne`;

Para alterar: `update`, `updateOne`, `updateMany`;

Para excluir: `deleteOne`, `deleteMany`, `remove`.



Pegue o seu fone, essa API  de músicas e solta o som!!!!!

![chris-ouvindo-musica](https://acoradadacomoumaflor.files.wordpress.com/2017/08/ouvir-musica-estudando.gif)









