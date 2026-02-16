import { Chanson, StyleMusical } from "../models/types";

const chansons: Chanson[] = [
    { id: 1, titre: "Papaoutai", artiste: "Stromae", duree: 210, style: StyleMusical.AFRO },
    { id: 2, titre: "Jefe", artiste: "Ninho", duree: 183, style: StyleMusical.HIPHOP },
    { id: 3, titre: "Billie Jean", artiste: "Michael Jackson", duree: 294, style: StyleMusical.POP },
    { id: 4, titre: "Shape of You", artiste: "Ed Sheeran", duree: 233, style: StyleMusical.POP },
    { id: 5, titre: "Bohemian Rhapsody", artiste: "Queen", duree: 354, style: StyleMusical.ROCK },
    { id: 6, titre: "Smells Like Teen Spirit", artiste: "Nirvana", duree: 301, style: StyleMusical.ROCK },
    { id: 7, titre: "Rolling in the Deep", artiste: "Adele", duree: 228, style: StyleMusical.POP },
    { id: 8, titre: "Blinding Lights", artiste: "The Weeknd", duree: 200, style: StyleMusical.ELECTRO },
    { id: 9, titre: "Uptown Funk", artiste: "Mark Ronson ft. Bruno Mars", duree: 269, style: StyleMusical.FUNK },
    { id: 10, titre: "Despacito", artiste: "Luis Fonsi ft. Daddy Yankee", duree: 229, style: StyleMusical.REGGAE },
    { id: 11, titre: "La Vie en Rose", artiste: "Édith Piaf", duree: 187, style: StyleMusical.JAZZ },
    { id: 12, titre: "Ne Me Quitte Pas", artiste: "Jacques Brel", duree: 230, style: StyleMusical.CLASSIQUE },
    { id: 13, titre: "Je te promets", artiste: "Johnny Hallyday", duree: 260, style: StyleMusical.ROCK },
    { id: 14, titre: "L'Amour Existe Encore", artiste: "Céline Dion", duree: 215, style: StyleMusical.POP },
    { id: 15, titre: "Comme des Enfants", artiste: "Coeur de Pirate", duree: 193, style: StyleMusical.FOLK },
    { id: 16, titre: "Around the world", artiste: "Daft Punk", duree: 320, style: StyleMusical.ELECTRO },
    { id: 17, titre: "Get Lucky", artiste: "Daft Punk", duree: 365, style: StyleMusical.ELECTRO },
    { id: 18, titre: "One More Time", artiste: "Daft Punk", duree: 429, style: StyleMusical.ELECTRO },
];


export async function rechercherTitres(requete: string): Promise<Chanson[]> {
    return new Promise((resolve, reject) => {
        // Si la recherche est vide, on rejette la promesse
        if (!requete.trim()) {
            reject("La requête de recherche ne peut pas être vide.");
            return;
        }

        console.log("Recherche en cours sur le serveur...")

        setTimeout(() => {
            const resultats = chansons.filter(chanson =>
                chanson.titre.toLowerCase().includes(requete.toLowerCase()) ||
                chanson.artiste.toLowerCase().includes(requete.toLowerCase())
            );

            resolve(resultats);
        }, 2000);
    });
}