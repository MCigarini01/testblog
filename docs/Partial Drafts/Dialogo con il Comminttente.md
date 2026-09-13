# **Incontro iniziale con il committente**

## **Partecipanti**

* Committente  
* Team di sviluppo

## **Obiettivo dell'incontro**

Raccogliere i requisiti per la realizzazione di una piattaforma web dedicata alla pubblicazione di contenuti tecnici e didattici.

### **Dialogo**

**Team:** Buongiorno. Può spiegarci che tipo di applicazione desidera?

**Cliente:** Gestisco un piccolo portale di contenuti didattici e mi piacerebbe avere una piattaforma dove pubblicare articoli, guide e materiale informativo. Vorrei qualcosa di semplice da usare.

**Team:** Chi utilizzerà il sistema?

**Cliente:** Principalmente tre categorie di utenti:

* Visitatori che leggono i contenuti.  
* Editor che scrivono articoli.  
* Amministratori che gestiscono tutto il sito.

**Team:** Cosa dovrebbe poter fare un visitatore?

<<<<<<<< HEAD:docs/Dialogo con il Cliente.md
**Cliente:** Consultare gli articoli, leggerli e avere la possibilità di cercarli.
========
**Cliente:** Consultare gli articoli, leggerli e essere in grado di effettuare ricerche.

**Team:** Gli articoli dovrebbero essere commentabili?

**Cliente:** Si, gli utenti registrati devono poter commentare.
>>>>>>>> main:docs/Partial Drafts/Dialogo con il Comminttente.md

**Team:** I commenti devono essere pubblicati immediatamente?

**Cliente:** Preferirei poterli controllare prima, per evitare spam o contenuti inappropriati.

**Team:** Cosa dovrebbe poter fare un Editor?

**Cliente:** Scrivere nuovi articoli e modificare quelli che ha creato personalmente; inoltre devono poter commentare gli articoli.

**Team:** E l'amministratore?

**Cliente:** Deve poter intervenire su qualsiasi contenuto, gestire gli utenti e controllare i commenti.
Deve anche essere in grado di fare tutto quello che fanno gli altri ruoli.

**Team:** Come immagina l'organizzazione degli articoli?

**Cliente:** Vorrei che fossero divisi in categorie e che potessero avere più etichette per facilitarne la ricerca.

**Team:** Ha esigenze particolari riguardo alla grafica?

**Cliente:** Non mi interessa qualcosa di molto elaborato. Vorrei un'interfaccia chiara e intuitiva che funzioni bene sia da computer che da smartphone.

**Team:** Come dovrebbe funzionare la ricerca?

**Cliente:** Gli utenti dovrebbero trovare facilmente un articolo inserendo parole chiave oppure selezionando una categoria.

**Team:** Ha altre necessità?

**Cliente:** Mi piacerebbe poter vedere chi ha scritto ogni articolo e quando è stato pubblicato.

**Team:** Bene. Riassumendo, desidera una piattaforma per la gestione di contenuti didattici con articoli, categorie, tag, sistema di commenti moderati e diversi livelli di accesso per gli utenti.

**Cliente:** Esattamente.

# **Requisiti emersi**

## **Requisiti funzionali**

### **RF1**

Il sistema deve consentire la consultazione degli articoli da parte dei visitatori.

### **RF2**

Il sistema deve consentire agli utenti autorizzati di creare articoli.

### **RF3**

Il sistema deve consentire la modifica e l'eliminazione degli articoli.

### **RF4**

Il sistema deve consentire la gestione delle categorie.

### **RF5**

Il sistema deve consentire la gestione dei tag.

### **RF6**

Il sistema deve consentire l'inserimento di commenti.

### **RF7**

Il sistema deve consentire la moderazione dei commenti.

### **RF8**

Il sistema deve consentire la ricerca degli articoli.

### **RF9**

Il sistema deve supportare ruoli differenti con permessi specifici.

## **Requisiti non funzionali**

### **RNF1**

L'applicazione deve essere utilizzabile tramite browser web.

### **RNF2**

L'interfaccia deve essere intuitiva e di facile utilizzo.

### **RNF3**

L'applicazione deve essere fruibile anche da dispositivi mobili.

### **RNF4**

L'accesso alle funzionalità deve dipendere dal ruolo dell'utente.

### **RNF5**

I dati devono essere conservati in modo persistente.

# **Decisioni del team dopo l'incontro**

Dopo l'analisi dei requisiti raccolti, il team ha deciso di realizzare:

* Un CMS semplificato per la pubblicazione di articoli didattici.  
* Tre ruoli utente: Visitatore, Editor e Amministratore.  
* Sistema completo CRUD per articoli, categorie e tag.  
* Sistema di commenti con approvazione da parte dell'amministratore.  
* Ricerca per titolo, categoria e tag.

