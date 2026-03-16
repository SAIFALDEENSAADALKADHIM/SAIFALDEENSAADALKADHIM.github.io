import './App.css'
import Header from './pages/Header/Header'
import Hero from './pages/Hero/Hero'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Publications from './pages/Publications/Publications'
import News from './pages/News/News'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Publications />
        <News />
      </main>
    </div>
  )
}

export default App
