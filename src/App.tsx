import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssVarsProvider, CssBaseline } from '@mui/joy';
import theme from '../lib/theme';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import FloatingBinary from '../components/effects/FloatingBinary';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ResumePage from './pages/ResumePage';
import TechStackPage from './pages/TechStackPage';
import ContactPage from './pages/ContactPage';
import CertificationsPage from './pages/CertificationsPage';
import { PATHS } from '../lib/paths';

function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <CssBaseline />
      <div className="app">
        <FloatingBinary />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path={PATHS.PROJECTS} element={<ProjectsPage />} />
            <Route path={PATHS.PROJECT_DETAIL} element={<ProjectDetailPage />} />
            <Route path={PATHS.RESUME} element={<ResumePage />} />
            <Route path={PATHS.TECH_STACK} element={<TechStackPage />} />
            <Route path={PATHS.CONTACT} element={<ContactPage />} />
            <Route path={PATHS.CERTIFICATIONS} element={<CertificationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CssVarsProvider>
  );
}

export default App;
