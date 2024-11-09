import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

export default function Home_slider() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ height: '100vh', position: 'relative', display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',                // Utiliser Flexbox
            justifyContent: 'center',       // Centrer horizontalement
            alignItems: 'center',           // Centrer verticalement
            bgcolor: '#cfe8fc',
            height: '100vh',                // Hauteur de 100% de la fenêtre (viewport)
            width: '80%',                  // Largeur de 100%
          }}
        >
          <div>
            <h1>Bienvenue sur la page d'accueil</h1>
            <p>Ce composant est centré horizontalement et verticalement.</p>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
}
