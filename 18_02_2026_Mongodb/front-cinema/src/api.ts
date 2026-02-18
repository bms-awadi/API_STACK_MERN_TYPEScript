const API_BASE = 'http://localhost:3001/api/movies';
const _headers = { 'Content-Type': 'application/json' };

export interface Movie {
    _id: string;
    title: string;
    director: string;
    genre: string;
    year: number;
    duration: number;
}

export const getAllMovies = async (): Promise<Movie[]> => {
    try {
        console.log('Fetching movies from API...');
        const response = await fetch(API_BASE);
        console.log('Response status:', response.status);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération des films:', error);
        throw error;
    }
};

export const createMovie = async (title: string, director: string, genre: string, year: number, duration: string): Promise<Movie> => {
    try {
        const response = await fetch(API_BASE, {
            method: 'POST',
            headers: _headers,
            body: JSON.stringify({ title: title, director: director, genre: genre, year: year, duration: duration }),
        });
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la création du film:', error);
        throw error;
    }
};

export const toggleMovie = async (_id: string, title: string, director: string, genre: string, year: number): Promise<Movie> => {
    try {
        const response = await fetch(`${API_BASE}/${_id}`, {
            method: 'PUT',
            headers: _headers,
            body: JSON.stringify({ title, director, genre, year }),
        });
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Erreur lors du toggle du film ${_id}:`, error);
        throw error;
    }
};

export const updateMovie = async (_id: string, title: string, director: string, genre: string, year: number, duration: number): Promise<Movie> => {
    try {
        const response = await fetch(`${API_BASE}/${_id}`, {
            method: 'PUT',
            headers: _headers,
            body: JSON.stringify({ title, director, genre, year, duration }),
        });
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Erreur lors de la mise à jour du film ${_id}:`, error);
        throw error;
    }
};

export const deleteMovie = async (_id: string): Promise<void> => {
    try {
        console.log(`Deleting movie with id ${_id}...`);
        const response = await fetch(`${API_BASE}/${_id}`, {
            method: 'DELETE',
            headers: _headers,
        });
        if (!response.ok) {
            throw new Error(`Erreur ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(`Erreur lors de la suppression du film ${_id}:`, error);
    }
};