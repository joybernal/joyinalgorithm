import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Tabs from '@mui/joy/Tabs'
import TabList from '@mui/joy/TabList'
import Tab from '@mui/joy/Tab'
import TabPanel from '@mui/joy/TabPanel'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Chip from '@mui/joy/Chip'
import AspectRatio from '@mui/joy/AspectRatio'
import Grid from '@mui/joy/Grid'
import LaunchIcon from '@mui/icons-material/Launch'
import { getProjectDetailPath, getUiProjectPath } from '@/lib/paths'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  live?: string
  ui?: string
  projectFolder?: string
}

interface Category {
  key: string
  label: string
  projects: Project[]
}

const categories: Category[] = [
  {
    key: 'frontend',
    label: 'UI Frontend Projects',
    projects: [
      {
        id: 'facebook',
        title: 'Facebook Clone UI',
        description: 'A simple Facebook-style UI built from HTML/CSS/JS templates.',
        image: '/facebook_preview.jpg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        ui: 'facebook',
      },
      {
        id: 'instagram',
        title: 'Instagram Clone UI',
        description: 'An Instagram-style UI built from HTML/CSS/JS templates.',
        image: '/placeholder.jpg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        ui: 'instagram',
      },
      {
        id: 'x',
        title: 'X Clone UI',
        description: 'An X/Twitter-style UI built from HTML/CSS/JS templates.',
        image: '/placeholder.jpg',
        tags: ['HTML', 'CSS', 'JavaScript'],
        ui: 'x',
      }
    ],
  },
  {
    key: 'ml-ai',
    label: 'Machine Learning / AI',
    projects: [
      {
        id: 'ml-1',
        title: 'Image Classification Model',
        description: 'CNN-based image classifier trained on custom dataset.',
        image: '/placeholder.jpg',
        tags: ['Python', 'TensorFlow', 'CNN'],
        github: '#',
      },
      {
        id: 'ml-2',
        title: 'Sentiment Analysis Tool',
        description: 'NLP tool for analyzing text sentiment in social media.',
        image: '/placeholder.jpg',
        tags: ['Python', 'NLTK', 'Flask'],
        github: '#',
        live: '#',
      },
    ],
  },
  {
    key: 'web-apps',
    label: 'Web Applications',
    projects: [
      {
        id: 'webapp-1',
        title: 'Task Management System',
        description: 'Full-stack task management app with real-time updates.',
        image: '/placeholder.jpg',
        tags: ['React', 'FastAPI', 'PostgreSQL'],
        github: '#',
        live: '#',
      },
      {
        id: 'webapp-2',
        title: 'Blog Platform',
        description: 'A feature-rich blogging platform with markdown support.',
        image: '/placeholder.jpg',
        tags: ['Django', 'React', 'REST API'],
        github: '#',
      },
    ],
  },
  {
    key: 'mini-games',
    label: 'Mini Games',
    projects: [
      {
        id: 'game-1',
        title: 'Memory Card Game',
        description: 'Classic memory matching game with multiple difficulty levels.',
        image: '/placeholder.jpg',
        tags: ['JavaScript', 'HTML5', 'CSS3'],
        github: '#',
        live: '#',
      },
      {
        id: 'game-2',
        title: 'Snake Game',
        description: 'Classic snake game implementation with modern graphics.',
        image: '/placeholder.jpg',
        tags: ['Python', 'Pygame'],
        github: '#',
      },
    ],
  },
  {
    key: 'cs50-web',
    label: 'CS50 Web-Based Projects',
    projects: [
      {
        id: 'cs50web-1',
        title: 'Wiki Encyclopedia',
        description: 'Wikipedia-like online encyclopedia using Django.',
        image: '/placeholder.jpg',
        tags: ['Django', 'Python', 'Markdown'],
        github: '#',
      },
      {
        id: 'cs50web-2',
        title: 'Commerce Auction',
        description: 'eBay-like e-commerce auction site.',
        image: '/placeholder.jpg',
        tags: ['Django', 'SQLite', 'Bootstrap'],
        github: '#',
      },
    ],
  },
  {
    key: 'cs50w',
    label: 'CS50W Projects',
    projects: [
      {
        id: 'cs50w-1',
        title: 'Mail Client',
        description: 'Single-page email client application.',
        image: '/placeholder.jpg',
        tags: ['JavaScript', 'Django', 'REST API'],
        github: '#',
      },
      {
        id: 'cs50w-2',
        title: 'Network Social',
        description: 'Twitter-like social network application.',
        image: '/placeholder.jpg',
        tags: ['Django', 'React', 'PostgreSQL'],
        github: '#',
      },
    ],
  },
  {
    key: 'applications',
    label: 'Applications',
    projects: [
      {
        id: 'app-1',
        title: 'HR Management System',
        description: 'Complete HR solution for managing employees and attendance.',
        image: '/placeholder.jpg',
        tags: ['React', 'FastAPI', 'PostgreSQL'],
        github: '#',
        live: '#',
      },
      {
        id: 'app-2',
        title: 'Inventory System',
        description: 'Inventory management application for small businesses.',
        image: '/placeholder.jpg',
        tags: ['Flask', 'SQLAlchemy', 'Bootstrap'],
        github: '#',
      },
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  const targetPath = project.ui ? getUiProjectPath(project.ui) : getProjectDetailPath(project.id)
  const navigate = useNavigate()

  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={() => navigate(targetPath)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') navigate(targetPath)
      }}
      variant="outlined"
      sx={{
        height: '100%',
        bgcolor: 'background.surface',
        borderColor: 'neutral.800',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          borderColor: 'primary.600',
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="16/9">
          <img src={project.image} alt={project.title} style={{ objectFit: 'cover' }} />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ p: 2 }}>
        <Typography level="title-md" sx={{ fontWeight: 600, mb: 1 }}>
          {project.title}
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.tertiary', mb: 2 }}>
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {project.tags.map((tag) => (
            <Chip
              key={tag}
              size="sm"
              variant="soft"
              sx={{
                bgcolor: 'rgba(0, 212, 255, 0.1)',
                color: 'primary.400',
                fontSize: '0.7rem',
              }}
            >
              {tag}
            </Chip>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
          <Chip
            size="sm"
            variant="solid"
            sx={{
              bgcolor: 'primary.600',
              color: 'white',
              '&:hover': { bgcolor: 'primary.700' },
            }}
          >
            {project.ui ? 'View UI' : 'View Details'}
          </Chip>
          <a
            href={project.live ? project.live : targetPath}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Chip
              size="sm"
              variant="outlined"
              startDecorator={<LaunchIcon sx={{ fontSize: 14 }} />}
              sx={{ borderColor: 'neutral.700', color: 'text.secondary' }}
            >
              Open in New Tab
            </Chip>
          </a>
        </Box>
      </CardContent>
    </Card>
  )
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Typography
          level="h1"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          My Projects
        </Typography>
        <Typography
          level="body-lg"
          sx={{
            textAlign: 'center',
            color: 'text.tertiary',
            mb: 6,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          A collection of projects showcasing my skills in web development, 
          machine learning, and software engineering.
        </Typography>

        <Tabs
          value={activeTab}
          onChange={(_, value) => setActiveTab(value as number)}
          sx={{ bgcolor: 'transparent' }}
        >
          <TabList
            sx={{
              flexWrap: 'wrap',
              gap: 1,
              justifyContent: 'center',
              mb: 4,
              '--TabList-gap': '8px',
              bgcolor: 'transparent',
              '& .MuiTab-root': {
                bgcolor: 'background.surface',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.800',
                '&:hover': {
                  bgcolor: 'background.level1',
                },
                '&.Mui-selected': {
                  bgcolor: 'rgba(0, 212, 255, 0.1)',
                  borderColor: 'primary.600',
                  color: 'primary.500',
                },
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab
                key={category.key}
                value={index}
                sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
              >
                {category.label}
              </Tab>
            ))}
          </TabList>

          {categories.map((category, index) => (
            <TabPanel key={category.key} value={index} sx={{ p: 0 }}>
              <Grid container spacing={3}>
                {category.projects.map((project) => (
                  <Grid key={project.id} xs={12} sm={6} md={4}>
                    <ProjectCard project={project} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          ))}
        </Tabs>
      </Box>
    </Box>
  )
}
