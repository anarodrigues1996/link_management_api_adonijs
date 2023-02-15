# link management
Esse é um API simples para gestão de links.
Foi feito no NodeJS utilizando o framework AdonisJS.

## Setup
- Faz o clone do projeto
- Copie o .env.example para .env
- Configure a sua base de dados
- Rode migração com o comando "node ace migration:run"
- Inicie o projeto com o comando "npm run dev"

## Teste
Pode testar utilizando o ficheiro collection do Postman
"link_management.postman_collection.json"

## API

### Criar Link
**Metodo:** POST
<br>
**Url:** {{url}}/api/links
<br>
**Corpo:**
```
{
    "title": "yes",
    "url": "www.yes.com"
}
```

### Listar todos os Links

### Obter um Link

### Atualizar Link

### Eliminar Link

