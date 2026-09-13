# **Progetto IGS: Blog Tecnico/Didattico**

# **1\. Funzionalità Minime**

## **Ruoli di Sistema**

* Admin  
* Editor  
* Visitatore

## **Gestione dei Post**

CRUD completo:

* Creazione  
* Modifica  
* Eliminazione  
* Visualizzazione

## **Organizzazione in Categorie**

CRUD completo.

## **Utilizzo dei Tag**

CRUD completo.

## **Sistema di Commenti**

* Inserimento commento  
* Moderazione admin

# **2\. Architettura del Software**

*Descrizione dei vincoli tecnologici e strutturali del progetto.*  
Frontend:

* HTML  
* CSS  
* Javascript  

Backend:

* PHP

Comunicazione:

* REST API JSON

Pattern:

* MVP (obbligatorio)

Struttura:  
frontend/  
│  
├── view/  
├── presenter/  
├── model/  
├── services/  
└── assets/  
backend/  
│  
├── controllers/  
├── services/  
├── repositories/  
├── models/  
└── api/

# **3\. Pianificazione e Divisione del Lavoro**

## **Daniele Scirpoli**

Frontend \+ UML

* pagine HTML  
* CSS  
* JS  
* presenter MVP  
* diagrammi UML Frontend
* documentazione Progetto
* documentazione implementazione Frontend

**Mattia Cigarini**  
Backend \+ Database

* schema database  
* API Post  
* API Commenti  
* autenticazione  
* Docker backend
* diagrammi UML Backend
* documentazione implementazione Backend

# **4\. Persistenza dei Dati**

### Users

| user_id | username |email | password | role |
| :--- | :--- | :--- | :--- |:---|
| *Primary Key* | VARCHAR | VARCHAR | VARCHAR | ENUM |

### Posts

| post_id | title | content | status | author_id | created_at |
| :--- | :--- | :--- | :--- | :--- | :--- |
| *Primary Key* | VARCHAR | TEXT | ENUM | *Foreign Key* | TIMESTAMP |

### Categories

| category_id | name |
| :--- | :--- |
| *Primary Key* | VARCHAR |

### Tags

| tag_id | name |
| :--- | :--- |
| *Primary Key* | VARCHAR |

### Post_Tags

| post_id | tag_id |
| :--- | :--- |
| *Foreign Key* | *Foreign Key* |

### Comments

| comment_id | post_id | author | content | status |
| :--- | :--- | :--- | :--- | :--- |
| *Primary Key* | *Foreign Key* | *Foreign Key* | VARCHAR | ENUM |

# **5\. Design Pattern Applicati**

La traccia richiede almeno 2\.

## **Repository Pattern** (Backend)

Per accesso ai dati.  
PostRepository  
CategoryRepository  
CommentRepository

## **Strategy Pattern**

Per la gestione dei ruoli.  
AdminStrategy  
EditorStrategy  
VisitorStrategy  
Metodo:   
canCreatePost()  
canDeletePost()  
canManageUsers()

## **FactoryMethod**

Per creare gli utenti.  
UserFactory

Per creare i commenti.  
CommentFactory


## **Observer**
Quando arriva un nuovo commento la view si aggiorna.

# **6\. Documentazione UML**

### **Use Case Diagram**

Attori:

* Admin  
* Editor  
* Visitatore

Use case:

* Login  
* Gestione Post  
* Gestione Tag  
* Gestione Categorie  
* Gestione Commenti

### **Class Diagram**

* User  
* Post  
* Category  
* Tag  
* Comment  
* Repository

### **Sequence Diagram**

Creazione Post.

### **Sequence Diagram**

Inserimento Commento.

### **Sequence Diagram Login**

Login.

### **Activity Diagram**

Flusso pubblicazione post.

### **Component Diagram**

Frontend ↔ API ↔ Database

# **7\. Piano di Test**

TC01 Login corretto  
TC02 Login errato  
TC03 Creazione post  
TC04 Modifica post  
TC05 Eliminazione post  
TC06 Inserimento commento  
TC07 Moderazione commento  
Per ogni test:

* Input  
* Passi  
* Risultato atteso  
* Risultato ottenuto

# **8\. Containerizzazione con Docker**

YAML  
services:  
apache:  
image: php:apache  
   
mysql:  
image: mysql:8

Con README  
:docker-compose up \-d

# **9\. Struttura del Repository**

README.md

docs/  
│  
├── AnalisiRequisiti.pdf  
├── UseCase.pdf  
├── ClassDiagram.pdf  
├── SequenceDiagram1.pdf  
├── SequenceDiagram2.pdf  
├── ActivityDiagram.pdf  
├── TestPlan.pdf  
   
frontend/  
   
backend/  
   
docker/

.sql  
