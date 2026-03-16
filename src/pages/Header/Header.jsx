import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaResearchgate, FaBars, FaTimes } from 'react-icons/fa'
import { SiOrcid } from 'react-icons/si'
import { FaGoogleScholar } from 'react-icons/fa6'
import './Header.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'News', href: '#news' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#home" className="header-logo">
          Dr. Saif Al-Kadhim
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-socials">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://researchgate.net" target="_blank" rel="noreferrer" aria-label="ResearchGate">
            <FaResearchgate />
          </a>
          <a href="https://orcid.org" target="_blank" rel="noreferrer" aria-label="ORCID">
            <SiOrcid />
          </a>
          <a href="https://scholar.google.com" target="_blank" rel="noreferrer" aria-label="Google Scholar">
            <FaGoogleScholar />
          </a>
        </div>
      </div>
    </header>
  )
}
