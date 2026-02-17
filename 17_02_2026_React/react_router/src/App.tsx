import { Routes, Route, Link } from 'react-router-dom';

// Composants de test
const Home = () => <h2>Page d'accueil</h2>;
const Library = () => <h2>Ma Bibliothèque</h2>;

function App() {
  return (
    <div>
      <nav style={{ padding: '20px', backgroundColor: '#eee' }}>
        <Link to="/">Accueil</Link> | <Link to="/library">Livres</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          {/* Route dpour les erreurs 404 */}
          <Route path="*" element={<h2>Erreur 404 - Page non trouvée</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;