import { lazy, Suspense, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import { navLinks } from './data/profileData'

const ThreeBackground = lazy(() => import('./components/ThreeBackground'))
const LandingPage = lazy(() => import('./pages/LandingPage'))

const App = () => {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    if (!sections.length) {
      return undefined
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35
      let currentSection = sections[0]?.id ?? 'home'

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [loading])

  return (
    <div className="relative min-h-screen bg-black bg-grid-fade">
      <LoadingScreen isLoading={loading} />
      <CustomCursor />
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>
      <Navbar activeSection={activeSection} />

      <Suspense fallback={<div className="h-screen" />}>
        <LandingPage />
      </Suspense>
    </div>
  )
}

export default App
