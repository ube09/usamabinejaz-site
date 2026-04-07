import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Services from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/layout/ScrollToTop'
import CustomCursor from './components/animations/CustomCursor'
import PageTransition from './components/animations/PageTransition'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
