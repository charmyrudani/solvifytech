import "./development-team.css";

export default function DevelopmentTeam({ data }: any) {
  if (!data) return null;

  return (
    <section className="dt-section">
      <div className="container">
        <div className="dt-header">
          <span className="dt-tag">{data.tag}</span>
          <h2 className="dt-title">{data.title}</h2>
          <p className="dt-description">{data.description}</p>
        </div>

        <div className="dt-grid">
          {data.engineers?.map((engineer: any, index: number) => (
            <div className="dt-card" key={index}>
              <div className="dt-card-top">
                <div className="dt-avatar-wrap">
                  <img
                    src={engineer.image}
                    alt={engineer.name}
                    className="dt-avatar"
                  />
                </div>
                <div className="dt-card-info">
                  <span className="dt-role mb-1">{engineer.role}</span>
                  <span className="dt-name">{engineer.name}</span>
                  <span className="dt-experience">{engineer.experience}</span>
                </div>
              </div>

              {engineer.technologies?.length > 0 && (
                <div className="dt-tech-list">
                  {engineer.technologies.map((tech: string, i: number) => (
                    <span className="dt-tech-badge" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {engineer.certifications?.length > 0 && (
                <ul className="dt-cert-list">
                  {engineer.certifications.map((cert: string, i: number) => (
                    <li className="dt-cert-item" key={i}>
                      <span className="dt-cert-icon">✓</span>
                      <span className="dt-cert-text">{cert}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}