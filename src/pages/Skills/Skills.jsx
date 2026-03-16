const skillCategories = [
  {
    category: 'Research Tools',
    icon: '🔬',
    skills: ['MATLAB', 'COMSOL', 'LaTeX', 'Python'],
  },
  {
    category: 'Hardware',
    icon: '⚙️',
    skills: ['Arduino', 'Raspberry Pi', 'PCB Design', 'MEMS Fabrication'],
  },
  {
    category: 'Standards & Protocols',
    icon: '📡',
    skills: ['IEEE Standards', 'IoT Protocols', 'I2C/SPI', 'MQTT'],
  },
  {
    category: 'Specializations',
    icon: '🧪',
    skills: ['MEMS Engineering', 'Humidity Sensors', 'Gas Sensors', 'Li-ion Battery Safety'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technical expertise and research competencies</p>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="card skill-card">
              <div className="skill-cat-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-cat-title">{cat.category}</h3>
              </div>
              <ul className="skill-list">
                {cat.skills.map((s) => (
                  <li key={s} className="skill-item">
                    <span className="skill-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
