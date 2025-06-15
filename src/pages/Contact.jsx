import React from 'react';
import { Container, Typography, Box, Grid, Button, IconButton, useTheme, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/ariana-medina-1b1a0a307/',
      label: 'LinkedIn',
      color: '#0077B5'
    },
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/seraphicoasiszine/',
      label: 'Instagram',
      color: '#E4405F'
    }
  ];

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        width: '100vw',
        background: 'linear-gradient(135deg, #FFF5F8 0%, #FFE4E9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 900,
          mx: 'auto',
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
            width: '100%'
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(45deg, #FF69B4 30%, #C71585 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Let's Connect
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Feel free to reach out through any of these platforms!
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {socialLinks.map((link, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  p: 2,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 8px 20px rgba(255, 105, 180, 0.15)'
                  },
                  width: '100%'
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: 'white',
                    boxShadow: '0 4px 12px rgba(255, 105, 180, 0.1)',
                    width: { xs: 48, md: 56 },
                    height: { xs: 48, md: 56 },
                    mb: 1,
                    '&:hover': {
                      backgroundColor: link.color,
                      color: 'white'
                    }
                  }}
                >
                  {link.icon}
                </IconButton>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.875rem', md: '1rem' }
                  }}
                >
                  {link.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
            width: '100%'
          }}
        >
          <Button
            variant="contained"
            startIcon={<EmailIcon />}
            href="mailto:arianam3dina@gmail.com"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              fontSize: { xs: '1rem', md: '1.1rem' },
              background: 'linear-gradient(45deg, #FF69B4 30%, #C71585 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 180, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #C71585 30%, #FF69B4 90%)',
                boxShadow: '0 5px 15px 2px rgba(255, 105, 180, 0.4)'
              }
            }}
          >
            Email Me
          </Button>

          <Button
            variant="contained"
            startIcon={<PhoneIcon />}
            href="tel:209-284-9709"
            sx={{
              py: 1.5,
              px: 4,
              borderRadius: 2,
              fontSize: { xs: '1rem', md: '1.1rem' },
              background: 'linear-gradient(45deg, #FF69B4 30%, #C71585 90%)',
              boxShadow: '0 3px 5px 2px rgba(255, 105, 180, 0.3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #C71585 30%, #FF69B4 90%)',
                boxShadow: '0 5px 15px 2px rgba(255, 105, 180, 0.4)'
              }
            }}
          >
            Call Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact; 