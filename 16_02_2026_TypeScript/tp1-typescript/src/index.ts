// TP1 - Introduction à TypeScript
//1.1- Installation et Setup

//:


// Exercice 1 : Primits et Inférence
//___________________________________
// 2.1- 3 variables avec typage explicite : nom(string), age(number), estAdherent(boolean)
let nom: string = "Awadi";
let age: number = 25;
let estAdherent: boolean = true;

console.log(nom);
console.log(age);
console.log(estAdherent);

// 2.2- Test : Assigner age avec une string et observer l'erreur
// age = "25"; // Erreur : Type 'string' is not assignable to type 'number'.

//2.3- Inérence :  Créez une variable score = 10. Ne précisez pas le type. Survolez-la avec votre souris. Quel type TypeScript a-t-il deviné ?
let score = 10;
// TypeScript a deviné que 'score' est de type 'number' grâce à l'inférence de type.

// Exercice 2 : Tableaux et Tuples
//_________________________________
// 3.1- Tableau simple : Créez un tableau sports qui n'accepte que des string.
let sports: string[] = ["football", "basketball", "tennis"];

// 3.2- Tableu d'objeeets : Créez un tableau panier qui contient des objets : {produit: string, prix: number}
let panier: { produit: string; prix: number }[] = [
    { produit: "Eau de cristaline", prix: 1.12 },
    { produit: "Kinder Bueno", prix: 4.99 },
];

// 3.3- Tuple : Créez une variable reponseAPI qui doit contenir exactement deux éléments : un code de statut (ex: 200) et un message (ex: "OK")
let reponseAPI: [number, string] = [200, "OK"];

// Exercice 3 : Fonctions
//________________________
// 4.1- Typage de retour : Créez une fonction calculerRemise qui prend un prix (number) et retourne le prix avec 20% de remise (number). 
function calculerRemise(prix: number): number {
    return prix * (1 - 0.2);
}

// 4.2- Paramètre optionnel : Créez une fonction saluer qui prend un prenom et un titre optionnel (ex: "M.", "Mme"). Si le titre est absent, affichez juste "Bonjour [prenom]".
function saluer(prenom: string, titre?: string): string {
    if (titre) {
        return `Bonjour ${titre} ${prenom}`;
    }
    return `Bonjour ${prenom}`;
}

// 4.3- Union Types : Créez une fonction formaterID qui accepte un argument pouvant être soit une string soit un number. 
function formaterID(id: string | number): string {
    return `ID: ${id}`;
}

// Challenge : Modélisation (Préparation Projet Final) 
//____________________________________________________
//Ici, on commence à préparer la "Ligue Sportive" de vendredi. 
// Définissez une Interface nommée IEquipement avec : 
// ●  id (number) 
// ●  nom (string) 
// ●  categorie (string) 
// ●  disponible (boolean) 
interface IEquipement {
    id: number;
    nom: string;
    categorie: string;
    disponible: boolean;
}
const equipements: IEquipement[] = [
    { id: 1, nom: "Ballon de football", categorie: "Sport", disponible: true },
    { id: 2, nom: "Raquette de tennis", categorie: "Sport", disponible: false },
    { id: 3, nom: "Vélo de montagne", categorie: "Transport", disponible: true },
];

// Créez une fonction afficherInventaire qui prend un tableau de IEquipement et affiche en console uniquement les noms des équipements qui sont disponible: true.
function afficherInventaire(equipements: IEquipement[]) {
    equipements.forEach(equipement => {
        if (equipement.disponible) {
            console.log(equipement.nom);
        }
    });
}