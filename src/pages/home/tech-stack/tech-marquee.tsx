import "./tech-marquee.css"

const row1Items = ["JS", "Node", "React", "Python", "Kotlin", "AWS", "Docker", "MySQL", "Next"]
const row2Items = ["Angular", "Android", "iOS", "Vue.js", "C++", "JavaScript", "TypeScript", "Kubernetes"]

export default function TechMarquee() {
  return (
    <section className="tech-marquee-section">
      <div className="container text-center">
        <div className="tech-marquee-header mb-5 mx-auto">
          <h2 className="tech-marquee-title">
            Modern Technologies. Reliable Engineering. Scalable Results.
          </h2>
          <p className="tech-marquee-subtitle">
           We select the right technology for every product based on performance, security,
            <br /> scalability and long-term maintainability
          </p>
        </div>

        <div className="tickers-container mb-0 mb-md-5">
          <div className="tech-marquee-row overflow-hidden">
            <div className="marquee-track-left">
              {row1Items.map((item, idx) => (
                <span className="marquee-item" key={`r1-${idx}`}>{item}</span>
              ))}
              {row1Items.map((item, idx) => (
                <span className="marquee-item" key={`r1-dup-${idx}`}>{item}</span>
              ))}
            </div>
          </div>

          <div className="tech-marquee-row overflow-hidden">
            <div className="marquee-track-right">
              {row2Items.map((item, idx) => (
                <span className="marquee-item" key={`r2-${idx}`}>{item}</span>
              ))}
              {row2Items.map((item, idx) => (
                <span className="marquee-item" key={`r2-dup-${idx}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
