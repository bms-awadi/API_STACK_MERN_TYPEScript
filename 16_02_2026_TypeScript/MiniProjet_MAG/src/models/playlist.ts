import { Chanson, StyleMusical } from "./types";

export class Playlist {

    public nom: string;
    private titres: Chanson[] = [];

    constructor(nom: string) {
        this.nom = nom;
    }

    public ajouter(chanson: Chanson): void {
        this.titres.push(chanson);
        console.log(`Chanson "${chanson.titre}" ajoutée à la playlist "${this.nom}".`);
    }

    public retirer(chanson: Chanson): void {
        const index = this.titres.indexOf(chanson);
        if (index !== -1) {
            this.titres.splice(index, 1);
            console.log(`Chanson "${chanson.titre}" retirée de la playlist "${this.nom}".`);
        }
    }

    public obtenirDureeTotale(): string {
        const totalSecondes = this.titres.reduce(
            (total, chanson) => total + chanson.duree,
            0
        );
        return this.typageduree(totalSecondes);
    }

    public typageduree(totalSecondes: number): string {
        const minutes = Math.floor(totalSecondes / 60);
        const secondes = totalSecondes % 60;
        return `${minutes} m ${secondes.toString().padStart(2, "0")} s`;
    }

    public jouerAleatoire(): void {
        if (this.titres.length == 0) {
            console.log(`La playlist "${this.nom}" est vide.`);
            return;
        }
        const indexAleatoire = Math.floor(Math.random() * this.titres.length);
        const chansonAleatoire = this.titres[indexAleatoire] ?? { titre: "Inconnu", duree: 0 };
        console.log(`Lecture de "${chansonAleatoire.titre}" de la playlist "${this.nom}".`);
    }

    public filtrerParGenre(style: StyleMusical): Chanson[] {
        return this.titres.filter(chanson => chanson.style === style);
    }

}