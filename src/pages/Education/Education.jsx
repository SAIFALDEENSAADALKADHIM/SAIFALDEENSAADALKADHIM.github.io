import { FaGraduationCap } from 'react-icons/fa'

const degrees = [
  {
    degree: 'Ph.D. Electrical Engineering',
    institution: "Xi'an Jiaotong University",
    location: "Xi'an, China",
    period: '2021 – 2025',
    focus: 'MEMS-based sensors, CNT humidity sensors, IoT systems, and Li-ion battery safety monitoring.',
  },
  {
    degree: 'M.Sc. Electromechanical Engineering',
    institution: 'University of Technology, Baghdad',
    location: 'Baghdad, Iraq',
    period: '2014 – 2017',
    focus: 'Electromechanical systems design, embedded systems, and automation engineering.',
  },
  {
    degree: 'B.Sc. Electrical Engineering',
    institution: 'University of Babylon',
    location: 'Babylon, Iraq',
    period: '2002 – 2006',
    focus: 'Electrical engineering fundamentals, circuit design, and power systems.',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and degrees</p>
        <div className="edu-grid">
          {degrees.map((d, i) => (
            <div key={i} className="card edu-card">
              <div className="edu-icon">
                <FaGraduationCap />
              </div>
              <div className="edu-body">
                <span className="edu-period">{d.period}</span>
                <h3 className="edu-degree">{d.degree}</h3>
                <p className="edu-institution">{d.institution}</p>
                <p className="edu-location">{d.location}</p>
                <p className="edu-focus">{d.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
