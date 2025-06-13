import React from 'react';
import { Container, Typography, Box, Grid, Paper, useTheme } from '@mui/material';

const About = () => {
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
            About Me
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 4,
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Get to know more about my journey and expertise
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: '100%',
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
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
                  mb: 3,
                  color: 'primary.main',
                  fontWeight: 600
                }}
              >
                Professional Summary
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  mb: 3
                }}
              >
                I am a passionate creative writer and digital content specialist with a strong
                background in crafting compelling narratives and engaging digital content.
                My expertise spans across various forms of creative writing, including
                poetry, prose, and digital storytelling.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.8
                }}
              >
                With a keen eye for detail and a deep understanding of audience engagement,
                I create content that resonates with readers while maintaining professional
                standards and creative integrity.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                height: '100%',
                borderRadius: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(255, 105, 180, 0.15)',
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
                  mb: 3,
                  color: 'primary.main',
                  fontWeight: 600
                }}
              >
                Skills & Expertise
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {[
                  'Creative Writing',
                  'Content Strategy',
                  'Digital Storytelling',
                  'Social Media Management',
                  'Content Editing',
                  'Research & Analysis'
                ].map((skill, index) => (
                  <Grid item xs={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        backgroundColor: 'rgba(255, 105, 180, 0.1)',
                        textAlign: 'center',
                        width: '100%'
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 500
                        }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About; 