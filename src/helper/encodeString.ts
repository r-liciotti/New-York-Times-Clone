export function encodeString(input: string): string {
    // Codifica la stringa usando encodeURIComponent per gestire tutti i caratteri speciali
    let encoded = encodeURIComponent(input);

    // Sostituisci lo spazio con '%20'
    encoded = encoded.replace(/%20/g, '%20');

    // Il carattere '&' sarà già codificato come '%26' da encodeURIComponent
    // quindi non serve un'ulteriore sostituzione per '&'

    return encoded;
}