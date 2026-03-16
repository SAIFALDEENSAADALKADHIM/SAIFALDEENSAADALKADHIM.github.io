import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Triple-electrode CNT Humidity Sensor',
    desc: 'Carbon nanotube based humidity sensor with triple electrode design achieving high sensitivity and fast response time. Novel fabrication process on flexible substrate.',
    journal: 'Sensors & Actuators A: Physical, 2024',
    tags: ['MEMS', 'CNT', 'Sensors'],
    link: '#',
  },
  {
    title: 'Ionization Aerosol Sensor for Li-ion Battery Safety',
    desc: 'Aerosol ionization detection mechanism for early thermal runaway detection in lithium-ion batteries, enabling real-time safety monitoring in EV and energy storage systems.',
    journal: 'IEEE Sensors Journal, 2025',
    tags: ['Safety', 'IoT', 'Sensors'],
    link: '#',
  },
  {
    title: 'CNC Machine via Wireless IoT',
    desc: 'Wireless IoT-controlled CNC machine implementation using Arduino and ESP modules, enabling remote precision control. Published IEEE conference paper with 49+ citations.',
    journal: 'IEEE Conference, 2020 · 49+ citations',
    tags: ['IoT', 'CNC', 'Arduino'],
    link: '#',
  },
  {
    title: 'MEMS Pressure Sensor Design',
    desc: 'COMSOL Multiphysics-based simulation and fabrication design of MEMS pressure sensor for environmental monitoring applications with optimized diaphragm geometry.',
    journal: 'Microsystem Technologies, 2023',
    tags: ['MEMS', 'COMSOL', 'Fabrication'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Key research projects and engineering work</p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="card project-card">
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <a href={p.link} className="project-link" aria-label="View project">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <p className="project-desc">{p.desc}</p>
              <p className="project-journal">{p.journal}</p>
              <div className="tags-row">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
