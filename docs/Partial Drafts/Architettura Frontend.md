# Frontend

```text
frontend/
│
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── login.css
│   │   ├── dashboard.css
│   │   └── post.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   └── images/
│
├── views/
│   ├── LoginView.js
│   ├── HomeView.js
│   ├── PostListView.js
│   ├── PostDetailView.js
│   ├── PostCreationView.js
│   ├── PostManagementView.js
│   ├── CategoryManagementView.js
│   ├── TagManagementView.js
│   ├── CommentManagementView.js
│   ├── UserManagementView.js
│   ├── SearchView.js
│   ├── CategoryView.js
│   └── TagView.js
│
├── presenters/
│   ├── LoginPresenter.js
│   ├── HomePresenter.js
│   ├── PostPresenter.js
│   ├── CategoryPresenter.js
│   ├── TagPresenter.js
│   ├── CommentPresenter.js
│   ├── SearchPresenter.js
│   └── UserPresenter.js
│
├── models/
│   ├── UserModel.js
│   ├── PostModel.js
│   ├── CategoryModel.js
│   ├── TagModel.js
│   ├── CommentModel.js
│   └── AuthModel.js
│
├── services/
│   ├── ApiService.js
│   ├── AuthService.js
│   ├── PostService.js
│   ├── CategoryService.js
│   ├── TagService.js
│   ├── CommentService.js
│   ├── SearchService.js
│   └── UserService.js
│
└── pages/
    ├── login.html
    ├── index.html
    ├── dashboard.html
    ├── post.html
    ├── users.html
    └── comments.html
```

## Presenter

### LoginPresenter

**Responsabilità:**
- autenticazione
- logout
- controllo sessione
- gestione errori login

**Dipendenze:**
- LoginView
- AuthService
- AuthModel

### PostPresenter

**Responsabilità:**
- caricamento articoli
- creazione articolo
- modifica articolo
- eliminazione articolo
- visualizzazione dettaglio

**Dipendenze:**
- PostCreationView
- PostListView
- PostDetailView
- PostManagementView
- PostService
- PostModel

### CategoryPresenter

**Responsabilità:**
CRUD categorie

**Dipendenze:**
- CategoryManagementView
- CategoryService
- CategoryModel
- CategoryView

### TagPresenter

**Responsabilità:**
CRUD tag

**Dipendenze:**
- TagManagementView
- TagService
- TagModel
- TagView

### CommentPresenter

**Responsabilità:**
- creazione commenti
- eliminazione commenti
- approvazione commenti
- moderazione

**Dipendenze:**
- CommentManagementView
- PostDetailView
- CommentService
- CommentModel

### SearchPresenter

**Responsabilità:**
- ricerca per parola chiave
- filtro per categoria
- filtro per tag
- gestione risultati ricerca
- gestione ricerca vuota

**Dipendenze:**
- SearchView
- SearchService
- PostModel
- CategoryModel
- TagModel

### UserPresenter

**Responsabilità:**
- CRUD utenti
- assegnazione ruoli

**Dipendenze:**
- UserManagementView
- UserService
- UserModel

## Modelli

### UserModel
- id
- username
- email
- password_hash
- role
- created_at

### PostModel
- id
- title
- content
- author_id
- category_id
- created_at
- updated_at
- status

### PostTagModel
- post_id
- tag_id

### CategoryModel
- id
- name

### TagModel
- id
- name

### CommentModel
- id
- content
- user_id
- post_id
- status
- created_at

### AuthModel
- token
- loggedUser
- authenticated

## Relazioni

### Relazioni di UserModel
- Ha molti Post (Uno-a-Molti)
- Riferimento: UserModel.id → PostModel.author_id
- Ha molti Commenti (Uno-a-Molti)
- Riferimento: UserModel.id → CommentModel.user_id

### Relazioni di PostModel
- Appartiene a un Utente (Molti-a-Uno)
- Appartiene a una Categoria (Molti-a-Uno)
- Ha molti Commenti (Uno-a-Molti)
- Ha e appartiene a molti Tag (Molti-a-Molti)
- Riferimento tramite PostTagModel

### Relazioni di CategoryModel
- Ha molti Post (Uno-a-Molti)

### Relazioni di TagModel
- Ha e appartiene a molti Post (Molti-a-Molti)

### Relazioni di PostTagModel
- Appartiene a un Post (Molti-a-Uno)
- Appartiene a un Tag (Molti-a-Uno)

### Relazioni di CommentModel
- Appartiene a un Post (Molti-a-Uno)
- Appartiene a un Utente (Molti-a-Uno)

### AuthModel
Modello temporaneo di stato del frontend.

## Design Pattern

### Observer

Subject:
- CommentModel

Observers:
- PostDetailView
- CommentManagementView

Scenario:
Quando CommentModel viene aggiornato le view registrate ricevono una notifica e si aggiornano automaticamente.


### Pattern Architetturale MVP

View: presenta i dati

Presenter: gestisce la logica applicativa

Model: incapsula i dati

Benefici:
- separazione responsabilità
- testabilità
- basso accoppiamento

### Diagramma MVP Frontend

```text
View
 ↓
Presenter
 ↓
Model
 ↓
Service
 ↓
REST API
```

## REST API

```http
POST /login
POST /logout

GET /posts
GET /posts/{id}
POST /posts
PUT /posts/{id}
DELETE /posts/{id}

GET /categories
POST /categories

GET /tags
POST /tags

GET /comments
POST /comments
DELETE /comments/{id}

GET /posts/search
GET /posts?category=
GET /posts?tag=
```
