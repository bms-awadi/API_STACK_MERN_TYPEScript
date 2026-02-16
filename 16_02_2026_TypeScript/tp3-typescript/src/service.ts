import { Utilisateur } from "./types";

// Base de données simulée
export const mockUsers: Utilisateur[] = [
    { id: 1, nom: "Alice", email: "alice@test.com" },
    { id: 2, nom: "Kylie", email: "kylie@test.com" },
    { id: 3, nom: "Cloe", email: "cloe@test.com" },
    { id: 4, nom: "Liam", email: "liam@test.com" },
    { id: 5, nom: "Noah", email: "noah@test.com" },
    { id: 6, nom: "Emma", email: "emma@test.com" }
];

// Promesse avec succès aléatoire (simule une vraie API)
export function fetchUtilisateurs(): Promise<Utilisateur[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // 1 chance sur 2

            if (success) {
                console.log("... Données récupérées !");
                resolve(mockUsers);
            } else {
                reject("Erreur serveur : impossible de récupérer les utilisateurs.");
            }
        }, 1000);
    });
}