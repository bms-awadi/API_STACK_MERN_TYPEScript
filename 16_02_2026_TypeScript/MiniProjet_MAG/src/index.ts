import { Playlist } from "./models/playlist";
import { rechercherTitres } from "./services/musicAPI";
import { StyleMusical } from "./models/types";

// Création d'une playlist
const maPlaylist = new Playlist("Mes Favoris 2025");

async function main() {
    try {
        const titresDaftPunk = await rechercherTitres("Daft Punk");
        console.log("Titres trouvés pour Daft Punk :", titresDaftPunk);
        // Ajoutez les titres trouvés à la playlist
        titresDaftPunk.forEach(titre => maPlaylist.ajouter(titre));
        console.log("Playlist après ajout des titres Daft Punk :", maPlaylist);
        console.log("Durée totales : " + maPlaylist.obtenirDureeTotale());
        maPlaylist.jouerAleatoire();
        console.log("Filtre par genre Electro : ");
        console.log(maPlaylist.filtrerParGenre(StyleMusical.ELECTRO));
    } catch (error) {
        console.error("Erreur lors de la recherche des titres :", error);
    }
}

main();