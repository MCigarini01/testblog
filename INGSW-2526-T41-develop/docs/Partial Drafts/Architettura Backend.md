# Backend

```text 

backend/
│
├── api/
│   └── index.php                
│
├── controllers/
│   ├── AuthController.php
│   ├── PostController.php
│   ├── CategoryController.php
│   ├── TagController.php
│   ├── CommentController.php
│   └── UserController.php
│
├── services/
│   ├── AuthService.php          
│   ├── PostService.php
│   ├── CategoryService.php
│   ├── TagService.php
│   ├── CommentService.php
│   ├── UserService.php
│   ├── RoleStrategy.php             
│   ├── AdminStrategy.php
│   ├── EditorStrategy.php
│   ├── VisitorStrategy.php
│   └── RoleStrategyFactory.php      
│
├── repositories/
│   ├── Database.php          
│   ├── Repository.php              
│   ├── UserRepository.php
│   ├── PostRepository.php
│   ├── CategoryRepository.php
│   ├── TagRepository.php
│   └── CommentRepository.php
│
└── models/
    ├── User.php                   
    ├── Visitor.php
    ├── RegisteredUser.php            
    ├── Editor.php
    ├── Admin.php
    ├── Post.php
    ├── PostTags.php
    ├── Category.php
    ├── Tag.php
    ├── Comment.php
    └── CommentStatus.php
```

## Controllers 

### AuthController.php

**Responsabilità**
- login
- logout
- validazione token in ingresso su rotte protette

**dipendenze** 
- Authservices.php

### PostController.php

**Responsabilità**
- espone le rotte CRUD dei post

**Dipendenze**
- PostService.php

### CategoryController.php

**Responsabilità**
- Espone le rotte CRUD delle categorie

**Dipendenze**
- CategoryService.php

### TagController.php
**Responsabilità**
- Espone le rotte CRUD dei tag

**Dipendenze**
- TagService.php

### CommentController.php

**Responsabilità** 
- inserimento commenti e rotte di moderazione (approva/rifiuta)

**Dipendenze**
- CommentService.php

### UserController.php

**Responsabilità**
- gestione utenti e assegnazione ruoli (solo Admin) 

**Dipendenze**
- UserService.php

## Services 

### AuthService.php

**Responsabilità**
- verifica credenziali
- genera/valida il token di sessione

**Dipendenze**
- UserRepository.php

### PostService.php

**Responsabilità**
- crea/modifica/elimina post, valida i dati
- associa categorie e tag 
- verifica i permessi dell'utente prima di agire

**Dipendenze** 
- PostRepository.php
- CategoryRepository.php
- TagRepository.php
- RoleStrategyFactory.php

### CategoryService.php

**Responsabilità**
- CRUD categorie
- verifica permessi (solo Admin)

**Dipendenze**
- CategoryRepository.php
- RoleStrategyFactory.php

### TagService.php

**Responsabilità**
- CRUD tag
- verifica permessi (solo Admin)

**Dipendenze**
- TagRepository.php
- RoleStrategyFactory.php

### CommentService.php

**Responsabilità** 
- inserimento commento (stato iniziale Pending) 
- moderazione (approve()/reject())
- verifica permessi

**Dipendenze**
- CommentRepository.php
- RoleStrategyFactory.php

### UserService.php

**Responsabilità** 
- CRUD utenti
- assegnazione ruoli

**Dipendenze** 
- UserRepository.php
- RoleStrategyFactory.php

## Design Pattern Applicati

**Factory Method** 
Implementato nella classe `RoleStrategyFactory`. 
Ha la responsabilità unica di istanziare e restituire la strategia corretta in base al ruolo dell'utente autenticato.

**Repository Pattern** 
Isola il livello logico da quello della persistenza. Le classi (come `PostRepository`) incapsulano la logica delle query PDO.
Estendendo l'astratta `Repository.php`, ereditano le operazioni CRUD base azzerando la duplicazione del codice.


## REST API Backend 

```text 
POST /login
POST /logout

GET /posts
GET /posts/{id}
POST /posts
PUT /posts/{id}
DELETE /posts/{id}
GET /posts/search?q=
GET /posts?category=
GET /posts?tag=

GET /categories
POST /categories
PUT /categories/{id}
DELETE /categories/{id}

GET /tags
POST /tags
PUT /tags/{id}
DELETE /tags/{id}

GET /comments
POST /comments
PUT /comments/{id}/approve
PUT /comments/{id}/reject
DELETE /comments/{id}
GET /comments?status=pending

GET /users
GET /users/{id}
POST /users
PUT /users/{id}
DELETE /users/{id}
PUT /users/{id}/role
```
