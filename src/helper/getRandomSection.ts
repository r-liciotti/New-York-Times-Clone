// src/utils/multimediaUtils.ts

import { mainSection } from "../data/data";



// Funzione per verificare se l'articolo ha multimedia valido
export const getRandomeSection = (): string => {
    const randomIndex = Math.floor(Math.random() * mainSection.length);
    return mainSection[randomIndex].param;
};
