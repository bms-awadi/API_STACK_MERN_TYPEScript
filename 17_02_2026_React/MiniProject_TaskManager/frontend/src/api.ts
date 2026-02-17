
const API_BASE = '/api/tasks';
const _headers = { 'Content-Type': 'application/json' };

export interface Task {
    id: number; // Généré par le serveur (ex: Date.now())
    label: string; // Le texte de la tâche
    isDone: boolean; // false par défaut à la création
}

export const getAllTasks = async (): Promise<Task[]> => {
    try {
        const response = await fetch(API_BASE);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;

    }
    catch (error) {
        console.error('Erreur lors de la récupération des tâches:', error);
        throw error;
    }
};


export const createTask = async (label: string, isDone: boolean): Promise<Task> => {
    try {
        const response = await fetch(API_BASE, {
            method: 'POST',
            headers: _headers,
            body: JSON.stringify({ label: label, isDone: isDone }),
        });
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur', error);
        throw error;
    }
}




// toggleTask
// 3- Inverser l'état d'une tache
export const toggleTask = async (id: number, label: string, isDone: boolean): Promise<Task> => {
    try {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: 'PUT',
            headers: _headers,
            body: JSON.stringify({ id: id, label: label, isDone: isDone }),
        });
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Erreur lors du toggle de la tâche ${id}:`, error);
        throw error;
    }
};

// 4- Supprimer une tache
export const deleteTask = async (id: number): Promise<void> => {
    try {
        const response = await fetch(`${API_BASE}/${id}`, {
            method: 'DELETE',
            headers: _headers,

        });
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Erreur lors de la suppression de la tâche ${id}:`, error);
        throw error;
    }
};