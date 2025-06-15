import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About', 'Projects', 'Contact'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 20px rgba(255, 105, 180, 0.1)',
        width: '100%'
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 } }}>
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: '1.5rem'
            }}
          >
            Ariana Medina
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'primary.main' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 4px 20px rgba(255, 105, 180, 0.15)',
                  borderRadius: 2
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 105, 180, 0.08)'
                    }
                  }}
                >
                  <Typography 
                    textAlign="center"
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 500
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              fontSize: '1.25rem'
            }}
          >
            Ariana Medina
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: 'text.primary',
                  display: 'block',
                  fontWeight: 500,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(255, 105, 180, 0.08)'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 