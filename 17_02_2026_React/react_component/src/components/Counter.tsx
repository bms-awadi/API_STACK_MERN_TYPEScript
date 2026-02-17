import { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(() => {
        // Récupérer la valeur sauvegardée au chargement
        const saved = localStorage.getItem('compteur');
        return saved ? parseInt(saved, 10) : 0;
    });

    // Sauvegarder à chaque changement du compteur
    useEffect(() => {
        localStorage.setItem('compteur', count.toString());
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

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
};

export default Counter;