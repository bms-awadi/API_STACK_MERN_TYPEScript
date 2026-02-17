import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001; // Port 3001 pour ne pas gêner React (5173)
// --- MIDDLEWARES ---
app.use(cors());
app.use(express.json());
// --- DONNÉES ---
interface Task {
    id: number; // Généré par le serveur (ex: Date.now())
    label: string; // Le texte de la tâche
    isDone: boolean; // false par défaut à la création
}
let tasks: Task[] = [
    { id: 1, label: 'Faire des cookies', isDone: false },
    { id: 2, label: 'Jouer a Fifa', isDone: false },
    { id: 3, label: 'Prendre le bus', isDone: true },
    { id: 4, label: 'Avoir 20/20', isDone: true }
];
// --- ROUTES ---
app.get('/', (req, res) => {
    res.send('API Library v1.0 is running...');
});
// TODO 1 : Route GET pour /api/tasks
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const { label, isDone } = req.body;
    const newTask = { id: Date.now(), label, isDone };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { label, isDone } = req.body;
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.label = label;
        task.isDone = isDone;
        res.json(task);
    }
    else {
        res.status(404).json({ message: 'Livre non trouvé' });
    }
});

app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
        res.status(204).send(); // No Content
    } else {
        res.status(404).json({ message: 'Task non trouvé' });
    }
});
// --- DÉMARRAGE ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});