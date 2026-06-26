import "./tech-marquee.css"

const row1Items = [".js", "Java", "React", ".NET", "Python", "C#", "Rails", "Node", "Kotlin", "AWS", "Docker", "MySQL"]
const row2Items = ["Swift", "Angular", "PHP", "Android", "iOS", "Golang", "Vue.js", "C++", "JavaScript", "TypeScript", "Kubernetes", "GraphQL"]

export default function TechMarquee() {
  return (
    <section className="tech-marquee-section">
      <div className="container text-center">
        <div className="tech-marquee-header mb-5 mx-auto">
          <h2 className="tech-marquee-title">
            Yes, we cover the tech stack and AI coding tools you rely on<span className="dot">.</span>
          </h2>
          <p className="tech-marquee-subtitle">
            Our team has expertise in 100+ technologies and programming languages,
            <br /> including the AI coding tools rewriting how software gets built.
          </p>
        </div>

        <div className="tickers-container mb-5">
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

        <div className="repertoire-link-area mt-4">
          <a href="#" className="repertoire-link d-inline-flex align-items-center gap-2">
            Our full repertoire 
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
