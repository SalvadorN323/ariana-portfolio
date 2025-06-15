import React from 'react';
import { Container, Typography, Box, Grid, Paper, useTheme, Accordion, AccordionSummary, AccordionDetails, Link, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';


const Projects = () => {
  const theme = useTheme();

  const projectCategories = {
    poems: [
      {
        title: 'The Weight of Appreciation',
        description: 'I am a vessel of emotion and purpose, and it is time to realize it. ',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1TYdt0_9giwvlvfIty5CP3SinlWaqUX34/view?usp=drive_link'
      },
      {
        title: 'The Symphony of Love',
        description: 'The loving acts of learning to love life. ',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1hCOTCiNlHephbnNzJRjQ96NWHAiqmQaW/view?usp=drive_link'
      },
      {
        title: 'The Light',
        description: 'The deafening noise of a honk redirecting childhood thoughts.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/163KIeAMnvH8vGGsKR_4FdyM4a7oDlHuI/view?usp=drive_link'
      },
      {
        title: 'Sunshine So Bright I Need Sunscreen',
        description: 'Fearful solitude to radiant connection and the shedding of moon-like shadows.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1DruoqXj_CdJsj2mcl9ymNYPsl9G-HX5-/view?usp=drive_link'
      },
      {
        title: 'Pink Blind Box',
        description: 'A pretty pink princess rediscovering her love of the color pink.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1zn_KzTn3SPCbv8gZJM0TwtFAgYSvtRC_/view?usp=drive_link'
      },
      {
        title: 'Out of Place, Not at Home',
        description: 'The healing nature of greenery, and its positive impacts.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1ih9wje40TtqriWNY76_bRqsPPfW7aDRO/view?usp=drive_link'
      },
      {
        title: 'My Pink Love',
        description: 'A trinket becomes more than an object, but a face of hope.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/167xSPwIgxijtwoHJTFwJbnpQuhLuwThm/view?usp=drive_link'
      },
      {
        title: 'My First Word',
        description: 'Not Dada or Mama, an ode to what would become of a yearner.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1-EJGLyQit0aRWnKQWnOWbzExt8IGIVay/view?usp=drive_link'
      },
      {
        title: 'Bruised Banana',
        description: 'A banana that is bruised.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1vzk5eBcthOCaG7cgJShrwXyHNzW4sd_M/view?usp=drive_link'
      },
      {
        title: 'Blue Glue',
        description: 'A sad color to hold everything together.',
        category: 'Poetry',
        link: 'https://drive.google.com/file/d/1wHBbrvUSxnJ6GICd43I-LSgwmC8DVsTC/view?usp=drive_link'
      }
    ],
    essays: [
      {
        title: 'Redefining Science Fiction',
        description: "In 'Octavia E. Butler: Redefining Science Fiction', the author highlights Butler's significant contributions to the genre, particularly as an African American woman in a predominantly white and male-dominated field. The essay focuses on her short story collection, Bloodchild and Other Stories, to demonstrate how Butler uses speculative fiction to explore complex themes of race, gender, power, and humanity. Through the symbiotic relationship between humans and the Tlic aliens in 'Bloodchild', the essay argues that Butler challenges traditional narratives, redefines bodily autonomy, and critiques power dynamics, including parallels to master-slave relationships. Ultimately, the essay posits that Butler's work serves as a powerful vehicle for Afrofuturism, pushing the boundaries of science fiction and inspiring readers to envision more diverse and equitable futures.",
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1olCSjnRx3NfKkdV0v2CxsmuNwgKNEzJ2/view?usp=drive_link'
      },
      {
        title: 'Love and its Consequences',
        description: "This essay delves into Jean-Paul Sartre's existentialist philosophy of love, as presented in his work Being and Nothingness, where he controversially posits that a lover desires to be the sole reason for the beloved's existence and freedom. The author applies this Sartrean lens to the romantic relationship between Elio and Oliver in the film Call Me By Your Name, arguing that Elio embodies the 'beloved' by seemingly surrendering his autonomy to Oliver. However, the essay then critically challenges Sartre's perspective, contending that such a concept of love leads to an unfulfilling, automaton-like state for the beloved, advocating instead for a mutual and equally free partnership. Ultimately, the essay presents a nuanced discussion of love through a philosophical framework, a cinematic example, and a personal counter-argument.",
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1X53N-wR8JLtwsn2TC11UkzIjOkY8yEK2/view?usp=drive_link'
      },
      {
        title: 'Representation of Religious Experiences Through George Herbert',
        description: "In 'Representation of Religious Experiences Through George Herbert,' the author examines how George Herbert, a prominent 17th-century metaphysical poet, conveyed religious experiences in his work. The essay specifically analyzes two of Herbert's most famous poems, 'The Altar' and 'Easter Wings,' highlighting their unique structural forms and rich symbolic meaning. Through these poems, the essay explores themes of devotion, the consequences of sin, and the speaker's spiritual struggles and yearning for redemption. Ultimately, the analysis demonstrates Herber's masterful blend of artistic creativity and theological depth in representing profound religious experiences.",
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1zRkjev8tzWv4JobaIxaCDC2adpFPzNjN/view?usp=drive_link'
      },
      {
        title: "The Dynamics in Manuel Puig's Kiss of a Spider Woman",
        description: "In Manuel Puig's postmodern novel Kiss of a Spider Woman, the author explores the intricate dynamics between two cellmates, Luis Molina and Valentin Arregui, against the backdrop of Argentina's oppressive political climate. The essay highlights Puig's unique narrative structure, which interweaves Molina's escapist film narrations with the harsh realities of prison life, blurring the lines between fantasy and reality. Intertextuality is central to the novel, revealing Molina's identification with feminine film heroines and challenging traditional gender roles. The evolving relationship between the two men, from initial opposition to a profound connection marked by care and transformation, underscores the novel's exploration of identity, friendship, and societal expectations.",
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1_8lPOsRvWn1fj8Yh8cVnCb3C9enPVjZo/view?usp=drive_link'
      },
      {
        title: "What Was Edna Pontellier's Reason?",
        description: "In Kate Chopin's The Awakening, Edna Pontellier's suicide is often debated as a result of either mental illness or a defiant act of self-liberation.1 This essay argues for the latter, asserting that Edna's death was a deliberate choice to solidify her independence from a patriarchal society. The author traces Edna's journey from a submissive housewife to a woman seeking autonomy, highlighted by her decision to live independently and pursue art.2 Ultimately, the essay contends that Edna's final swim into the ocean represents her ultimate act of rebellion against societal constraints and a powerful statement of individuality in a world that sought to confine her.",
        category: 'Essay',
        link: 'https://drive.google.com/file/d/1rzHBdNCNTZ2Yn8EGG63plVVf5W7ogRf_/view?usp=drive_link'
      },
    ],
    'Creative Writing': [
      {
        title: 'My Sonny, My Sun',
        description: 'In "My Sonny, My Sun," Apple Francine Annona navigates the painful legacy of childhood bullying tied to her unique name, leading to a strained relationship with food and her family. Guided by therapy and the unexpected comfort of Sonny Angel figurines, Apple embarks on a journey of healing, ultimately embracing her name and finding peace with herself and her past. This introspective piece explores themes of self-acceptance, the impact of trauma, and the power of small comforts in overcoming deep-seated insecurities.',
        category: 'Creative Writing',
        link: 'https://drive.google.com/file/d/1MhZTmuR33SY7QMFHRPQW0mThZaDRDnxX/view?usp=drive_link'
      },
      {
        title: 'Lost in the Sauce',
        description: "This short story follows ten-year-old Annona, who, terrified of bugs, embarks on an unexpected magical journey when she tumbles into her grandma's pot of alphabet soup. Within this whimsical, liquid world, she encounters friendly, letter-adorned ladybugs and playful noodle caterpillars. This fantastical experience challenges her deep-seated fears, transforming her perception and empowering her with newfound courage upon her return to reality.",
        category: 'Creative Writing',
        link: 'https://drive.google.com/file/d/1CToUOxWbMmxwd2jjm2C2lHJPYaNJcL5v/view?usp=drive_link'
      },
      {
        title: 'The Magic of Super Duper Burgers',
        description: "In this personal essay, I explore my lifelong struggle with food, rooted in childhood bullying and forced eating, which led to a restrictive 'plain' palate. A transformative experience with a fully loaded chicken sandwich from 'Super Duper Burgers' sparks a new culinary courage. This pivotal moment, coupled with insights from a food literature class, helps me embrace new flavors and forge deeper connections with family through shared meals, highlighting food's role beyond mere sustenance.",
        category: 'Creative Writing',
        link: 'https://drive.google.com/file/d/1UdcsZCx1yuXsfpG_wpuqaUxQ-0LmSFEa/view?usp=drive_link'
      },
      {
        title: 'Self-Awareness',
        description: "This fanfiction, a commentary on Katherine Mansfield's 'The Garden Party,' follows Laura Sheridan, a privileged young woman grappling with the rigid expectations of her wealthy family. Tasked with delivering leftover party food to a grieving working-class family, Laura confronts the stark realities of class divide and her own ignorance through a shocking encounter with Macx, the deceased man's son. This confrontation forces Laura to shed her naiveté and embark on a painful journey toward self-awareness and a desire for genuine change.",
        category: 'Creative Writing',
        link: 'https://drive.google.com/file/d/1tYSjjIUcwW-oM_W6OAUcvTrRsC8CkGEl/view?usp=drive_link'
      }
    ]
  };

  const CustomCarousel = ({ items }) => {
    return (
      <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosNewIcon />}
        navButtonsAlwaysVisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: 'rgba(255, 105, 180, 0.2)',
            borderRadius: '50%',
            color: theme.palette.primary.main,
            '&:hover': {
              backgroundColor: 'rgba(255, 105, 180, 0.4)',
            },
          },
        }}
        indicatorContainerProps={{
          style: {
            marginTop: '20px',
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: 'rgba(255, 105, 180, 0.3)',
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.main,
          },
        }}
        animation="slide"
        interval={5000}
        swipe={true}
        fullHeightHover={false}
        sx={{
          width: '100%',
          '& .MuiPaper-root': {
            margin: '0 auto',
          },
        }}
      >
        {items.map((project, index) => (
          <Box key={index} sx={{ p: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
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
                maxWidth: 800,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
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
                  width: '100%',
                  mb: 3
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
              
              {/* File Preview Section */}
              <Box sx={{ width: '100%', mb: 3 }}>
                <iframe
                  src={project.link.replace('/view?usp=drive_link', '/preview')}
                  style={{
                    width: '100%',
                    height: '400px',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                  title={project.title}
                />
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<PictureAsPdfIcon />}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: 'rgba(255, 105, 180, 0.9)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 105, 180, 1)',
                    },
                  }}
                >
                  View PDF
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DescriptionIcon />}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': {
                      borderColor: 'primary.dark',
                      backgroundColor: 'rgba(255, 105, 180, 0.04)',
                    },
                  }}
                >
                  Open in Drive
                </Button>
              </Box>
            </Paper>
          </Box>
        ))}
      </Carousel>
    );
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
                <CustomCarousel items={items} />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Projects; 