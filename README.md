# link management api
Esse é um API simples para gestão de links.
Foi feito no NodeJS utilizando o framework AdonisJS.

Esse projeto é o backend, sendo o frontend
está em https://github.com/anarodrigues1996/link_management_frontend_nextjs

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
**Pedido:**
```
{
    "title": "yes",
    "url": "www.yes.com"
}
```
<br>

**Resposta:**
```
{
    "id": 3,
    "title": "yes",
    "url": "www.yes.com",
    "created_at": "2023-02-15T21:30:20.000-01:00",
    "updated_at": "2023-02-15T21:30:20.000-01:00"
}
```

### Listar todos os Links
**Metodo:** GET
<br>
**Url:** {{url}}/api/links
<br>
**Resposta:**
```
 {
        "id": 4,
        "title": "yes2",
        "url": "www.yes2.com",
        "created_at": "2023-02-15T21:30:47.000-01:00",
        "updated_at": "2023-02-15T21:30:47.000-01:00"
    },
    {
        "id": 3,
        "title": "yes",
        "url": "www.yes.com",
        "created_at": "2023-02-15T21:30:20.000-01:00",
        "updated_at": "2023-02-15T21:30:20.000-01:00"
    },
    {
        "id": 1,
        "title": "yes",
        "url": "www.yes.com",
        "created_at": null,
        "updated_at": "2023-02-15T21:29:24.000-01:00"
    }
```

### Obter um Link
**Metodo:** GET
<br>
**Url:** {{url}}/api/links/3
<br>
**Resposta:**
```
{
    "id": 3,
    "title": "yes",
    "url": "www.yes.com",
    "created_at": "2023-02-15T21:30:20.000-01:00",
    "updated_at": "2023-02-15T21:30:20.000-01:00"
}
```

### Atualizar Link
**Metodo:** PUT
<br>
**Url:** {{url}}/api/links/1
<br>
**Pedido:**
```
{
    "title": "yes",
    "url": "www.yes.com",
}
```
<br>

**Resposta:**
```
{
    "id": 1,
    "title": "yes",
    "url": "www.yes.com",
    "created_at": null,
    "updated_at": "2023-02-15T21:29:24.000-01:00"
}
```

### Eliminar Link

**Metodo:** DELETE
<br>
**Url:** {{url}}/api/links/1
<br>
**Resposta:**
```
{
    "id": 1,
    "title": "yes",
    "url": "www.yes.com",
    "created_at": null,
    "updated_at": "2023-02-15T21:29:24.000-01:00"
}
```