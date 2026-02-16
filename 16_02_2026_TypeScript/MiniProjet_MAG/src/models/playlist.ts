import { Chanson } from "./types";

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

    public obtenirDureeTotale(): number {
        return this.titres.reduce(
            (total, chanson) => total + chanson.duree, 0);

    }

}