import { useEffect, useState } from "react";
import { Movie, getAllMovies, updateMovie, createMovie, deleteMovie } from "./api.ts";
import "./App.css";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [inputValue5, setInputValue5] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Moviesload();
  }, []);

  const Moviesload = async () => {
    try {
      const response = await getAllMovies();
      setMovies(response);
      setError(null);
    } catch (err) {
      setError('Erreur lors du chargement des films.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === '') { setError('Le nom ne peut pas être vide.'); return; }
    if (inputValue2.trim() === '') { setError('Le directeur ne peut pas être vide.'); return; }
    if (inputValue3.trim() === '') { setError('Le genre ne peut pas être vide.'); return; }
    if (inputValue4.trim() === '') { setError("L'année ne peut pas être vide."); return; }
    if (isNaN(Number(inputValue4))) { setError("L'année doit être un nombre."); return; }
    if (inputValue5.trim() === '') { setError("La durée ne peut pas être vide."); return; }
    try {
      const newMovie = await createMovie(inputValue, inputValue2, inputValue3, Number(inputValue4), inputValue5);
      setMovies((prev) => [...prev, newMovie]);
      setInputValue('');
      setInputValue2('');
      setInputValue3('');
      setInputValue4('');
      setInputValue5('');
      setError(null);
    } catch (err) {
      setError('Erreur lors de la création du film.');
      console.error(err);
    }
  };

  const handleModify = async (_id: string, newTitle: string, newDirector: string, newGenre: string, newYear: number, newDuration: number) => {
    try {
      await updateMovie(_id, newTitle, newDirector, newGenre, newYear, newDuration);
      setMovies((prev) =>
        prev.map((movie) =>
          movie._id === _id
            ? { ...movie, title: newTitle, director: newDirector, genre: newGenre, year: newYear, duration: newDuration }
            : movie
        )
      );
      setError(null);
    } catch {
      setError('Erreur lors de la modification du film.');
    }
  };

  const handleDelete = async (_id: string) => {
    try {
      await deleteMovie(_id);
      setMovies((prev) => prev.filter((movie) => movie._id !== _id));
      setError(null);
    } catch {
      setError('Erreur lors de la suppression.');
    }
  };

  const btnStyle = { padding: '8px 16px', fontSize: '15px', cursor: 'pointer', color: 'white', border: 'none', borderRadius: '4px' };

  return (
    <div className="container">
      <h1>Movies Manager</h1>
      <form onSubmit={handleCreate}>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Nom du film"
          style={{ padding: '10px', fontSize: '16px', border: '2px solid #000000', borderRadius: '4px', height: '44px', boxSizing: 'border-box', backgroundColor: 'white', color: 'black' }} />
        <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} placeholder="Directeur du film"
          style={{ padding: '10px', fontSize: '16px', border: '2px solid #000000', borderRadius: '4px', height: '44px', boxSizing: 'border-box', backgroundColor: 'white', color: 'black' }} />
        <input type="text" value={inputValue3} onChange={(e) => setInputValue3(e.target.value)} placeholder="genre du film"
          style={{ padding: '10px', fontSize: '16px', border: '2px solid #000000', borderRadius: '4px', height: '44px', boxSizing: 'border-box', backgroundColor: 'white', color: 'black' }} />
        <input type="text" value={inputValue4} onChange={(e) => setInputValue4(e.target.value)} placeholder="Année de sortie du film"
          style={{ padding: '10px', fontSize: '16px', border: '2px solid #000000', borderRadius: '4px', height: '44px', boxSizing: 'border-box', backgroundColor: 'white', color: 'black' }} />
        <input type="text" value={inputValue5} onChange={(e) => setInputValue5(e.target.value)} placeholder="Durée du film"
          style={{ padding: '10px', fontSize: '16px', border: '2px solid #000000', borderRadius: '4px', height: '44px', boxSizing: 'border-box', backgroundColor: 'white', color: 'black' }} />
        <button type="submit"
          style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#ff0000', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', height: '44px' }}>
          Ajouter
        </button>
      </form>

      {loading && <p>Chargement...</p>}
      {!loading && movies.length === 0 && <p>Aucun film pour le moment.</p>}

      <ul>
        {movies.map((movie) => (
          <div key={movie._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <li style={{ flex: 1, fontSize: '18px' }}>
              {movie.title} - {movie.director} {movie.genre} ({movie.year})
            </li>
            <div style={{ display: 'flex', gap: '8px', marginLeft: '10px' }}>
              <button
                onClick={() => handleDelete(movie._id)}
                style={{ ...btnStyle, backgroundColor: '#ff4444' }}>
                Supprimer
              </button>
              <button
                onClick={() => {
                  const newTitle = prompt('Nouveau titre', movie.title) || movie.title;
                  const newDirector = prompt('Nouveau directeur', movie.director) || movie.director;
                  const newGenre = prompt('Nouveau genre', movie.genre) || movie.genre;
                  const newYear = Number(prompt('Nouvelle année', String(movie.year)) || movie.year);
                  const newDuration = Number(prompt('Nouvelle durée', String(movie.duration)) || movie.duration);
                  handleModify(movie._id, newTitle, newDirector, newGenre, newYear, newDuration);
                }}
                style={{ ...btnStyle, backgroundColor: '#ffaa00' }}>
                Modifier
              </button>
            </div>
          </div>
        ))}
      </ul>

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;