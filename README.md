# The Clone York Times

![Project Logo](./public/The_Clone_York_Times_Logo.png)

**The Clone York Times** è un clone del sito web del famoso giornale _The New York Times_, sviluppato come progetto di esame per il corso React offerto da **Start2Impact**. Il sito è stato realizzato con le tecnologie **React**, **Vite** e **TypeScript** per garantire un'esperienza utente moderna, rapida e scalabile.

<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

## Table of Contents
- [Introduzione](#introduzione)
- [Features](#features)
- [Installazione](#installazione)
- [Utilizzo](#utilizzo)
- [Struttura del Progetto](#struttura-del-progetto)
- [Screenshot](#screenshot)
- [Dipendenze](#dipendenze)
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

    git clone https://github.com/tuo-username/the-clone-york-times.git
    cd the-clone-york-times
    npm install
    npm run dev
    npm run build


## Utilizzo
Una volta avviato il server di sviluppo, visita http://localhost:3000 nel tuo browser per vedere il sito funzionante. Puoi navigare attraverso le diverse sezioni come Home, Articoli e altre pagine informative. Il sito permette la consultazione di notizie dinamiche caricate da un'API simulata (o reale, se fornita).

## Struttura del Progetto
Ecco una panoramica della struttura delle cartelle e dei file principali:

    src/components/: Componenti riutilizzabili come Header, Footer, ArticleCard.
    src/pages/: Pagine del sito come Home, Notizie, Contatti.
    src/services/: Funzioni per le chiamate API.
    src/helper/: Funzioni di utilità che semplificano e migliorano la logica del progetto.
    src/data/data.js: Contiene interaccie e dati.
    vite.config.ts: Configurazione di Vite per il build system.


## Screenshot
Ecco alcune immagini del progetto:

La home page con una lista di articoli aggiornati dinamicamente.

Visualizzazione di un articolo completo, con immagini e testo formattato.

## Dipendenze
Il progetto utilizza diverse librerie e strumenti chiave per il suo funzionamento:

- Dipendenze di Produzione:
- React: ^18.3.1
- Redux Toolkit: ^2.2.7
- React Query: ^5.53.2
- React Router DOM: ^6.26.1
- Axios: ^1.7.7
- React Slick & Slick Carousel: ^0.30.2 / ^1.8.1 (per slider/carousel)
- Dipendenze di Sviluppo:
- Vite: ^5.4.1
- TypeScript: ^5.5.3
- ESLint: ^9.9.0
- Typed CSS Modules: ^0.9.1

## Autore
***Riccardo Liciotti*** – Sviluppatore principale
Ringrazio Start2Impact per l'opportunità di apprendimento e supporto.

## Licenza
Questo progetto è distribuito sotto la licenza MIT. Vedi il file LICENSE per maggiori dettagli.
