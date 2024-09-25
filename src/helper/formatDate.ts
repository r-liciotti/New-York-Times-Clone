export default function formatDate(dateString: string): string {
    // Crea un oggetto Date partendo dalla stringa di data
    const date = new Date(dateString);

    // Formatta la data nel formato "MMM dd, yyyy"
    const formattedDate = date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return formattedDate;
}
