import { FaGoogleScholar } from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'

const publications = [
  {
    year: '2025',
    title: 'Ionization-based Aerosol Sensor for Lithium-ion Battery Thermal Runaway Detection',
    journal: 'IEEE Sensors Journal',
    authors: 'Saif Aldeen Saad Al-Kadhim et al.',
    citations: null,
    doi: '#',
  },
  {
    year: '2024',
    title: 'Triple-electrode Carbon Nanotube-based Humidity Sensor',
    journal: 'Sensors & Actuators A: Physical',
    authors: 'Saif Aldeen Saad Al-Kadhim et al.',
    citations: null,
    doi: '#',
  },
  {
    year: '2023',
    title: 'MEMS-based Pressure Sensor for Environmental Monitoring',
    journal: 'Microsystem Technologies',
    authors: 'Saif Aldeen Saad Al-Kadhim et al.',
    citations: null,
    doi: '#',
  },
  {
    year: '2020',
    title: 'Implementation of CNC Machine via Wireless IoT Technology',
    journal: 'IEEE Conference Proceedings',
    authors: 'Saif Aldeen Saad Al-Kadhim et al.',
    citations: 49,
    doi: '#',
  },
]

export default function Publications() {
  return (
    <section id="publications">
      <div className="container">
        <div className="pub-header-row">
          <div>
            <h2 className="section-title">Publications</h2>
            <p className="section-subtitle">Peer-reviewed research and conference papers</p>
          </div>
          <div className="pub-metrics">
            <div className="metric">
              <span className="metric-value">49+</span>
              <span className="metric-label">Citations</span>
            </div>
            <div className="metric">
              <span className="metric-value">1</span>
              <span className="metric-label">h-index</span>
            </div>
            <div className="metric">
              <span className="metric-value">4</span>
              <span className="metric-label">Papers</span>
            </div>
          </div>
        </div>

        <a
          href="https://scholar.google.com/citations?user=3rVW_uYAAAAJ&hl=en&oi=ao"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline scholar-btn"
        >
          <FaGoogleScholar /> View on Google Scholar
        </a>

        <div className="pub-list">
          {publications.map((pub, i) => (
            <div key={i} className="card pub-card">
              <div className="pub-year-badge">{pub.year}</div>
              <div className="pub-content">
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-authors">{pub.authors}</p>
                <p className="pub-journal">{pub.journal}</p>
                <div className="pub-footer">
                  {pub.citations && (
                    <span className="pub-citations">📊 {pub.citations} citations</span>
                  )}
                  <a href={pub.doi} className="pub-doi" target="_blank" rel="noreferrer">
                    DOI <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
