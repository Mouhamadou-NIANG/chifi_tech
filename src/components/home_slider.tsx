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
            marginTop: "16%",
            display: 'flex',         
            justifyContent: 'center',   
            alignItems: 'center', 
            bgcolor: '#cfe8fc',
            height: '100vh', 
            width: '80%',  
          }}
        >
          <div>
            <h1>Bienvenue sur mon Portfolio</h1>
            <p>Ce composant est centré horizontalement et verticalement.</p>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
}
