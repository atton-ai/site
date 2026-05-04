import { useState, useEffect } from 'react';

export function AlternatingText() {
  const [currentState, setCurrentState] = useState(0);
  const states = [
    'Cognito, cum machinis',
    'I think, with machines'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        fontSize: '1.05rem',
        fontWeight: 600,
        color: 'var(--text)',
        opacity: 0.75,
        letterSpacing: '0.01em',
        transition: 'opacity 0.8s ease-in-out'
      }}
    >
      {states[currentState]}
    </div>
  );
}