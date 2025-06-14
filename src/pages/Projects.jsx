import React from 'react';
import { Container, Typography, Box, Grid, Paper, useTheme, Accordion, AccordionSummary, AccordionDetails, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const theme = useTheme();

  const projectCategories = {
    poems: [
      {
        title: 'Whispers of Dawn',
        description: 'A collection of morning-inspired poetry exploring themes of new beginnings and hope.',
        category: 'Poetry',
        link: 'https://docs.google.com/document/d/1FYSOpO5vT-mKmeytngEczBku40oqVQRg/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Urban Echoes',
        description: 'Poems capturing the rhythm and soul of city life, from dawn to dusk.',
        category: 'Poetry',
        link: 'https://docs.google.com/document/d/1FYSOpO5vT-mKmeytngEczBku40oqVQRg/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Nature\'s Song',
        description: 'Verses celebrating the beauty and wonder of the natural world.',
        category: 'Poetry',
        link: 'https://docs.google.com/document/d/1FYSOpO5vT-mKmeytngEczBku40oqVQRg/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      }
    ],
    essays: [
      {
        title: 'Afterlife in Wicca',
        description: 'An exploration of narrative in modern media and its impact on society.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1FYSOpO5vT-mKmeytngEczBku40oqVQRg/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Redefining Science Fiction',
        description: 'Examining human relationships in contemporary society through personal experiences.',
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1olCSjnRx3NfKkdV0v2CxsmuNwgKNEzJ2/view?usp=drive_link'
      },
      {
        title: 'Isolation and Alienation in John Donne’s Poetry',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1o4ZoH-yCQVMmJvaPXLGFU6YdQ8qiqipz/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Auteur Theory Defined Through Jordan Peele',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1Ayc_uhVy5m0AzGSx_MgduViJzaiqC6Hs/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Day and Night: The Rivalry',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1fCHYcJYbNSSRsgYnSZ0-VHjNQ3OwwU9w/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: "Exploring Sympathy Through Darkness Within Gaiman's 'Snow, Glass, Apples'",
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1cPqc5ZAFRUS137eTZKCf_sRocaDusCYt/view?usp=drive_link'
      },
      {
        title: 'Final Exam',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1-mRhCeMmNrF16GOSrQ93IGWg-pFCnhIb/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'The Soundtrack of Summer',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1Wylp4PXoOHmAhiypPynI5sDhUrzKWZbJ/view?usp=drive_link'
      },
      {
        title: 'Shadows of Inequality',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1buZ6lLUG0iL50zZegVdBaaTGiS5eqZ9I/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'The Life of a Kitchen Table',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1Pip9Lu-P1w0R2XTWh5pzzIMCbyvR3MNS/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Love and its Consequences',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1X53N-wR8JLtwsn2TC11UkzIjOkY8yEK2/view?usp=drive_link'
      },
      {
        title: 'Beauty in the Little Things',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1_nNevErRvubw-FsDUMb67x6C0_6XrJ2N/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Representation of Religious Experiences Through George Herbert',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1OspU7YzQOr97bYxKTbstgw1ncbcE_7Fb/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'The Dynamics in Manuel Puig’s Kiss of a Spider Woman',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1rsu6oGmbFtKDUxkg_7mn_sZWtj9rlEwx/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'What Was Edna Pontellier’s Reason? ',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://docs.google.com/document/d/1bNrJwA5srnMdyYdO--Srkd4oYaw-Q1YS/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'The Journey that Change Creates',
        description: 'The role of art in personal growth and community building.',
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1hhOyTYepEg1h3F-T5KSSx1NRw0zqmrJT/view?usp=drive_link'
      }
    ],
    fanfiction: [
      {
        title: 'Beyond the Stars',
        description: 'A sci-fi adventure exploring the depths of space and human potential.',
        category: 'Fan Fiction',
        link: 'https://docs.google.com/document/d/1FYSOpO5vT-mKmeytngEczBku40oqVQRg/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Hidden Realms',
        description: 'Fantasy exploration of magical worlds and their inhabitants.',
        category: 'Fan Fiction',
        link: 'https://docs.google.com/document/d/1FYSOpO5vT-mKmeytngEczBku40oqVQRg/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      },
      {
        title: 'Modern Tales',
        description: 'Contemporary reimaginings of classic stories with a fresh perspective.',
        category: 'Fan Fiction',
        link: 'https://docs.google.com/document/d/1FYSOpO5vT-mKmeytngEczBku40oqVQRg/edit?usp=drive_link&ouid=114336115167780237693&rtpof=true&sd=true'
      }
    ],
    images: [
      {
        title: 'Visual Poetry',
        description: 'A collection of photography and digital art that tells stories through imagery.',
        category: 'Visual Art'
      },
      {
        title: 'Creative Process',
        description: 'Behind-the-scenes glimpses into the artistic journey and creation.',
        category: 'Visual Art'
      },
      {
        title: 'Design Portfolio',
        description: 'A showcase of graphic design and visual storytelling projects.',
        category: 'Visual Art'
      }
    ]
  };

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

        <Box sx={{ width: '100%' }}>
          {Object.entries(projectCategories).map(([category, items]) => (
            <Accordion
              key={category}
              sx={{
                mb: 3,
                backgroundColor: 'transparent',
                boxShadow: 'none',
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: 'rgba(255, 105, 180, 0.1)',
                  borderRadius: 2,
                  mb: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 105, 180, 0.2)',
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                  }}
                >
                  {category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center">
                  {items.map((project, index) => (
                    <Grid item xs={12} md={6} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textDecoration: 'none',
                          width: '100%',
                          maxWidth: 500,
                        }}
                      >
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative',
                          }}
                        >
                          {project.link && (
                            <LaunchIcon
                              sx={{
                                position: 'absolute',
                                top: 16,
                                right: 16,
                                color: 'primary.main',
                                opacity: 0.7,
                              }}
                            />
                          )}
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
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects; 