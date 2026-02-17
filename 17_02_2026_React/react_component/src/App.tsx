import { Routes, Route, Link } from 'react-router-dom';
import BookCard from './components/BookCard';

const myBooks = [
  { id: 1, title: "Le Petit Prince", author: "Saint-Exupéry" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "L'Étranger", author: "Albert Camus" }
];

const Home = () => <h2>Page d'accueil</h2>;

function Library() {
  return (
    <div>
      <h2>Ma Collection</h2>
      <div className="book-list">
        {myBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <nav style={{ padding: '20px', background: '#eee' }}>
        <Link to="/">Accueil</Link> | <Link to="/library">Livres</Link>
      </nav>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="*" element={<h2>Erreur 404 : Page introuvable</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;