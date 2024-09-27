# The Clone York Times

![Project Logo](./public/logo.png)

**The Clone York Times** è un clone del sito web del famoso giornale _The New York Times_, sviluppato come progetto di esame per il corso React offerto da **Start2Impact**. Il sito è stato realizzato con le tecnologie **React**, **Vite** e **TypeScript** per garantire un'esperienza utente moderna, rapida e scalabile.

## Table of Contents
- [Introduzione](#introduzione)
- [Features](#features)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Struttura del Progetto](#struttura-del-progetto)
- [Screenshot](#screenshot)
- [Autore](#autore)
- [Licenza](#licenza)

## Introduzione

Il progetto **The Clone York Times** è pensato per replicare il layout e le funzionalità di base del sito di notizie _The New York Times_, utilizzando **React** e strumenti avanzati come **Redux Toolkit**, **React Query**, e **React Router DOM**. Il sito presenta un'interfaccia pulita e moderna, ottimizzata per diversi dispositivi grazie a componenti **responsive**.

### Obiettivi:
- Creare un layout fedele al sito originale.
- Utilizzare API per ottenere dati dinamici (es. articoli di notizie).
- UI e UX semplice e facile da usare.
- Struttura dell’app organizzata e comprensibile
- Design responsive. 
  
## Features

- 📰 **News Feed Dinamico**: Caricamento degli articoli tramite API.
- ⚡ **Prestazioni Ottimizzate**: Caricamento rapido delle pagine grazie a **Vite**.
- 🎨 **Responsive Design**: Adattamento dinamico su dispositivi desktop, tablet e mobile.
- 🔄 **Navigazione con React Router**: Gestione delle pagine senza ricaricare il browser.
- 🎛️ **Componenti Riutilizzabili**: Sviluppo di componenti modulari e riutilizzabili.

## Installazione

Segui questi passaggi per configurare e avviare il progetto localmente:

1. **Clona il repository:**
   ```bash
   git clone https://github.com/tuo-username/the-clone-york-times.git
   cd the-clone-york-times
   npm install
   npm run dev
   npm run build
   

### Utilizzo
Una volta avviato il server di sviluppo, visita http://localhost:3000 nel tuo browser per vedere il sito funzionante. Puoi navigare attraverso le diverse sezioni come Home, Articoli e altre pagine informative. Il sito permette la consultazione di notizie dinamiche caricate da un'API simulata (o reale, se fornita).

### Struttura del Progetto
Ecco una panoramica della struttura delle cartelle e dei file principali:

    src/components/: Componenti riutilizzabili come Header, Footer, ArticleCard.
    src/pages/: Pagine del sito come Home, Notizie, Contatti.
    src/services/: Funzioni per le chiamate API.
    src/helper/: Funzioni di utilità che semplificano e migliorano la logica del progetto.
    src/data/data.js: Contiene interaccie e dati.
    vite.config.ts: Configurazione di Vite per il build system.


### Screenshot
Ecco alcune immagini del progetto:

La home page con una lista di articoli aggiornati dinamicamente.

Visualizzazione di un articolo completo, con immagini e testo formattato.

Dipendenze
Il progetto utilizza diverse librerie e strumenti chiave per il suo funzionamento:

Dipendenze di Produzione:
React: ^18.3.1
Redux Toolkit: ^2.2.7
React Query: ^5.53.2
React Router DOM: ^6.26.1
Axios: ^1.7.7
React Slick & Slick Carousel: ^0.30.2 / ^1.8.1 (per slider/carousel)
Dipendenze di Sviluppo:
Vite: ^5.4.1
TypeScript: ^5.5.3
ESLint: ^9.9.0
Typed CSS Modules: ^0.9.1

### Autore
[Riccardo Liciotti] – Sviluppatore principale
Ringrazio Start2Impact per l'opportunità di apprendimento e supporto.

### Licenza
Questo progetto è distribuito sotto la licenza MIT. Vedi il file LICENSE per maggiori dettagli.
