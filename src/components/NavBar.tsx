import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#4A90E2',
      }}>
        <Typography
          to="/"
          variant="h6"
          component={NavLink}
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Contacts
        </Typography>
        <Box sx={{display: 'flex', gap: 2}}>
          <Button
            component={NavLink}
            to="/"
            sx={{color: 'inherit'}}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/new-contact"
            sx={{color: 'inherit'}}
          >
            Add new contact
          </Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
