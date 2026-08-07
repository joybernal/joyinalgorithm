import { Link } from 'react-router-dom'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Avatar from '@mui/joy/Avatar'
import Grid from '@mui/joy/Grid'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { PATHS } from '@/routes/paths'
import { FaFolderOpen } from 'react-icons/fa'
import { FaFileLines } from 'react-icons/fa6'
import { IoLayersSharp } from 'react-icons/io5'
import { MdVerifiedUser } from 'react-icons/md'
import { HiPaperAirplane } from 'react-icons/hi2'
import { BiSolidComponent } from 'react-icons/bi'


const sectionPreviews = [
  {
    title: 'Projects',
    eyebrow: 'Builds',
    description: 'Full-stack apps, frontend recreations, CS50 builds, and ML experiments.',
    icon: <FaFolderOpen size={32} />,
    path: PATHS.PROJECTS,
    color: '#00d4ff',
    stat: '40+',
    statLabel: 'project entries',
  },
  {
    title: 'Resume',
    eyebrow: 'Profile',
    description: 'A quick pass through my education, experience, and developer strengths.',
    icon: <FaFileLines size={32} />,
    path: PATHS.RESUME,
    color: '#00ff88',
    stat: 'CS',
    statLabel: 'graduate',
  },
  {
    title: 'Tech Stack',
    eyebrow: 'Tools',
    description: 'The languages, frameworks, and tools I use to ship practical software.',
    icon: <IoLayersSharp size={32} />,
    path: PATHS.TECH_STACK,
    color: '#ff6b6b',
    stat: 'React',
    statLabel: 'plus backend',
  },
  {
    title: 'Certifications',
    eyebrow: 'Proof',
    description: 'Certificates and milestones from CS50, cybersecurity, data, and more.',
    icon: <MdVerifiedUser size={32} />,
    path: PATHS.CERTIFICATIONS,
    color: '#ffd93d',
    stat: 'NAST',
    statLabel: 'recognized work',
  },
  {
    title: 'Contact Me',
    eyebrow: 'Connect',
    description: 'Reach out for roles, collaborations, or projects worth building well.',
    icon: <HiPaperAirplane size={32} />,
    path: PATHS.CONTACT,
    color: '#c084fc',
    stat: 'Open',
    statLabel: 'to opportunities',
  },
]

export default function HomePage() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, md: 4 },
          py: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            maxWidth: '1200px',
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Text Content */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
            className="animate-fadeInUp"
          >
            <Typography
              level="body-sm"
              sx={{
                color: 'primary.500',
                fontFamily: 'code',
                mb: 2,
                letterSpacing: '0.1em',
              }}
            >
              {'// Hello, World!'}
            </Typography>
            <Typography
              level="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 800,
                mb: 1,
                lineHeight: 1.1,
              }}
            >
              Joy Bernal
            </Typography>
            <Typography
              level="h3"
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                mb: 3, 
              }}
            >
              Full Stack Web Developer
            </Typography>
            <Typography
              level="body-lg"
              sx={{
                color: 'text.tertiary',
                maxWidth: '500px',
                mb: 4,
                mx: { xs: 'auto', md: 0 },
                lineHeight: 1.7,
              }}
            >
              BS Computer Science Graduate<br />
              I build scalable, modern web applications with clean code and intuitive design. Passionate about turning ideas into impactful digital solutions.
              <br /><br />
              🏆 Finalist & Special Citation Awardee — Project LIF, recognized by National Academy of Science and Technology (NAST).
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Link to={PATHS.PROJECTS} style={{ textDecoration: 'none' }}>
                <Button
                  size="lg"
                  endDecorator={<ArrowForwardIcon />}
                  sx={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
                    color: '#0a0a0a',
                    fontWeight: 600,
                    px: 4,
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00c4ef 0%, #00ef78 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Projects
                </Button>
              </Link>
              <Link to={PATHS.CONTACT} style={{ textDecoration: 'none' }}>
                <Button
                  size="lg"
                  variant="outlined"
                  sx={{
                    borderColor: 'primary.500',
                    color: 'primary.500',
                    px: 4,
                    '&:hover': {
                      bgcolor: 'rgba(0, 212, 255, 0.1)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Contact Me
                </Button>
              </Link>
            </Box>
          </Box>

          {/* Avatar/Image Section */}
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
            }}
            className="animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -4,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
                  opacity: 0.3,
                  filter: 'blur(20px)',
                },
              }}
            >
              <Avatar
                src="/joy.jpg"
                alt="Christine Joy A. Bernal"
                sx={{
                  width: { xs: 200, md: 280, lg: 320 },
                  height: { xs: 200, md: 280, lg: 320 },
                  border: '4px solid',
                  borderColor: 'neutral.800',
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.2)',
                }}
              />
            </Box>
            {/* Decorative elements */}
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 60,
                height: 60,
                borderRadius: '12px',
                bgcolor: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid',
                borderColor: 'primary.800',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'code',
                color: 'primary.500',
              }}
              className="animate-float"
            >
              {'</>'}
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: 20,
                left: -30,
                width: 50,
                height: 50,
                borderRadius: '50%',
                bgcolor: 'rgba(0, 255, 136, 0.1)',
                border: '1px solid',
                borderColor: 'success.800',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'code',
                fontSize: '0.75rem',
                color: 'success.500',
              }}
              className="animate-float"
              style={{ animationDelay: '1s' }}
            >
              {'{ }'}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Section Previews */}
      <Box
        sx={{
          py: { xs: 7, md: 11 },
          px: { xs: 2, md: 4 },
          bgcolor: 'background.level1',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(0, 212, 255, 0.08), transparent 34%), linear-gradient(315deg, rgba(0, 255, 136, 0.08), transparent 38%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Box sx={{ maxWidth: '1200px', mx: 'auto', position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              gap: 3,
              mb: 5,
            }}
          >
            <Box sx={{ maxWidth: '640px' }}>
              <Typography
                level="body-sm"
                sx={{
                  color: 'primary.500',
                  fontFamily: 'code',
                  mb: 1.5,
                  letterSpacing: '0.08em',
                }}
              >
              </Typography>
              <Typography
                level="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  lineHeight: 1.1,
                }}
              >
                Explore my work by the way you want to know me.
              </Typography>
            </Box>
            <Typography
              level="body-lg"
              sx={{
                color: 'text.tertiary',
                maxWidth: '380px',
                lineHeight: 1.7,
                alignSelf: { md: 'flex-end' },
              }}
            >
              Jump into finished builds, scan the tools behind them, or check the credentials that shaped the work.
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ alignItems: 'stretch' }}>
            <Grid xs={12}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    lg: 'repeat(5, minmax(0, 1fr))',
                  },
                  gap: 2,
                }}
              >
                {sectionPreviews.map((section, index) => (
                  <Box key={section.title}>
                    <Link to={section.path} style={{ textDecoration: 'none' }}>
                      <Card
                        variant="outlined"
                        sx={{
                          height: '100%',
                          minHeight: 178,
                          bgcolor: 'rgba(18, 24, 30, 0.78)',
                          borderColor: 'neutral.800',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: section.color,
                            transform: 'translateY(-6px)',
                            boxShadow: `0 18px 36px rgba(0, 0, 0, 0.28), 0 0 20px ${section.color}24`,
                          },
                        }}
                        className="animate-fadeInUp"
                        style={{ animationDelay: `${index * 0.08}s` }}
                      >
                        <CardContent sx={{ p: 2.5, height: '100%' }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2 }}>
                            <Box
                              sx={{
                                width: 54,
                                height: 54,
                                borderRadius: '14px',
                                bgcolor: `${section.color}16`,
                                border: `1px solid ${section.color}26`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: section.color,
                                flex: '0 0 auto',
                              }}
                            >
                              {section.icon}
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                              <Typography level="title-lg" sx={{ color: section.color, fontWeight: 800 }}>
                                {section.stat}
                              </Typography>
                              <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
                                {section.statLabel}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography level="body-xs" sx={{ color: section.color, fontFamily: 'code', mb: 0.75 }}>
                            {section.eyebrow}
                          </Typography>
                          <Typography level="title-lg" sx={{ fontWeight: 700, mb: 0.75, color: 'text.primary' }}>
                            {section.title}
                          </Typography>
                          <Typography level="body-sm" sx={{ color: 'text.tertiary', lineHeight: 1.55 }}>
                            {section.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
