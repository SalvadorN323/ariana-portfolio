import React from 'react';
import { Container, Typography, Box, Grid, Paper, useTheme } from '@mui/material';

const Projects = () => {
  const theme = useTheme();

  const projects = [
    {
      title: 'Creative Writing Collection',
      description: 'A curated collection of poetry and prose exploring themes of identity, growth, and human connection.',
      category: 'Creative Writing'
    },
    {
      title: 'Digital Content Strategy',
      description: 'Comprehensive social media and content strategy for a lifestyle brand, resulting in 50% engagement increase.',
      category: 'Content Strategy'
    },
    {
      title: 'Research Paper',
      description: 'Academic research on contemporary literature and its impact on digital storytelling.',
      category: 'Research'
    },
    {
      title: 'Brand Voice Development',
      description: 'Created and implemented consistent brand voice across multiple digital platforms.',
      category: 'Brand Strategy'
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
          maxWidth: 1200,
          mx: 'auto',
          px: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, width: '100%' }}>
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
            My Projects
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Explore my creative and professional work
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  borderRadius: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)'
                  },
                  width: '100%',
                  maxWidth: 500,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    mb: 2,
                    color: 'primary.main',
                    fontWeight: 600
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    mb: 3
                  }}
                >
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-block',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 105, 180, 0.1)',
                    width: '100%'
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500
                    }}
                  >
                    {project.category}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Projects; 