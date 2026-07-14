import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Landing from './pages/Landing'
import Experience from './pages/Experience'
import ProjectsHub from './pages/ProjectsHub'
import CaseStudy from './pages/CaseStudy'
import Certifications from './pages/Certifications'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NeuroMailPrivacy from './pages/legal/NeuroMailPrivacy'
import NeuroMailTerms from './pages/legal/NeuroMailTerms'
import NexusPrivacy from './pages/legal/NexusPrivacy'
import NexusTerms from './pages/legal/NexusTerms'
import ScrollToTop from './components/layout/ScrollToTop'
import CustomCursor from './components/animations/CustomCursor'
import PageTransition from './components/animations/PageTransition'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-bg-primary overflow-x-hidden">
      <CustomCursor />
      <ScrollToTop />
      <Sidebar />
      <div className="min-h-screen flex flex-col lg:pl-[260px] pt-14 lg:pt-0">
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Landing /></PageTransition>} />
              <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
              <Route path="/projects" element={<PageTransition><ProjectsHub /></PageTransition>} />
              <Route path="/projects/:id" element={<PageTransition><CaseStudy /></PageTransition>} />
              <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
              <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
              <Route path="/services" element={<Navigate to="/" replace />} />
              <Route path="/work" element={<Navigate to="/projects" replace />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/neuromail/privacy" element={<PageTransition><NeuroMailPrivacy /></PageTransition>} />
              <Route path="/neuromail/terms" element={<PageTransition><NeuroMailTerms /></PageTransition>} />
              <Route path="/nexus/privacy" element={<PageTransition><NexusPrivacy /></PageTransition>} />
              <Route path="/nexus/terms" element={<PageTransition><NexusTerms /></PageTransition>} />
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  )
}
