import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import movieRoutes from './routes/movie.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// logs des methodes et des routes avec le chemein d'accès
// GET
console.log('GET - Récupérer tous les films : http://localhost:3000/api/movies');
console.log('GET - Récupérer un film par ID : http://localhost:3000/api/movies/:id');
// POST
console.log('POST - Créer un nouveau film : http://localhost:3000/api/movies');
// PUT
console.log('PUT - Mettre à jour un film : http://localhost:3000/api/movies/:id');
// DELETE
console.log('DELETE - Supprimer un film : http://localhost:3000/api/movies/:id');

// Middleware pour parser le JSON
app.use(express.json());
// Routes
app.use('/api/movies', movieRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});