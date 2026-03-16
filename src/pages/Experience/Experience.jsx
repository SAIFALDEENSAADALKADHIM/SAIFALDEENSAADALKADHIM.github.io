const experiences = [
  {
    role: 'Research Engineer',
    org: 'IEMIT — Xi\'an Jiaotong University',
    location: "Xi'an, China",
    period: '2021 – Present',
    desc: 'Conducting advanced research on MEMS-based sensors including carbon nanotube humidity sensors and ionization-based aerosol sensors for lithium-ion battery safety. Publishing in IEEE and Elsevier journals.',
    tags: ['MEMS', 'Sensors', 'CNT', 'Research'],
  },
  {
    role: 'Senior Engineer / IT Head',
    org: 'Shia Endowment',
    location: 'Babylon, Iraq',
    period: '2021 – Present',
    desc: 'Leading IT infrastructure and digital transformation initiatives. Managing technical teams and overseeing e-government systems implementation across the province.',
    tags: ['IT Management', 'E-Government', 'Leadership'],
  },
  {
    role: 'E-Government Engineering Project Manager',
    org: 'Shia Endowment',
    location: 'Baghdad, Iraq',
    period: '2019 – 2021',
    desc: 'Managed e-government engineering projects including digital systems integration, IoT deployments, and CNC machine control via wireless IoT technology. Published IEEE conference paper with 49+ citations.',
    tags: ['Project Management', 'IoT', 'CNC', 'IEEE'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">Professional journey and research positions</p>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card timeline-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-org">{exp.org}</p>
                    <p className="exp-location">{exp.location}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-desc">{exp.desc}</p>
                <div className="tags-row">
                  {exp.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
