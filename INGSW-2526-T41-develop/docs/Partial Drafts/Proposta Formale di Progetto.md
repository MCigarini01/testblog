# **Proposta Formale di Progetto**

## **Progetto: Blog Tecnico/Didattico**

### **Team di sviluppo**

* Daniele Scirpoli 
* Mattia Cigarini

### **Committente**

Committente simulato: Associazione per la Formazione e la Divulgazione Tecnica

### **Data**

Ottobre 2025

# **1\. Introduzione**

Il presente documento descrive la proposta progettuale per la realizzazione di una piattaforma web dedicata alla pubblicazione e consultazione di contenuti tecnici e didattici.  
L'obiettivo è fornire uno strumento semplice ed intuitivo che consenta la pubblicazione di articoli, l'organizzazione dei contenuti mediante categorie e tag e l'interazione con i lettori tramite un sistema di commenti.

# **2\. Obiettivi del progetto**

Il sistema dovrà consentire:

* Pubblicazione e gestione di articoli didattici.  
* Organizzazione dei contenuti tramite categorie.  
* Associazione di tag agli articoli.  
* Consultazione pubblica dei contenuti.  
* Inserimento e moderazione dei commenti.  
* Gestione di utenti con diversi livelli di autorizzazione.

# **3\. Problema da risolvere**

Attualmente il committente non dispone di una piattaforma centralizzata per la gestione dei contenuti didattici.  
La pubblicazione avviene tramite strumenti eterogenei che rendono complessa:

* la gestione degli articoli;  
* l'organizzazione dei contenuti;  
* il controllo degli accessi;  
* la moderazione delle interazioni tra utenti.

La soluzione proposta mira a centralizzare tali attività in un'unica applicazione web.

# 

**4\. Assunzioni**  
Durante la definizione del progetto si assumono le seguenti condizioni:

* Gli utenti dispongono di una connessione internet.  
* I browser utilizzati supportano le principali tecnologie web moderne.  
* Il numero di utenti simultanei è compatibile con una piattaforma didattica di piccole e medie dimensioni.

# **5\. Ambito del progetto**

L'applicazione consentirà la gestione di:

## **Articoli**

* Creazione  
* Visualizzazione  
* Modifica  
* Eliminazione

## **Categorie**

* Creazione  
* Modifica  
* Eliminazione  
* Associazione agli articoli

## **Tag**

* Creazione  
* Modifica  
* Eliminazione  
* Associazione agli articoli

## **Commenti**

* Inserimento  
* Visualizzazione  
* Moderazione

## **Utenti**

* Autenticazione  
* Gestione dei ruoli

# **6\. Attori del sistema**

## **Visitatore**

Può:

* consultare gli articoli;  
* effettuare ricerche;  
* effettuare ricerche.

## **Editor**

Può:

* creare articoli;  
* modificare i propri articoli;  
* gestire i contenuti da lui pubblicati;
* creare commenti.
* gestire i contenuti da lui pubblicati.
* scrivere commenti

## **Amministratore**

Può:

* gestire tutti gli articoli;  
* gestire categorie e tag;  
* moderare i commenti;  
* amministrare gli utenti.
* tutto quello che fanno gli altri ruoli

# **7\. Requisiti principali**

# **Requisiti Funzionali**

* ### **RF1 \- Consultazione degli articoli**

  Il sistema deve consentire ai visitatori di visualizzare e leggere gli articoli pubblicati all'interno della piattaforma.

* ### **RF2 \- Creazione degli articoli**

  Il sistema deve consentire agli utenti autorizzati di creare nuovi articoli inserendo titolo, contenuto e informazioni di classificazione.

* ### **RF3 \- Modifica ed eliminazione degli articoli**

  Il sistema deve consentire agli utenti autorizzati di modificare o eliminare gli articoli esistenti in base ai permessi assegnati.

* ### **RF4 \- Gestione delle categorie**

  Il sistema deve consentire la creazione, modifica, visualizzazione ed eliminazione delle categorie utilizzate per organizzare gli articoli.

* ### **RF5 \- Gestione dei tag**

  Il sistema deve consentire la creazione, modifica, visualizzazione ed eliminazione dei tag associabili agli articoli.

* ### **RF6 \- Inserimento dei commenti**

  Il sistema deve consentire agli utenti registrati di inserire commenti agli articoli pubblicati.

* ### **RF7 \- Moderazione dei commenti**

  Il sistema deve consentire agli utenti autorizzati di approvare, modificare o eliminare i commenti presenti sulla piattaforma.

* ### **RF8 \- Ricerca degli articoli**

  Il sistema deve consentire agli utenti di effettuare ricerche sugli articoli mediante parole chiave e criteri di classificazione.

* ### **RF9 \- Gestione dei ruoli e dei permessi**

  Il sistema deve supportare differenti tipologie di utenti, ciascuna caratterizzata da specifici permessi e funzionalità accessibili.

# **Requisiti Non Funzionali**

* ### **RNF1 \- Accessibilità Web**

  L'applicazione deve essere accessibile tramite i principali browser web moderni.

* ### **RNF2 \- Usabilità**

  L'interfaccia utente deve risultare intuitiva e di facile utilizzo, anche per utenti con limitata esperienza informatica.

* ### **RNF3 \- Compatibilità con dispositivi mobili**

  L'applicazione deve essere fruibile anche da smartphone e tablet attraverso un'interfaccia responsive.

* ### **RNF4 \- Controllo degli accessi**

  L'accesso alle funzionalità del sistema deve essere regolato in base al ruolo associato all'utente autenticato.

* ### **RNF5 \- Persistenza dei dati**

  Le informazioni gestite dal sistema devono essere memorizzate in modo persistente e mantenute tra diverse sessioni di utilizzo.

# **8\. Vincoli di Progetto**

Il progetto dovrà rispettare i seguenti vincoli:

* Frontend sviluppato mediante HTML, CSS e JavaScript.  
* Backend sviluppato in PHP.  
* Comunicazione tra frontend e backend esclusivamente tramite API RESTful.  
* Adozione dell'architettura Model-View-Presenter (MVP).  
* Utilizzo di un repository GitHub condiviso.  
* Possibilità di esecuzione tramite container Docker.

# **9\. Soluzione proposta**

La soluzione proposta consiste nello sviluppo di una applicazione web basata su architettura Client-Server.  
L'applicazione sarà composta da:

### **Frontend**

Realizzato mediante:

* HTML  
* CSS  
* JavaScript

### **Backend**

Realizzato mediante:

* PHP

### **Comunicazione**

* API RESTful  
* Formato dati JSON

### **Database**

Sistema relazionale per la memorizzazione di:

* utenti;  
* articoli;  
* categorie;  
* tag;  
* commenti.

# **10\. Benefici attesi**

L'adozione del sistema consentirà di:

* centralizzare la gestione dei contenuti;  
* migliorare l'organizzazione delle informazioni;  
* semplificare la pubblicazione degli articoli;  
* controllare efficacemente i commenti degli utenti;  
* garantire una migliore esperienza di navigazione.

# **11\. Deliverable**

Al termine del progetto saranno consegnati:

* Codice sorgente completo.  
* Repository GitHub.  
* Documentazione tecnica.  
* Diagrammi UML.  
* Piano dei test.  
* Configurazione Docker.  
* Manuale di installazione.

# **12\. Approvazione della proposta**

La presente proposta rappresenta la base per l'avvio delle attività di analisi, progettazione e sviluppo del sistema CMS Blog Tecnico/Didattico.

