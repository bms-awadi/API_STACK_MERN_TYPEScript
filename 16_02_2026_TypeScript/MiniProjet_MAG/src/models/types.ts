export enum StyleMusical {
    ROCK = "Rock",
    POP = "Pop",
    ELECTRO = "Electro",
    HIPHOP = "Hip-Hop",
    JAZZ = "Jazz",
    CLASSIQUE = "Classique",
    REGGAE = "Reggae",
    BLUES = "Blues",
    COUNTRY = "Country",
    METAL = "Metal",
    FOLK = "Folk",
    FUNK = "Funk",
    AFRO = "Afro",
}

export interface Chanson {
    id: number;
    titre: string;
    artiste: string;
    duree: number;
    style: StyleMusical
}
