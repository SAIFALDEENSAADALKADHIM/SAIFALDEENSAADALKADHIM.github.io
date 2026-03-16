import Header from './components/Header/Header'
import Hero from './pages/Hero/Hero'
import News from './pages/News/News'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Publications from './pages/Publications/Publications'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <Experience />
        <Education />
        <Publications />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default App
