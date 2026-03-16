import { FaEnvelope, FaMapMarkerAlt, FaOrcid, FaResearchgate, FaGoogle, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'saif.alkadhim@xjtu.edu.cn',
    href: 'mailto:saif.alkadhim@xjtu.edu.cn',
    color: 'blue',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Xi\'an Jiaotong University, Xi\'an, Shaanxi, China',
    href: 'https://maps.google.com/?q=Xi%27an+Jiaotong+University',
    color: 'red',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Also at',
    value: 'Shia Endowment, Babylon & Baghdad, Iraq',
    href: null,
    color: 'green',
  },
]

const academicProfiles = [
  {
    icon: <FaOrcid />,
    label: 'ORCID',
    handle: '0000-0002-7887-4272',
    href: 'https://orcid.org/0000-0002-7887-4272',
    color: 'green',
  },
  {
    icon: <FaResearchgate />,
    label: 'ResearchGate',
    handle: 'Saif-Aldeen-Al-Kadhim',
    href: 'https://www.researchgate.net/profile/Saif-Aldeen-Al-Kadhim',
    color: 'teal',
  },
  {
    icon: <FaGoogle />,
    label: 'Google Scholar',
    handle: 'View Profile',
    href: 'https://scholar.google.com/citations?user=SAIF_SCHOLAR',
    color: 'blue',
  },
  {
    icon: <FaLinkedin />,
    label: 'LinkedIn',
    handle: 'Connect',
    href: 'https://www.linkedin.com/in/saif-aldeen-al-kadhim',
    color: 'navy',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-sub">Get in Touch</h3>
            <p className="contact-intro">
              Interested in collaboration, research discussions, or have questions about my work?
              Feel free to reach out via email or through any of the academic profiles below.
            </p>
            <div className="contact-items">
              {contactItems.map((item, i) => (
                <div className="contact-item" key={i}>
                  <span className={`contact-icon contact-icon--${item.color}`}>{item.icon}</span>
                  <div>
                    <p className="contact-item-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="contact-item-value contact-item-link">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact-item-value">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-profiles">
            <h3 className="contact-sub">Academic Profiles</h3>
            <p className="contact-intro">
              Find my research publications, citation metrics, and professional networking on these platforms.
            </p>
            <div className="profile-cards">
              {academicProfiles.map((profile, i) => (
                <a
                  key={i}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`profile-card profile-card--${profile.color}`}
                >
                  <span className="profile-card-icon">{profile.icon}</span>
                  <div>
                    <p className="profile-card-label">{profile.label}</p>
                    <p className="profile-card-handle">{profile.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
