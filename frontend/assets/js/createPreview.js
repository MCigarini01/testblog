export function createPreview(text, maxChars = 1000) {
    // Se il testo è già corto lo restituisce interamente
    if (text.length <= maxChars) {
        return text;
    }

    // Taglia al numero massimo di caratteri
    let preview = text.substring(0, maxChars);

    // Trova l'ultimo spazio per evitare di spezzare una parola
    let lastSpace = preview.lastIndexOf(" ");

    // Se non trova spazi, taglia comunque
    if (lastSpace === -1) {
        return preview + "...";
    }

    return preview.substring(0, lastSpace) + "...";
}