// TP : Approfondissement TypeScript
// ==================================

// EXERCICE 1 : Les Enums (Énumérations)

// 1.1- Créez une Enum nommée StatutCommande avec les valeurs
enum StatutCommande {
    EnAttente = "EN_ATTENTE",
    Expediee = "EXPEDIEE",
    Livree = "LIVREE",
}

// 1.2- Créez une interface Commande avec les propriétés id (number) et statut (StatutCommande)
interface Commande {
    id: number;
    statut: StatutCommande;
}

// 1.3- Fonction afficherEtat qui prend une Commande et affiche un message différent selon le statut de la commande
function afficherEtat(commande: Commande): void {
    if (commande.statut === StatutCommande.Livree) {
        console.log(`Commande #${commande.id} : Colis reçu !`);
    } else {
        console.log(`Commande #${commande.id} : En cours d'acheminement.`);
    }
}

console.log("Exercice 1 : Enums ");
const commande1: Commande = { id: 1, statut: StatutCommande.Livree };
const commande2: Commande = { id: 2, statut: StatutCommande.Expediee };
const commande3: Commande = { id: 3, statut: StatutCommande.EnAttente };

afficherEtat(commande1); // Colis reçu !
afficherEtat(commande2); // En cours d'acheminement.
afficherEtat(commande3); // En cours d'acheminement.


// EXERCICE 2 : Classes et Encapsulation

// 2.1- Définisser une interface Livre avec les propriétés titre (string) et auteur (string)
interface Livre {
    titre: string;
    auteur: string;
}

// 2.2- Créer une classe Bibliotheque
// Créez une classe Bibliotheque. 
// -Propriété privée : Ajoutez une propriété private catalogue: Livre[] initialisée comme un tableau vide. Le mot-clé private empêche de modifier le tableau directement depuis l'extérieur. 
// - Méthode publique : Ajoutez une méthode ajouterLivre(nouveauLivre: Livre) qui pousse le livre dans le tableau. 
// - Méthode publique : Ajoutez une méthode obtenirNombreLivres() qui retourne la taille du catalogue.

class Bibliotheque {
    // private : impossible d'accéder à catalogue depuis l'extérieur
    private catalogue: Livre[] = [];

    ajouterLivre(nouveauLivre: Livre): void {
        this.catalogue.push(nouveauLivre);
        console.log(`"${nouveauLivre.titre}" ajouté à la bibliothèque.`);
    }

    obtenirNombreLivres(): number {
        return this.catalogue.length;
    }
}

console.log("\nExercice 2 : Classes et Encapsulation");
const maBibliotheque = new Bibliotheque();

maBibliotheque.ajouterLivre({ titre: "Le Petit Prince", auteur: "Saint-Exupéry" });
maBibliotheque.ajouterLivre({ titre: "L'Étranger", auteur: "Albert Camus" });

console.log(`Nombre de livres : ${maBibliotheque.obtenirNombreLivres()}`);

// 2.3- Test accès direct : la ligne suivante provoquerait une erreur TypeScript
// maBibliotheque.catalogue; // Property 'catalogue' is private and only accessible within class 'Bibliotheque'.t


// EXERCICE 3 : Introduction aux Génériques

// 3.1- Créez une classe générique Boite<T> qui peut contenir un élément de n'importe quel type T.
class Boite<T> {
    contenu: T;

    constructor(valeur: T) {
        this.contenu = valeur;
    }

    regarder(): T {
        return this.contenu;
    }
}

// 3.2- Utilisation
console.log("\nExercice 3 : Génériques");
const boiteAString = new Boite<string>("Bonjour");
const boiteANumber = new Boite<number>(42);

console.log(`Boite string  -> ${boiteAString.regarder()}`); // Bonjour
console.log(`Boite number  -> ${boiteANumber.regarder()}`); // 42

// TypeScript connaît les types de retour :
const texte: string = boiteAString.regarder(); // string
const valeur: number = boiteANumber.regarder(); // number



// EXERCICE 4 (Bonus) : Utility Types
// TypeScript fournit des outils pour transformer les types existants. 
// 1.  Reprendre l'interface Livre (titre, auteur). 
// 2.  Créer une fonction mettreAJourLivre qui prend : 
// - Un livre original (type Livre). 
// -Des modifications. Astuce : Utilisez le type Partial<Livre>. Cela crée une version du 
// type Livre où toutes les propriétés sont optionnelles. 
// 3.  La fonction doit retourner un nouveau livre fusionné (utilisez l'opérateur spread ...).

function mettreAJourLivre(original: Livre, modifications: Partial<Livre>): Livre {
    return { ...original, ...modifications };
}

console.log("\nExercice 4 : Utility Types");
const livreOriginal: Livre = { titre: "Dune", auteur: "Frank Herbert" };

// Mise à jour du titre uniquement
const livreMisAJour = mettreAJourLivre(livreOriginal, { titre: "Dune Messiah" });

console.log("Original   :", livreOriginal);   // { titre: 'Dune', auteur: 'Frank Herbert' }
console.log("Mis à jour :", livreMisAJour);   // { titre: 'Dune Messiah', auteur: 'Frank Herbert' }

// Mise à jour de l'auteur uniquement
const livreAuteur = mettreAJourLivre(livreOriginal, { auteur: "F. Herbert" });
console.log("Auteur modifié :", livreAuteur); // { titre: 'Dune', auteur: 'F. Herbert' }