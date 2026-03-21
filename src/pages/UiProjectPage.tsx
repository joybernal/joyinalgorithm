import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Button from '@mui/joy/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { PATHS, getUiProjectPath } from '@/lib/paths'

import facebookHtml from './frontend-projects/templates/facebook.html?raw'
import facebookCss from './frontend-projects/css/facebook.css?raw'
import facebookJs from './frontend-projects/js/facebook.js?raw'

import instagramHtml from './frontend-projects/templates/instagram.html?raw'
import instagramCss from './frontend-projects/css/instagram.css?raw'
import instagramJs from './frontend-projects/js/instagram.js?raw'

import xHtml from './frontend-projects/templates/x.html?raw'
import xCss from './frontend-projects/css/x.css?raw'
import xJs from './frontend-projects/js/x.js?raw'

import linkedinHtml from './frontend-projects/templates/linkedin.html?raw'
import linkedinCss from './frontend-projects/css/linkedin.css?raw'

type UiProjectKey = 'facebook' | 'instagram' | 'x' | 'linkedin'

const PROJECTS: Record<
  UiProjectKey,
  {
    title: string
    html: string
    css: string
    js: string
  }
> = {
  facebook: {
    title: 'Facebook UI',
    html: facebookHtml,
    css: facebookCss,
    js: facebookJs,
  },
  instagram: {
    title: 'Instagram UI',
    html: instagramHtml,
    css: instagramCss,
    js: instagramJs,
  },
  x: {
    title: 'X UI',
    html: xHtml,
    css: xCss,
    js: xJs,
  },
  linkedin: {
    title: 'Linkedin UI',
    html: linkedinHtml,
    css: linkedinCss,
    js: '',
  },
}

function escapeForInlineScript(code: string) {
  // Prevent accidental premature closing of the <script> tag.
  return code.replace(/<\/script/gi, '<\\/script')
}

function buildSrcDoc(rawHtml: string, css: string, js: string) {
  // We render in an iframe and inline CSS/JS so the project markup can live inside your app.
  let doc = rawHtml ?? ''

  // Your templates were authored assuming a `/static/images/...` structure.
  // In this Vite app, everything in `public/` is served at the site root,
  // so the real path is `/images/...`.
  doc = doc.replaceAll('/static/images/', '/images/')

  // Remove external stylesheet and inline our own.
  doc = doc.replace(/<link\s+[^>]*rel=["']stylesheet["'][^>]*>/gi, '')

  // Force visibility for sidebar-based mockups (some templates hide the sidebar at smaller widths).
  // Also invert Instagram sidebar icons that were authored as black-on-dark PNGs.
  const sidebarOverride = `
    .sidebar { display: flex !important; }
    .sidebar-icons.invert { filter: brightness(0) invert(1) !important; }
    .invert { filter: brightness(0) invert(1) !important; }
    .sidebar p,
    .sidebar-right p,
    .icon-text {
      color: #ffffff !important;
    }
  `
  const styleTag = `<style>\n${css ?? ''}\n${sidebarOverride}\n</style>`
  if (/<\/head>/i.test(doc)) doc = doc.replace(/<\/head>/i, `${styleTag}\n</head>`)
  else doc += styleTag

  // Remove external script tags and inline our own.
  doc = doc.replace(/<script\s+[^>]*src=["'][^"']+["'][^>]*>\s*<\/script>/gi, '')
  doc = doc.replace(/<script\s+[^>]*src=["'][^"']+["'][^>]*\/>\s*/gi, '')
  const scriptTag = `<script>\n${escapeForInlineScript(js ?? '')}\n</script>`
  if (/<\/body>/i.test(doc)) doc = doc.replace(/<\/body>/i, `${scriptTag}\n</body>`)
  else doc += scriptTag

  return doc
}

export default function UiProjectPage() {
  const { project } = useParams<{ project: string }>()
  const key = (project?.toLowerCase() ?? '') as UiProjectKey
  const entry = key ? PROJECTS[key] : undefined

  const srcDoc = useMemo(() => {
    if (!entry) return ''
    return buildSrcDoc(entry.html, entry.css, entry.js)
  }, [entry])

  if (!entry) {
    return (
      <Box sx={{ py: 8, px: 4, textAlign: 'center' }}>
        <Typography level="h2" sx={{ mb: 2 }}>
          UI Project Not Found
        </Typography>
        <Typography level="body-lg" sx={{ color: 'text.tertiary', mb: 4 }}>
          No UI template exists for `{project}`.
        </Typography>
        <Link to={PATHS.PROJECTS} style={{ textDecoration: 'none' }}>
          <Button startDecorator={<ArrowBackIcon />} variant="outlined">
            Back to Projects
          </Button>
        </Link>
      </Box>
    )
  }

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Link to={PATHS.PROJECTS} style={{ textDecoration: 'none' }}>
            <Button startDecorator={<ArrowBackIcon />} variant="plain" sx={{ color: 'text.secondary' }}>
              Back
            </Button>
          </Link>
          <Typography level="h1" sx={{ fontWeight: 700 }}>
            {entry.title}
          </Typography>
        </Box>

        <Box
          sx={{
            border: '1px solid',
            borderColor: 'neutral.800',
            borderRadius: 1,
            overflow: 'hidden',
            bgcolor: 'background.surface',
          }}
        >
          <iframe
            key={project}
            title={entry.title}
            sandbox="allow-scripts"
            referrerPolicy="no-referrer"
            style={{ width: '100%', height: '80vh', border: 0, display: 'block' }}
            // Using srcDoc allows us to render your HTML template directly without needing separate build steps.
            srcDoc={srcDoc}
          />
        </Box>

        <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {(Object.keys(PROJECTS) as UiProjectKey[]).map((p) => (
            <Link
              key={p}
              to={getUiProjectPath(p)}
              style={{ textDecoration: 'none' }}
            >
              <Button
                size="sm"
                variant={p === key ? 'solid' : 'outlined'}
                sx={{
                  borderColor: 'neutral.700',
                  color: p === key ? 'white' : 'text.secondary',
                  bgcolor: p === key ? 'primary.600' : 'transparent',
                }}
              >
                {PROJECTS[p].title}
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

