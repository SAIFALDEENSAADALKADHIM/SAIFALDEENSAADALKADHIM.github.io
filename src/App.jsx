import { lazy, Suspense } from 'react'
import './App.css'
import Header from './pages/Header/Header'

const Hero = lazy(() => import('./pages/Hero/Hero'))
const Experience = lazy(() => import('./pages/Experience/Experience'))
const Education = lazy(() => import('./pages/Education/Education'))
const Projects = lazy(() => import('./pages/Projects/Projects'))
const Skills = lazy(() => import('./pages/Skills/Skills'))
const Publications = lazy(() => import('./pages/Publications/Publications'))
const News = lazy(() => import('./pages/News/News'))

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Suspense fallback={<div className="loader">Loading…</div>}>
          <Hero />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Publications />
          <News />
        </Suspense>
      </main>
    </div>
  )
}

export default App
