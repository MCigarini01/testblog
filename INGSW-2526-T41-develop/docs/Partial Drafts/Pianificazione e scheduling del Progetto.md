# **Pianificazione del Progetto**

## **1\. Informazioni Generali**

### **Titolo del Progetto**

**Blog Tecnico/Didattico \- CMS semplificato**

### **Team di Sviluppo**

Gruppo composto da 2 membri.

### **Durata del Progetto**

2 settimane e mezza (17 giorni lavorativi circa).

### **Obiettivo**

Realizzare una piattaforma CMS semplificata che consenta:

* gestione utenti con ruoli differenziati;  
* creazione e gestione di articoli;  
* classificazione tramite categorie e tag;  
* pubblicazione e moderazione di commenti;  
* accesso ai contenuti tramite interfaccia web.

L'applicazione dovrà rispettare i vincoli tecnologici definiti dalla traccia del corso.  
**2\. Strategia di Sviluppo**  
Il team adotta un approccio incrementale.  
Le attività vengono suddivise nelle seguenti macrofasi:

1. Analisi dei requisiti  
2. Progettazione  
3. Implementazione backend  
4. Implementazione frontend  
5. Integrazione  
6. Testing  
7. Documentazione  
8. Consegna

Ogni fase produce elaborati e artefatti verificabili presenti nel repository GitHub.

# **3\. Work Breakdown Structure (WBS)**

## **1\. Analisi**

### **Raccolta requisiti**

* Studio della traccia  
* Simulazione incontro con il cliente  
* Identificazione requisiti funzionali  
* Identificazione requisiti non funzionali

### **Modello dei casi d'uso**

* Definizione attori  
* Definizione use case  
* Use Case Diagram

## **2\. Progettazione**

### **Modellazione dati**

* Entità  
* Relazioni  
* Schema logico del database

### **Architettura**

* Definizione MVP  
* Definizione REST API  
* Organizzazione componenti

### **UML**

* Class Diagram  
* Sequence Diagram  
* Activity Diagram  
* Deployment Diagram

**3\. Implementazione Backend**

### **Gestione utenti**

* Login  
* Autorizzazioni

### **Gestione articoli**

* CRUD Post

### **Gestione categorie**

* CRUD Categorie

### **Gestione tag**

* CRUD Tag

### **Gestione commenti**

* Inserimento  
* Moderazione

## **4\. Implementazione Frontend**

### **Parte pubblica**

* Homepage  
* Lista articoli  
* Dettaglio articolo

### **Dashboard editor**

* Gestione post  
* Gestione categorie  
* Gestione tag

### **Dashboard amministratore**

* Gestione utenti  
* Moderazione commenti

## **5\. Testing**

### **Test funzionali**

* Login  
* CRUD Post  
* CRUD Categorie  
* CRUD Tag  
* Commenti

### **Test di integrazione**

* Frontend ↔ API REST  
* API ↔ Database

## **6\. Deployment**

### **Docker**

* Container PHP  
* Container MySQL

### **Configurazione ambiente**

* File docker-compose  
* Script di avvio

## **7\. Documentazione**

* Relazione tecnica  
* UML  
* Piano di test  
* Manuale d'installazione  
* README

# **4\. Assegnazione Attività**

**Daniele Scirpoli**

Responsabile Frontend

### **Attività**

* Interfaccia HTML/CSS  
* Logica Javascript  
* MVP lato client  
* UML  
* Redazione documentazione  
* Supporto testing

**Mattia Cigarini**  
Responsabile Backend

### **Attività**

* Progettazione database  
* API REST  
* Logica applicativa PHP  
* Repository Pattern  
* Configurazione Docker  
* Supporto testing  
* 

## **Attività condivise**

Entrambi i membri partecipano a:

* Analisi requisiti  
* Revisione UML  
* Testing  
* Verifica finale  
* Gestione repository

# **5\. Scheduling**

| Giorni | Attività |
| ----- | ----- |
| 1 | Analisi requisiti |
| 2 | Use Case e User Stories |
| 3 | Database e API Design |
| 4 | UML principali |
| 5-7 | Backend PHP |
| 5-7 | Frontend MVP |
| 8-9 | CRUD Post |
| 10 | CRUD Categorie e Tag |
| 11 | Sistema Commenti |
| 12 | Integrazione Frontend-Backend |
| 13 | Design Pattern |
| 14 | Docker |
| 15 | Testing |
| 16 | Correzione bug |
| 17 | Documentazione finale e consegna |

# **6\. Workflow GitHub**

Il progetto viene sviluppato attraverso un repository GitHub condiviso.

## **Branch principali**

main  
develop

## **Branch funzionali**

feature/backend  
feature/frontend  
feature/testing

## **Regole operative**

* ogni funzionalità viene sviluppata su un branch dedicato;  
* il merge avviene solo dopo verifica;  
* commit frequenti e descrittivi;  
* documentazione aggiornata contestualmente allo sviluppo.

# **7\. Gestione dei Rischi**

## **R1 \- Ritardo nello sviluppo**

Probabilità: Media  
Impatto: Alto  
Mitigazione:

* distribuzione equilibrata delle attività;  
* monitoraggio giornaliero dello stato del progetto.

## **R2 \- Problemi di integrazione**

Probabilità: Media  
Impatto: Medio  
Mitigazione:

* definizione anticipata delle API REST;  
* test continui tra frontend e backend.

## **R3 \- Conflitti Git**

Probabilità: Media  
Impatto: Basso  
Mitigazione:

* utilizzo di branch separati;  
* merge frequenti.

## **R4 \- Problemi di deployment**

Probabilità: Bassa  
Impatto: Medio  
Mitigazione:

* utilizzo di Docker;  
* verifica periodica dell'ambiente.

# **8\. Deliverable**

Al termine del progetto saranno consegnati:

1. Codice sorgente frontend.  
2. Codice sorgente backend.  
3. Repository GitHub.  
4. Diagrammi UML.  
5. Documentazione tecnica.  
6. Piano di test.  
7. Configurazione Docker.  
8. Istruzioni di installazione ed esecuzione.

**9\. Criteri di Successo**  
Il progetto sarà considerato completato con successo se:

* tutti i requisiti della traccia risultano implementati;  
* l'architettura MVP è rispettata;  
* la comunicazione avviene esclusivamente tramite REST API CRUD;  
* sono presenti almeno due design pattern;  
* i diagrammi UML risultano coerenti con l'implementazione;  
* il sistema è eseguibile tramite Docker;  
* tutta la documentazione richiesta è disponibile nel repository GitHub.

