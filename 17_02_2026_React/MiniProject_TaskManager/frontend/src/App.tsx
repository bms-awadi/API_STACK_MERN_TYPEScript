import { useEffect, useState } from "react";
import { Task, getAllTasks, createTask, toggleTask, deleteTask } from "./api.ts";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Tasksload();
  }, []);

  const Tasksload = async () => {
    try {
      const response = await getAllTasks();
      setTasks(response);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des tâches.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // handleCreate
  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setError('La tache ne peut pas être vide.');
      return;
    }
    try {
      const newTask = await createTask(inputValue, false);
      setTasks((prev) => [...prev, newTask]);
      setInputValue('');
      setError(null);
    } catch (err) {
      setError('Erreur lors de la création de la tâche.');
      console.error(err);
    }
  };

  const handleToggle = async (id: number, label: string, isDone: boolean) => {
    try {
      const updatedTask = await toggleTask(id, label, !isDone);
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? updatedTask : task))
      );
    } catch {
      setError('Erreur lors de la mise à jour de la tâche.');
    }
  };


  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      setError(null);
    } catch {
      setError('Erreur lors de la suppression.');
      console.error(`Erreur lors de la suppression de la tâche ${id}`);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <form onSubmit={handleCreate}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Nouvelle tâche"
        ></input>
        <button type="submit">Ajouter</button>
      </form>
      {/* État de chargement */}
      {loading && <p>Chargement...</p>}
      {!loading && tasks.length === 0 && <p>Aucune tâche pour le moment.</p>}
      {/* Liste des tâches */}
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            {/*Si isDone est true : la tache est barré.*/}
            <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
              {task.label}
            </span>


            <button onClick={() => handleToggle(task.id, task.label, task.isDone)}>Toggle</button>
            <button onClick={() => handleDelete(task.id)}>Supprimer</button>
          </div>
        ))}
      </ul>

      {/* Affichage des erreurs */}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;



