// Étape 1. Importation useState qui permet de créer un état
import { useState } from 'react';

function App() {
  // Étape 2. Initialisation du State
  const [count, setCount] = useState(0);
  console.log('Phase 1 - Rendu du composant App, count:', count);

  // Étape 3. Fonctions de gestion (Handlers)
  const increment = () => {
    setCount(count + 1);
    console.log('Phase 2 - Incrémentation, count:', count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    console.log('Phase 2 - Décrémentation, count:', count - 1);
  };

  // Étape 4. Rendu (JSX)
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Compteur Interactif</h1>

      <p style={{
        fontSize: '40px',
        fontWeight: 'bold',
        color: count === 0 ? 'white' : count > 0 ? 'green' : 'red'
      }}>
        {count}
      </p>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={decrement} style={{ padding: '10px 20px' }}>
          - Diminuer
        </button>

        <button onClick={increment} style={{ padding: '10px 20px' }}>
          + Augmenter
        </button>
      </div>
    </div>
  );
}

export default App;