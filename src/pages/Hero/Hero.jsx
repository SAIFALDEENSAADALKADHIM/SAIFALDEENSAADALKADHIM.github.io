import { useState, useEffect } from 'react'
import { FaGoogleScholar, FaEnvelope } from 'react-icons/fa6'
import { SiOrcid } from 'react-icons/si'
import './Hero.css'

const titles = [
  'IEEE Researcher',
  'MEMS Engineer',
  'IoT Specialist',
  'Sensor Scientist',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">Saif Aldeen Saad Al-Kadhim, Ph.D.</h1>
          <div className="hero-title-wrap">
            <span className={`hero-title ${visible ? 'visible' : 'hidden'}`}>
              {titles[titleIndex]}
            </span>
          </div>
          <p className="hero-institution">
            Xi&apos;an Jiaotong University &mdash; IEMIT Research Lab
          </p>
          <p className="hero-bio">
            PhD researcher specializing in MEMS-based sensors, carbon nanotube
            humidity sensors, IoT systems, and lithium-ion battery safety. IEEE
            member with 49+ citations.
          </p>
          <div className="hero-links">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              <FaGoogleScholar /> Google Scholar
            </a>
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <SiOrcid /> ORCID
            </a>
            <a
              href="mailto:saif@xjtu.edu.cn"
              className="btn btn-outline"
            >
              <FaEnvelope /> Contact
            </a>
          </div>
        </div>

        <div className="hero-avatar">
          <div className="avatar-ring">
            <div className="avatar-placeholder">
              <span>SAK</span>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">49+</span>
              <span className="stat-label">Citations</span>
            </div>
            <div className="stat">
              <span className="stat-value">4+</span>
              <span className="stat-label">Publications</span>
            </div>
            <div className="stat">
              <span className="stat-value">3+</span>
              <span className="stat-label">Years PhD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
