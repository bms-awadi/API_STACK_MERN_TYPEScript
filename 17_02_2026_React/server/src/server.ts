import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001; // Port 3001 pour ne pas gêner React (5173)

// --- MIDDLEWARES ---
// TODO : Ajoutez les deux middlewares essentiels :
// 1. Celui pour autoriser les requêtes externes (CORS)
// 2. Celui pour lire le JSON dans le body des requêtes
app.use(cors());
app.use(express.json());

// --- DONNÉES ---
// Simulation de base de données en mémoire
let books = [
    { id: 1, title: 'Express pour les nuls', author: 'Node JS' }
];

// --- ROUTES ---

// Route de test
app.get('/', (req, res) => {
    res.send('API Library v1.0 is running...');
});

// TODO 1 : Route GET pour /api/books
// Cette route doit renvoyer le tableau 'books' au format JSON
app.get('/api/books', (req, res) => {
    res.json(books);
});

// TODO 2 : Route POST pour /api/books
// Cette route doit :
// 1. Récupérer le titre et l'auteur dans le body de la requête
// 2. Créer un nouvel objet livre avec un id unique
// 3. L'ajouter au tableau books
// 4. Renvoyer le livre créé en JSON
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;

    // Vérification que les données sont présentes
    if (!title || !author) {
        res.status(400).json({ error: 'Title et author sont requis' });
        return;
    }

    // Créer le nouveau livre
    const newBook = {
        id: books.length > 0 ? Math.max(...books.map(b => b.id)) + 1 : 1,
        title,
        author
    };

    // L'ajouter au tableau
    books.push(newBook);

    // Renvoyer le livre créé
    res.status(201).json(newBook);
});

// TODO 3 : Route GET pour /api/books/:id
// Cette route doit :
// 1. Récupérer l'id depuis l'URL (req.params.id)
// 2. Chercher le livre avec cet id dans le tableau
// 3. Si trouvé, le renvoyer en JSON
// 4. Si non trouvé, renvoyer un erreur 404
app.get('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        res.status(404).json({ error: 'Livre non trouvé' });
        return;
    }

    res.json(book);
});

// TODO 4 : Route PUT pour /api/books/:id
// Cette route doit :
// 1. Récupérer l'id depuis l'URL
// 2. Chercher le livre
// 3. Mettre à jour ses propriétés (title et/ou author)
// 4. Renvoyer le livre modifié
app.put('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const { title, author } = req.body;

    const book = books.find(b => b.id === parseInt(id));

    if (!book) {
        res.status(404).json({ error: 'Livre non trouvé' });
        return;
    }

    // Mettre à jour les propriétés si fournies
    if (title) book.title = title;
    if (author) book.author = author;

    res.json(book);
});

// TODO 5 : Route DELETE pour /api/books/:id
// Cette route doit :
// 1. Récupérer l'id depuis l'URL
// 2. Chercher et supprimer le livre du tableau
// 3. Renvoyer un message de confirmation
app.delete('/api/books/:id', (req, res) => {
    const { id } = req.params;
    const index = books.findIndex(b => b.id === parseInt(id));

    if (index === -1) {
        res.status(404).json({ error: 'Livre non trouvé' });
        return;
    }

    const deletedBook = books.splice(index, 1);
    res.json({ message: 'Livre supprimé', book: deletedBook[0] });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
    console.log(`GET  : http://localhost:${PORT}/api/books`);
    console.log(`POST : http://localhost:${PORT}/api/books`);
});