import { FaNewspaper } from 'react-icons/fa'

const newsItems = [
  {
    date: 'January 2025',
    title: 'New Paper Published',
    body: 'Our paper on ionization aerosol sensing for Li-ion battery safety has been accepted in IEEE Sensors Journal.',
    tag: 'Publication',
  },
  {
    date: 'December 2024',
    title: 'PhD Defense Scheduled',
    body: 'Successfully completed PhD dissertation on MEMS-based sensors at Xi\'an Jiaotong University.',
    tag: 'Milestone',
  },
  {
    date: 'October 2024',
    title: 'Conference Presentation',
    body: 'Presented research on CNT humidity sensors at IEEE MEMS 2024 conference.',
    tag: 'Conference',
  },
]

export default function News() {
  return (
    <section id="news">
      <div className="container">
        <h2 className="section-title">News</h2>
        <p className="section-subtitle">Recent updates and announcements</p>
        <div className="news-grid">
          {newsItems.map((item, i) => (
            <div key={i} className="card news-card">
              <div className="news-top">
                <FaNewspaper className="news-icon" />
                <span className="news-tag tag">{item.tag}</span>
              </div>
              <span className="news-date">{item.date}</span>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
