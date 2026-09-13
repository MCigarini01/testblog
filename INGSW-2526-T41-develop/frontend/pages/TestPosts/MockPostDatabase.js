// MockPostsData.js

export default [
    {
        id: 1,
        title: "Introduzione a Docker",
        categoryId: 1,
        tags: [1],
        author: "Daniele Scirpoli",
        createdAt: "2026-09-09",
        image: "../assets/images/docker-banner.png",
        content: `
                Docker è una piattaforma software progettata per semplificare lo sviluppo, il rilascio e l'esecuzione delle applicazioni attraverso l'utilizzo dei container. Un container rappresenta un ambiente isolato che contiene tutto il necessario per eseguire un'applicazione: codice, librerie, dipendenze e file di configurazione. Grazie a questa caratteristica, un'applicazione eseguita su un computer può essere distribuita e avviata su qualsiasi altro sistema che supporti Docker senza dover affrontare problemi di compatibilità.
                Prima della diffusione dei container, gli sviluppatori dovevano spesso configurare manualmente ogni ambiente di esecuzione. Era comune sentire frasi come "sul mio computer funziona". Il problema nasceva dal fatto che ambienti diversi possedevano librerie differenti, configurazioni particolari o versioni incompatibili dei software installati. Docker nasce proprio per risolvere questa problematica, consentendo di distribuire applicazioni all'interno di ambienti prevedibili e replicabili.
                Un concetto fondamentale di Docker è l'immagine. Un'immagine è un modello immutabile che contiene tutte le informazioni necessarie per creare un container. Quando si esegue un'immagine, Docker genera uno o più container. Le immagini possono essere scaricate da repository pubblici come Docker Hub oppure create personalizzando file di configurazione chiamati Dockerfile.
                I vantaggi principali di Docker includono la portabilità, la velocità e la scalabilità. I container occupano meno risorse rispetto alle macchine virtuali tradizionali poiché condividono il kernel del sistema operativo host. Questo consente di avviare nuovi ambienti in pochi secondi e di gestire grandi quantità di servizi contemporaneamente.
                Docker offre inoltre strumenti avanzati per la gestione delle reti, dei volumi persistenti e dell'orchestrazione. Grazie a Docker Compose è possibile definire intere architetture multi-servizio tramite semplici file YAML. Un'applicazione web moderna può quindi includere container separati per frontend, backend, database e sistemi di caching mantenendo un'infrastruttura ordinata e facilmente distribuibile.
                Nei prossimi articoli vedremo come installare Docker, creare il primo container, utilizzare Docker Compose e integrare la containerizzazione all'interno di un progetto web basato su PHP e REST API.
                `
    },

    {
        id: 2,
        title: "Fondamenti di PHP",
        categoryId: 3,
        tags: [2],
        author: "Daniele Scirpoli",
        createdAt: "2026-07-12",
        image: "../assets/images/php-banner.jpg",
        content: `
                PHP è un linguaggio di scripting lato server utilizzato principalmente per lo sviluppo di applicazioni web dinamiche. Nato nel 1995, continua ancora oggi a essere uno degli strumenti più diffusi nell'ambito dello sviluppo web grazie alla sua semplicità, alla vasta documentazione disponibile e all'enorme ecosistema di librerie e framework.
                A differenza di HTML e CSS, che si occupano rispettivamente della struttura e della presentazione delle pagine web, PHP viene eseguito sul server prima che il contenuto venga inviato al browser del client. Questo significa che è possibile generare contenuti dinamici, accedere a database, autenticare utenti e gestire logiche applicative complesse.
                Un semplice script PHP può essere incorporato direttamente all'interno di una pagina HTML attraverso i tag dedicati. Le istruzioni vengono interpretate dal server e il risultato finale viene restituito sotto forma di normale codice HTML. Questo approccio rende PHP particolarmente intuitivo per chi proviene dal mondo dello sviluppo frontend.
                Le variabili rappresentano uno degli elementi fondamentali del linguaggio. Una variabile viene definita utilizzando il simbolo del dollaro seguito dal nome scelto dallo sviluppatore. PHP supporta differenti tipi di dato, tra cui stringhe, numeri interi, numeri decimali, array e oggetti.
                Una delle caratteristiche più apprezzate del linguaggio è la semplicità con cui può interagire con basi di dati relazionali come MySQL. Attraverso estensioni moderne come PDO è possibile eseguire query in maniera sicura e flessibile, riducendo il rischio di vulnerabilità quali SQL Injection.
                PHP supporta inoltre la programmazione orientata agli oggetti attraverso classi, ereditarietà, interfacce e pattern architetturali avanzati. Questa caratteristica rende il linguaggio adatto non soltanto a piccoli siti web ma anche ad applicazioni aziendali complesse.
                Negli ultimi anni PHP ha introdotto numerosi miglioramenti prestazionali e sintattici. Le versioni moderne offrono una maggiore sicurezza dei tipi, nuove funzionalità orientate alla qualità del codice e significativi incrementi nelle prestazioni.
                Imparare PHP significa acquisire una competenza ancora oggi molto richiesta, soprattutto per la realizzazione di backend web, API REST e sistemi di gestione dei contenuti. Nel corso delle prossime guide approfondiremo routing, autenticazione, gestione delle sessioni e sviluppo di servizi RESTful.
                ` 
    },

    {
        id: 3,
        title: "Fondamenti di HTML",
        categoryId: 3,
        tags: [3],
        author: "Daniele Scirpoli",
        createdAt: "12/07/2026",
        image: "../assets/images/html5-banner.png",
        content: `
                HTML, acronimo di HyperText Markup Language, costituisce la base di ogni applicazione web moderna. Tutti i siti internet, indipendentemente dalla tecnologia utilizzata lato server o lato client, fanno affidamento su HTML per descrivere la struttura e l'organizzazione dei contenuti visualizzati nel browser.
                Molti sviluppatori alle prime armi considerano HTML un linguaggio semplice formato da pochi tag. In realtà una corretta progettazione della struttura HTML ha un impatto significativo su accessibilità, manutenzione, ottimizzazione per i motori di ricerca e qualità complessiva del software sviluppato.
                Uno degli aspetti più importanti dell'HTML moderno è la semantica. Utilizzare elementi semantici significa scegliere tag che descrivano chiaramente il ruolo del contenuto. Ad esempio, un titolo principale dovrebbe essere rappresentato tramite un elemento heading appropriato, mentre la navigazione principale dovrebbe essere racchiusa all'interno di una sezione dedicata alla navigazione.
                La semantica migliora l'esperienza degli utenti che utilizzano tecnologie assistive. Screen reader e altri strumenti di accessibilità possono comprendere più facilmente la struttura del documento e consentire una navigazione più efficiente. Anche i motori di ricerca beneficiano di una corretta organizzazione semantica, riuscendo a interpretare meglio il significato delle informazioni pubblicate.
                Un'altra buona pratica consiste nel mantenere separati contenuto, stile e comportamento. HTML dovrebbe descrivere la struttura, CSS dovrebbe occuparsi della presentazione grafica e JavaScript della logica interattiva. Questa separazione favorisce la manutenzione futura e riduce la complessità complessiva del progetto.
                Le pagine moderne fanno ampio utilizzo di form per raccogliere dati dagli utenti. È importante associare correttamente etichette ai campi di input, definire attributi appropriati e validare i contenuti sia lato client sia lato server. Una corretta progettazione dei form contribuisce notevolmente alla qualità dell'esperienza utente.
                Infine, è fondamentale prestare attenzione alla leggibilità del codice. Un markup pulito, indentato correttamente e organizzato in modo coerente consente agli sviluppatori di comprendere rapidamente la struttura della pagina e di collaborare più efficacemente all'interno di un team.
                Nei prossimi articoli analizzeremo le nuove funzionalità introdotte da HTML5, l'utilizzo corretto degli elementi semantici e le tecniche più efficaci per costruire interfacce web accessibili e moderne.
                `
    },
    {
        id: 4,
        title: "Introduzione a CSS",
        categoryId: 3,
        tags: [4],
        author: "Daniele Scirpoli",
        createdAt: "2026-09-10",
        image: "../assets/images/css-banner.jpg",
        content: `
                CSS, acronimo di Cascading Style Sheets, è il linguaggio utilizzato per definire l'aspetto grafico delle pagine web. Se HTML rappresenta la struttura di un documento, CSS si occupa della sua presentazione visiva, consentendo di applicare colori, font, spaziature, bordi, animazioni e layout complessi. Grazie a CSS è possibile trasformare un semplice documento testuale in un'interfaccia moderna e professionale.

                Prima dell'introduzione di CSS, molte caratteristiche grafiche venivano inserite direttamente all'interno del codice HTML. Questo approccio rendeva difficile la manutenzione dei siti web e obbligava gli sviluppatori a modificare numerose pagine per effettuare cambiamenti anche minimi. CSS ha risolto questo problema introducendo il concetto di separazione tra contenuto e presentazione.

                Una regola CSS è composta da un selettore e da un insieme di proprietà. Il selettore identifica gli elementi HTML da modificare, mentre le proprietà definiscono gli stili da applicare. Ad esempio, è possibile impostare il colore del testo, la dimensione dei caratteri o il margine esterno di un elemento utilizzando poche semplici istruzioni.

                Uno degli aspetti più importanti di CSS è la cascata. Quando più regole vengono applicate allo stesso elemento, il browser determina quale utilizzare seguendo precise regole di priorità. Comprendere il funzionamento della cascata e della specificità dei selettori è fondamentale per evitare comportamenti inattesi durante lo sviluppo.

                Negli ultimi anni CSS si è evoluto notevolmente grazie all'introduzione di nuove funzionalità come Flexbox e CSS Grid. Questi strumenti consentono di creare layout complessi e responsive senza dover ricorrere a tecniche obsolete o a grandi quantità di codice JavaScript.

                Il responsive design rappresenta oggi uno standard imprescindibile. Gli utenti accedono ai siti web attraverso dispositivi con caratteristiche molto differenti, dai monitor desktop agli smartphone. Attraverso le media query è possibile adattare automaticamente l'interfaccia alle dimensioni dello schermo migliorando notevolmente l'esperienza utente.

                CSS supporta inoltre transizioni, trasformazioni e animazioni che permettono di creare effetti visivi eleganti e coinvolgenti. Grazie a queste tecnologie è possibile migliorare l'interattività delle applicazioni web mantenendo elevate prestazioni.

                Imparare CSS significa acquisire le competenze necessarie per progettare interfacce moderne, accessibili e responsive. Nei prossimi articoli approfondiremo selettori avanzati, Flexbox, Grid Layout e le migliori pratiche per realizzare applicazioni web professionali.
                `
    },
    {
    id: 5,
    title: "Introduzione a JavaScript",
    categoryId: 3,
    tags: [5],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/javascript-banner.avif",
    content: `
            JavaScript è il linguaggio di programmazione principale del web moderno. Nato con l'obiettivo di rendere le pagine web interattive, oggi viene utilizzato per sviluppare applicazioni complete sia lato client sia lato server. In combinazione con HTML e CSS rappresenta uno dei pilastri fondamentali dello sviluppo web.

            Quando un utente visita una pagina web, il browser interpreta il codice HTML per costruire la struttura del documento e applica gli stili CSS per definirne l'aspetto grafico. JavaScript interviene aggiungendo comportamento e interattività, consentendo di reagire alle azioni dell'utente e modificare dinamicamente il contenuto della pagina.

            Una delle caratteristiche più apprezzate di JavaScript è la sua semplicità iniziale. Con poche istruzioni è possibile visualizzare messaggi, validare form o aggiornare elementi dell'interfaccia senza ricaricare l'intera pagina. Questa capacità ha contribuito enormemente alla diffusione delle applicazioni web moderne.

            Le variabili rappresentano uno dei concetti fondamentali del linguaggio. Attraverso parole chiave come let e const gli sviluppatori possono memorizzare dati da utilizzare durante l'esecuzione del programma. JavaScript supporta numerosi tipi di dato, tra cui stringhe, numeri, valori booleani, array e oggetti.

            Un altro concetto essenziale è rappresentato dalle funzioni. Una funzione consente di racchiudere un insieme di istruzioni riutilizzabili, migliorando l'organizzazione del codice e riducendo le duplicazioni. Le moderne funzionalità del linguaggio introducono inoltre arrow function, callback e programmazione asincrona.

            JavaScript dispone di un potente sistema per la manipolazione del DOM, ovvero il Document Object Model. Attraverso il DOM è possibile modificare elementi HTML, aggiornare testi, aggiungere componenti e reagire agli eventi generati dall'utente come click, movimenti del mouse o pressione di tasti.

            Lo sviluppo moderno richiede spesso il recupero di dati da server remoti. Grazie alle API Fetch e alle richieste HTTP asincrone, JavaScript consente di comunicare con backend REST e aggiornare le informazioni visualizzate senza interrompere l'esperienza utente.

            Oggi JavaScript è utilizzato non soltanto all'interno dei browser ma anche per la creazione di applicazioni desktop, mobile e backend. Comprenderne i fondamenti rappresenta un passo fondamentale per ogni sviluppatore web che desidera costruire applicazioni moderne, dinamiche e scalabili.
            `
    },
    {
    id: 6,
    title: "Introduzione alle REST API",
    categoryId: 5,
    tags: [6, 7, 8],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/rest-api-banner.png",
    content: `
            Le REST API rappresentano uno degli strumenti più importanti nello sviluppo delle applicazioni moderne. Attraverso le API, software differenti possono comunicare tra loro in modo standardizzato, scambiando informazioni e funzionalità indipendentemente dalla tecnologia utilizzata.

            Il termine API, acronimo di Application Programming Interface, identifica un insieme di regole che permettono a due sistemi di dialogare tra loro. REST, invece, è uno stile architetturale basato sul protocollo HTTP che definisce come queste comunicazioni dovrebbero essere organizzate per garantire semplicità, efficienza e scalabilità.

            Uno dei principali vantaggi delle REST API consiste nella separazione tra frontend e backend. Il frontend si occupa della gestione dell'interfaccia utente, mentre il backend gestisce la logica applicativa e l'accesso ai dati. Grazie a questa separazione è possibile sviluppare applicazioni più modulari e facilmente manutenibili.

            Le REST API utilizzano generalmente i metodi HTTP per eseguire operazioni sulle risorse. Il metodo GET viene utilizzato per recuperare dati, POST per creare nuove risorse, PUT per aggiornare informazioni esistenti e DELETE per eliminare dati dal sistema.

            Ogni risorsa viene identificata tramite un URL univoco. Ad esempio, un endpoint come "/api/posts" potrebbe restituire l'elenco degli articoli presenti in un blog, mentre "/api/posts/5" potrebbe fornire i dettagli di un articolo specifico.

            Le informazioni vengono normalmente scambiate utilizzando il formato JSON. Questo formato risulta leggero, facilmente leggibile sia dagli esseri umani che dalle macchine e supportato dalla maggior parte dei linguaggi di programmazione moderni.

            Un'altra caratteristica fondamentale delle REST API è il principio stateless. Ogni richiesta inviata dal client deve contenere tutte le informazioni necessarie affinché il server possa elaborarla correttamente. Il server non mantiene informazioni sulle richieste precedenti.

            Le REST API vengono utilizzate in moltissimi contesti, dalle applicazioni web ai servizi cloud, dai sistemi di pagamento alle applicazioni mobile. Grazie alla loro flessibilità rappresentano oggi uno standard consolidato per la comunicazione tra applicazioni distribuite.

            Comprendere il funzionamento delle REST API è una competenza fondamentale per qualsiasi sviluppatore moderno. Nei progetti professionali costituiscono infatti il collegamento essenziale tra interfaccia utente, logica applicativa e database.
            `
    },
    {
    id: 7,
    title: "Git e il Controllo di Versione",
    categoryId: 8,
    tags: [9, 10, 11],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/git-banner.png",
    content: `
            Git è il sistema di controllo di versione più utilizzato al mondo e rappresenta uno strumento essenziale per lo sviluppo software moderno. Grazie a Git, gli sviluppatori possono tracciare le modifiche apportate al codice sorgente, collaborare efficacemente con altri membri del team e mantenere uno storico completo dell'evoluzione di un progetto.

            Prima della diffusione dei sistemi di versionamento, la gestione delle modifiche al codice era spesso affidata a copie manuali dei file o a cartelle duplicate. Questo approccio comportava un elevato rischio di perdita dei dati e rendeva molto difficile collaborare con altri sviluppatori. Git ha rivoluzionato questo processo introducendo un sistema sicuro, veloce e distribuito.

            Uno dei concetti fondamentali di Git è il repository. Un repository contiene tutti i file del progetto e l'intera cronologia delle modifiche effettuate. Ogni sviluppatore dispone di una copia completa del repository sul proprio computer, caratteristica che rende Git un sistema distribuito.

            Le modifiche vengono registrate attraverso i commit. Un commit rappresenta una sorta di istantanea del progetto in un determinato momento. Ogni commit contiene informazioni sull'autore, sulla data e sulle modifiche eseguite, consentendo di ricostruire facilmente la storia del progetto.

            Un'altra caratteristica molto importante è rappresentata dai branch. Un branch permette di sviluppare nuove funzionalità o correggere errori senza influenzare il codice principale. Al termine dello sviluppo, le modifiche possono essere integrate attraverso operazioni di merge.

            Git facilita enormemente il lavoro di squadra. Più sviluppatori possono lavorare contemporaneamente sullo stesso progetto senza sovrascrivere il lavoro altrui. Quando vengono rilevati conflitti tra modifiche diverse, Git fornisce strumenti specifici per individuarli e risolverli.

            Piattaforme come GitHub, GitLab e Bitbucket hanno ulteriormente ampliato le potenzialità di Git consentendo la gestione centralizzata dei repository, la revisione del codice tramite pull request e l'automazione dei processi di integrazione continua.

            Un corretto utilizzo di Git migliora la qualità del software e riduce significativamente il rischio di perdere informazioni importanti. Le aziende moderne considerano ormai indispensabile la conoscenza dei principi di versionamento per qualsiasi sviluppatore professionista.

            Imparare Git significa acquisire una competenza fondamentale per partecipare a progetti collaborativi, gestire correttamente l'evoluzione del codice e adottare pratiche di sviluppo professionali utilizzate in tutto il settore informatico.
            `
    },
    {
    id: 8,
    title: "Introduzione a MySQL",
    categoryId: 5,
    tags: [12, 13, 14],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/mysql-banner.png",
    content: `
            MySQL è uno dei database relazionali più utilizzati al mondo. Viene impiegato in applicazioni web, sistemi gestionali, piattaforme e-commerce e numerosi altri software che necessitano di archiviare e gestire grandi quantità di dati in modo efficiente e sicuro.

            Un database relazionale organizza le informazioni in tabelle composte da righe e colonne. Ogni tabella rappresenta una specifica entità del sistema, come utenti, articoli, categorie o commenti. Questo approccio consente di mantenere i dati ordinati e facilmente accessibili.

            MySQL utilizza il linguaggio SQL, acronimo di Structured Query Language, per eseguire operazioni sui dati. Attraverso SQL è possibile inserire nuove informazioni, effettuare ricerche, modificare record esistenti ed eliminare dati non più necessari.

            Uno dei principali vantaggi di MySQL è la sua elevata affidabilità. Grazie a meccanismi di integrità referenziale e gestione delle transazioni, il database garantisce che i dati rimangano coerenti anche in presenza di errori o accessi simultanei.

            Le chiavi primarie e le chiavi esterne rappresentano concetti fondamentali nella progettazione di un database relazionale. Le chiavi primarie identificano univocamente ogni record, mentre le chiavi esterne consentono di creare relazioni tra tabelle differenti.

            In un blog tecnico, ad esempio, una tabella dei post può essere collegata a una tabella delle categorie e a una tabella degli autori. Questo approccio evita duplicazioni e rende il sistema più efficiente e semplice da mantenere.

            MySQL supporta inoltre funzionalità avanzate come indici, viste e procedure memorizzate. Questi strumenti permettono di migliorare le prestazioni delle query e semplificare operazioni complesse eseguite frequentemente dall'applicazione.

            Grazie alla sua semplicità d'utilizzo, alle ottime prestazioni e all'ampio supporto della comunità, MySQL continua a rappresentare una delle scelte più popolari per la realizzazione di applicazioni web moderne e scalabili.
            `
    },
    {
    id: 9,
    title: "Docker e la Containerizzazione delle Applicazioni",
    categoryId: 1,
    tags: [1, 16, 17],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/docker-banner.png",
    content: `
            Docker è una piattaforma che consente di creare, distribuire ed eseguire applicazioni all'interno di contenitori chiamati container. Questa tecnologia ha rivoluzionato il modo in cui il software viene distribuito e gestito negli ambienti di sviluppo e produzione.

            Un container racchiude tutto ciò di cui un'applicazione ha bisogno per funzionare correttamente: codice sorgente, librerie, dipendenze e configurazioni. Questo garantisce che il software si comporti allo stesso modo indipendentemente dal sistema su cui viene eseguito.

            Prima dell'introduzione dei container, gli sviluppatori si trovavano spesso ad affrontare problemi di compatibilità tra ambienti differenti. Un'applicazione che funzionava correttamente sul computer di sviluppo poteva generare errori una volta distribuita sul server.

            Docker risolve questo problema fornendo un ambiente isolato e standardizzato. Ogni container può essere eseguito indipendentemente dagli altri, evitando conflitti tra librerie e configurazioni.

            Le immagini Docker rappresentano il modello da cui vengono creati i container. Un'immagine contiene tutte le istruzioni necessarie per costruire l'ambiente di esecuzione dell'applicazione.

            Attraverso i Dockerfile è possibile definire passo dopo passo come costruire un'immagine. Questo consente di automatizzare completamente il processo di configurazione dell'ambiente.

            Docker Compose permette inoltre di gestire applicazioni costituite da più servizi. In un progetto web è possibile eseguire contemporaneamente frontend, backend e database utilizzando un'unica configurazione centralizzata.

            L'utilizzo dei container migliora la portabilità, la scalabilità e la manutenzione delle applicazioni. Per questo motivo Docker è diventato uno strumento fondamentale nei moderni processi DevOps.
            `
    },
    {
    id: 10,
    title: "Il Pattern MVP nello Sviluppo Web",
    categoryId: 4,
    tags: [18, 19],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: null,
    content: `
            Il pattern Model View Presenter, comunemente abbreviato in MVP, è un modello architetturale utilizzato per organizzare il codice delle applicazioni software in maniera chiara e strutturata. L'obiettivo principale è separare la logica applicativa dalla rappresentazione grafica dell'interfaccia utente.

            Nel pattern MVP l'applicazione viene suddivisa in tre componenti principali. Il Model gestisce i dati e le regole di business, la View si occupa della visualizzazione delle informazioni e il Presenter coordina la comunicazione tra Model e View.

            Questa separazione rende il codice più leggibile e facilita la manutenzione nel tempo. Ogni componente ha una responsabilità specifica e può essere modificato senza influenzare direttamente gli altri.

            Quando un utente interagisce con l'interfaccia, la View inoltra l'evento al Presenter. Quest'ultimo elabora la richiesta, interroga il Model e aggiorna la View con i dati necessari.

            Uno dei principali vantaggi dell'architettura MVP è la testabilità del codice. Poiché la logica applicativa è concentrata nel Presenter, diventa più semplice realizzare test automatici e verificare il corretto funzionamento delle funzionalità.

            Il pattern è particolarmente indicato per applicazioni di medie e grandi dimensioni, dove la separazione delle responsabilità contribuisce a mantenere il progetto organizzato e facilmente estendibile.

            Grazie alla sua struttura modulare, MVP viene spesso utilizzato nei progetti accademici e professionali che richiedono una netta distinzione tra logica applicativa e interfaccia utente.

            Comprendere il funzionamento del pattern MVP aiuta gli sviluppatori a progettare software più robusti, scalabili e semplici da mantenere nel lungo periodo.
            `
    },
    {
    id: 11,
    title: "Autenticazione JWT nelle Applicazioni Web",
    categoryId: 2,
    tags: [20, 21, 22],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/jwt-banner.jpg",
    content: `
            L'autenticazione rappresenta uno degli aspetti più importanti nello sviluppo di applicazioni web moderne. Tra le soluzioni più diffuse troviamo JWT, acronimo di JSON Web Token, uno standard utilizzato per verificare l'identità degli utenti in modo sicuro ed efficiente.

            Un token JWT è una stringa firmata digitalmente che contiene informazioni sull'utente autenticato. Dopo aver effettuato correttamente il login, il server genera il token e lo restituisce al client che lo utilizzerà nelle successive richieste.

            Uno dei principali vantaggi di JWT è il fatto che il server non deve mantenere una sessione attiva per ogni utente. Tutte le informazioni necessarie vengono infatti incluse all'interno del token stesso, riducendo il carico sul server.

            Il token è composto da tre sezioni principali: Header, Payload e Signature. L'header contiene informazioni sul tipo di token, il payload memorizza i dati dell'utente e la signature garantisce che il contenuto non venga modificato.

            Ogni richiesta verso endpoint protetti include il token all'interno dell'header Authorization. Il server verifica la validità della firma e concede o nega l'accesso alle risorse richieste.

            Per aumentare la sicurezza è importante proteggere adeguatamente i token, utilizzare connessioni HTTPS e implementare meccanismi di scadenza che limitino il periodo di validità delle credenziali.

            JWT viene ampiamente utilizzato nelle architetture REST moderne grazie alla sua semplicità, scalabilità e compatibilità con differenti linguaggi e framework.

            Comprendere il funzionamento dei token JWT rappresenta una competenza fondamentale per sviluppare sistemi di autenticazione sicuri e professionali.
            `
    },
    {
    id: 12,
    title: "Bootstrap e lo Sviluppo Responsive",
    categoryId: 3,
    tags: [23, 24, 25],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/bootstrap-banner.jpg",
    content: `
            Bootstrap è uno dei framework CSS più popolari per la realizzazione di interfacce web moderne e responsive. Grazie ai suoi componenti predefiniti, consente di sviluppare siti web professionali riducendo notevolmente i tempi di sviluppo.

            Il framework offre una vasta collezione di elementi già pronti come navbar, card, modali, pulsanti, form e tabelle. Questi componenti possono essere integrati rapidamente all'interno di qualsiasi progetto.

            Uno degli aspetti più apprezzati di Bootstrap è il sistema di griglia responsive. Attraverso una struttura basata su righe e colonne, gli sviluppatori possono creare layout che si adattano automaticamente alle dimensioni dello schermo.

            Il framework utilizza un approccio mobile-first. Ciò significa che l'interfaccia viene progettata inizialmente per dispositivi mobili e successivamente adattata a schermi più grandi.

            Bootstrap include inoltre numerose utility class che permettono di gestire margini, padding, colori, dimensioni e allineamenti senza scrivere codice CSS personalizzato.

            Grazie alla sua documentazione dettagliata e alla grande comunità di sviluppatori, Bootstrap rappresenta una delle soluzioni più efficaci per creare rapidamente applicazioni web moderne.

            Sebbene sia possibile utilizzarlo immediatamente, è consigliabile conoscere anche CSS puro per personalizzare l'aspetto grafico e ottenere risultati più flessibili.

            L'utilizzo di Bootstrap consente di migliorare la produttività mantenendo elevata la qualità dell'interfaccia utente.
            `
    },
    {
    id: 13,
    title: "JSON: Il Formato Standard per lo Scambio di Dati",
    categoryId: 7,
    tags: [8, 26],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: "../assets/images/json-banner.png",
    content: `
            JSON, acronimo di JavaScript Object Notation, è uno dei formati più utilizzati per lo scambio di dati tra applicazioni. La sua semplicità e leggibilità lo hanno reso uno standard di riferimento nello sviluppo software moderno.

            Un documento JSON è costituito da coppie chiave-valore organizzate in oggetti e array. Questa struttura permette di rappresentare informazioni complesse in modo chiaro e facilmente interpretabile da macchine e sviluppatori.

            Uno dei motivi principali della diffusione di JSON è la sua compatibilità con numerosi linguaggi di programmazione. Praticamente qualsiasi tecnologia moderna è in grado di leggere e generare dati in questo formato.

            Nelle applicazioni web JSON viene spesso utilizzato per trasferire dati tra frontend e backend attraverso API REST. Quando un client effettua una richiesta, il server può restituire informazioni strutturate in formato JSON.

            La leggibilità del formato facilita le operazioni di debug e rende più semplice comprendere la struttura dei dati scambiati tra sistemi differenti.

            Grazie alla sua leggerezza, JSON riduce inoltre la quantità di dati trasferiti in rete rispetto ad altri formati più complessi.

            Oggi JSON è alla base della maggior parte dei servizi web moderni e rappresenta una competenza indispensabile per qualsiasi sviluppatore.
            `
    },
    {
    id: 14,
    title: "Fondamenti di Sicurezza nelle Applicazioni Web",
    categoryId: 6,
    tags: [27, 28, 29],
    author: "Daniele Scirpoli",
    createdAt: "2026-09-10",
    image: null,
    content: `
            La sicurezza rappresenta un requisito fondamentale nello sviluppo di qualsiasi applicazione web. Proteggere dati, utenti e servizi è essenziale per garantire affidabilità e continuità operativa.

            Una delle minacce più comuni è rappresentata dagli attacchi SQL Injection. Questa vulnerabilità consente a un attaccante di manipolare le query del database sfruttando input non adeguatamente validati.

            Un altro rischio diffuso riguarda gli attacchi Cross Site Scripting, noti come XSS. In questo caso codice malevolo viene inserito all'interno delle pagine web e successivamente eseguito nel browser delle vittime.

            Per ridurre questi rischi è importante validare sempre gli input ricevuti dagli utenti e utilizzare query parametrizzate per l'accesso al database.

            L'utilizzo del protocollo HTTPS garantisce la cifratura delle comunicazioni tra client e server, impedendo l'intercettazione di informazioni sensibili durante il trasferimento.

            Anche la gestione delle password riveste un ruolo centrale. Le credenziali non devono mai essere memorizzate in chiaro ma sempre protette attraverso algoritmi di hashing sicuri.

            Un sistema sicuro richiede inoltre autenticazione affidabile, controllo degli accessi e monitoraggio costante delle attività sospette.

            Investire nella sicurezza significa ridurre i rischi operativi e aumentare la fiducia degli utenti nei confronti dell'applicazione.
            `
    },

















];