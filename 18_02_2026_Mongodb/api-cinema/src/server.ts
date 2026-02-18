import express from 'express';
import router from './routes/movie.routes';
import cors from 'cors';
import connectDB from './config/db';

const app = express();
const PORT = process.env.PORT || 3001;

connectDB();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/movies', router);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 