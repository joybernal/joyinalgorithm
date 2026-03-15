import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Chip from '@mui/joy/Chip'
import LinearProgress from '@mui/joy/LinearProgress'
import Grid from '@mui/joy/Grid'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import WebIcon from '@mui/icons-material/Web'
import DataObjectIcon from '@mui/icons-material/DataObject'
import BuildIcon from '@mui/icons-material/Build'
import StarIcon from '@mui/icons-material/Star'

interface Skill {
  name: string
  level: 'Basic' | 'Intermediate' | 'Advanced'
  progress: number
}

interface TechCategory {
  title: string
  icon: React.ReactNode
  color: string
  skills: Skill[]
}

const techCategories: TechCategory[] = [
  {
    title: 'Programming Languages',
    icon: <CodeIcon sx={{ fontSize: 28 }} />,
    color: '#00d4ff',
    skills: [
      { name: 'Python', level: 'Intermediate', progress: 65 },
      { name: 'TypeScript', level: 'Intermediate', progress: 65 },
      { name: 'JavaScript XML (JSX)', level: 'Intermediate', progress: 65 },
      { name: 'HTML', level: 'Advanced', progress: 90 },
      { name: 'CSS', level: 'Advanced', progress: 90 },
      { name: 'JavaScript', level: 'Intermediate', progress: 70 },
      { name: 'C', level: 'Basic', progress: 35 },
      { name: 'C++', level: 'Basic', progress: 35 },
      { name: 'Java', level: 'Basic', progress: 35 },
      { name: 'VB.NET', level: 'Intermediate', progress: 60 },
    ],
  },
  {
    title: 'Backend',
    icon: <StorageIcon sx={{ fontSize: 28 }} />,
    color: '#00ff88',
    skills: [
      { name: 'FastAPI', level: 'Advanced', progress: 85 },
      { name: 'REST API Development', level: 'Advanced', progress: 85 },
      { name: 'SQLAlchemy (ORM)', level: 'Intermediate', progress: 75 },
    ],
  },
  {
    title: 'User Interface',
    icon: <WebIcon sx={{ fontSize: 28 }} />,
    color: '#ff6b6b',
    skills: [
      { name: 'Material UI', level: 'Intermediate', progress: 70 },
      { name: 'Joy UI', level: 'Intermediate', progress: 70 },
      { name: 'Bootstrap', level: 'Intermediate', progress: 65 },
    ],
  },
  {
    title: 'Database',
    icon: <DataObjectIcon sx={{ fontSize: 28 }} />,
    color: '#ffd93d',
    skills: [
      { name: 'SQL', level: 'Advanced', progress: 85 },
      { name: 'PostgreSQL', level: 'Intermediate', progress: 70 },
    ],
  },
  {
    title: 'Database Migration',
    icon: <StorageIcon sx={{ fontSize: 28 }} />,
    color: '#c084fc',
    skills: [
      { name: 'Alembic', level: 'Intermediate', progress: 65 },
    ],
  },
  {
    title: 'Frameworks',
    icon: <BuildIcon sx={{ fontSize: 28 }} />,
    color: '#22d3ee',
    skills: [
      { name: 'React', level: 'Intermediate', progress: 70 },
      { name: 'Flask', level: 'Advanced', progress: 85 },
      { name: 'Django', level: 'Intermediate', progress: 65 },
    ],
  },
  {
    title: 'Dev Tools',
    icon: <BuildIcon sx={{ fontSize: 28 }} />,
    color: '#f472b6',
    skills: [
      { name: 'Git', level: 'Intermediate', progress: 75 },
      { name: 'GitHub', level: 'Intermediate', progress: 75 },
      { name: 'PgAdmin', level: 'Intermediate', progress: 65 },
    ],
  },
  {
    title: 'Specializations',
    icon: <StarIcon sx={{ fontSize: 28 }} />,
    color: '#fb923c',
    skills: [
      { name: 'Web Development (Full Stack)', level: 'Advanced', progress: 85 },
      { name: 'Machine Learning', level: 'Intermediate', progress: 60 },
      { name: 'Database Management', level: 'Intermediate', progress: 70 },
    ],
  },
]

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'success'
    case 'Intermediate':
      return 'primary'
    default:
      return 'neutral'
  }
}

export default function TechStackPage() {
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
          Tech Stack
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
          Technologies, frameworks, and tools I use to bring ideas to life.
        </Typography>

        <Grid container spacing={3}>
          {techCategories.map((category) => (
            <Grid key={category.title} xs={12} md={6}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  borderColor: 'neutral.800',
                  bgcolor: 'background.surface',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: category.color,
                    boxShadow: `0 0 20px ${category.color}20`,
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: '12px',
                        bgcolor: `${category.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: category.color,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography level="title-lg" sx={{ fontWeight: 600 }}>
                      {category.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {category.skills.map((skill) => (
                      <Box key={skill.name}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Typography level="body-sm" sx={{ fontWeight: 500 }}>
                            {skill.name}
                          </Typography>
                          <Chip
                            size="sm"
                            variant="soft"
                            color={getLevelColor(skill.level) as 'success' | 'primary' | 'neutral'}
                            sx={{ fontSize: '0.65rem' }}
                          >
                            {skill.level}
                          </Chip>
                        </Box>
                        <LinearProgress
                          determinate
                          value={skill.progress}
                          sx={{
                            '--LinearProgress-thickness': '6px',
                            '--LinearProgress-radius': '4px',
                            bgcolor: 'neutral.800',
                            '& .MuiLinearProgress-bar': {
                              background: `linear-gradient(90deg, ${category.color} 0%, ${category.color}80 100%)`,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
