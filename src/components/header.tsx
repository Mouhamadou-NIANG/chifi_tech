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
      <AppBar position="static" sx={{ backgroundColor: '#59708163;', padding: 0, margin: 0 }}>
        <Toolbar sx={{ justifyContent: 'center' }}> {/* Center the content */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1440, position: 'absolute', left: 16}}
          >
            <CoronavirusIcon />
          </IconButton>

          {/* Wrap the menu items in a container and center them */}
          <Box sx={{ display: 'flex', gap: 8 }}>
            <Typography variant="h6" component="div">
              Home
            </Typography>
            <Typography variant="h6" component="div">
              Project
            </Typography>
            <Typography variant="h6" component="div">
              Skills
            </Typography>
            <Typography variant="h6" component="div">
              Past Collaboration
            </Typography>
          </Box>

          <Button color="inherit" sx={{ position: 'absolute', right: 16 }}>Login</Button> {/* Align login button to the right */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
