import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#0a1e2dd4', paddingLeft: "15%", paddingRight: "15%", margin: 0, marginTop: "10px", position: "fixed", zIndex: 1 }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1440, position: 'absolute', left: 16 }}
          >
            <CoronavirusIcon />
          </IconButton>

          {/* Wrap the menu items in a container and center them */}
          <Box sx={{ display: 'flex', gap: 8 }}>
            <Button color='inherit' sx={{ padding: 0, minWidth: 'auto', textTransform: 'none', backgroundColor: 'transparent', '&:hover': { backgroundColor: '#59708163' } }} onClick={() => console.log('Home clicked')}>
              <Typography variant="h6" component="div">
                Home
              </Typography>
            </Button>
            <Button color='inherit' sx={{ padding: 0, minWidth: 'auto', textTransform: 'none', backgroundColor: 'transparent', '&:hover': { backgroundColor: '#59708163' } }} onClick={() => console.log('Home clicked')}>

              <Typography variant="h6" component="div">
                Project
              </Typography>
            </Button>
            <Button color='inherit' sx={{ padding: 0, minWidth: 'auto', textTransform: 'none', backgroundColor: 'transparent', '&:hover': { backgroundColor: '#59708163' } }} onClick={() => console.log('Home clicked')}>
              <Typography variant="h6" component="div">
                Skills
              </Typography>
            </Button>
            <Button color='inherit' sx={{ padding: 0, minWidth: 'auto', textTransform: 'none', backgroundColor: 'transparent', '&:hover': { backgroundColor: '#59708163' } }} onClick={() => console.log('Home clicked')}>
              <Typography variant="h6" component="div">
                Past Collaboration
              </Typography>
            </Button>
          </Box>

          <Button color="inherit" sx={{ position: 'absolute', right: 16 }}>Contact-Me</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
