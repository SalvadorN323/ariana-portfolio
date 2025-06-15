import React from 'react';
import { Container, Typography, Box, Button, Grid, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import headshot from '../assets/IMG_1009.JPEG';

const starArt = `
⠀⠀⠀✦　　　　　　　　　　　　　✦　　　ﾟ *　　　　　　　　　　　　　✦ 　　　　　　　　　　　　　　　✦ 　　　　　✦　　　　　　　.
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
　　　　　　*　　　　　　　　　　　.
.　　　　　　　　　　　　　. 　　✦⠀　   　　　,　　　　　　　　　*
　　　　　⠀　　　　⠀　　✦
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀.　　　　　 　　⠀　　　⠀.　
✦　　　⠀　⠀  　　,　　　　　　.
　　　　　　　　　　　　　.
　　　　　　*⠀　　⠀  　　　　　⠀✦⠀　
　　　　　　*　　　　　　　　　　　　　　　　　　.
✦　　　⠀
　　　　　　　　　　　*
　　　　　　　　`;

const Home = () => {
  const theme = useTheme();

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
        position: 'relative',
      }}
    >
      {/* Decorative Star Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100%',
          zIndex: 0,
          pointerEvents: 'none',
          color: 'rgba(255, 105, 180, 0.18)',
          fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2.2rem' },
          whiteSpace: 'pre',
          fontFamily: 'monospace',
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        {starArt}
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                mb: { xs: 4, md: 0 },
                width: '100%'
              }}
            >
              <Typography
                variant="h1"
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
                Ariana Medina
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: 'text.secondary',
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                Creative Writer & Digital Content Specialist
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  mb: 4,
                  fontSize: { xs: '1.1rem', md: '1.3rem' }
                }}
              >
                Exploring creativity through words and design
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  justifyContent: { xs: 'center', md: 'flex-start' }
                }}
              >
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
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
                  View Projects
                </Button>
                <Button
                  component={Link}
                  to="/about"
                  variant="outlined"
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: 2,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    borderColor: '#FF69B4',
                    color: '#FF69B4',
                    '&:hover': {
                      borderColor: '#C71585',
                      backgroundColor: 'rgba(255, 105, 180, 0.04)'
                    }
                  }}
                >
                  About Me
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '400px' },
                width: { xs: '300px', md: '350px' },
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid rgba(255, 255, 255, 0.8)',
              }}
            >
              <Box
                component="img"
                src={headshot}
                alt="Ariana Medina"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home; 