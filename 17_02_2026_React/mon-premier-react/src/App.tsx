import { useState } from 'react';

export default function App() {
  const [prenom, setPrenom] = useState('VotrePrenom');

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <h1>Hello World !</h1>
      <p>Mon premier composant React fonctionne.</p>

      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Personnalisation</h2>
        <p>Défi rapide : modifiez le texte ci-dessous !</p>

        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
          placeholder="Entrez votre prénom"
        />

        <h1 style={{ textAlign: 'center', color: '#61fb82', marginTop: '100px' }}>
          Hello {prenom} !
        </h1>
      </div>
    </div>
  );
}