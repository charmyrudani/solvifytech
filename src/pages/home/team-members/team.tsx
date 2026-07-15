import { developmentTeam } from '../../../data/development-team/development-team';
import './team.css';

export default function Team() {
  return (
    <section className="team-section-premium">
      <div className="container-premium">
        <div className="header-premium">
          <span className="badge-premium">Expert Talent</span>
          <h2 className="title-premium">
            Meet the Builders of Your Product<span className="dot">.</span>
          </h2>
          <p className="subtitle-premium">
            A handpicked team of elite software architects, full-stack developers, AI automation engineers, and product designers.
          </p>
        </div>

        <div className="grid-premium">
          {developmentTeam?.engineers?.map((member) => (
            <div key={member.id} className="card-premium">
              <div className="avatar-container-premium" style={{ background: member.gradient }}>
                <img src={member.image} alt={member.name} className="avatar-img-premium" />
                <span className="exp-tag-premium">{member.experience}</span>
              </div>
              
              <div className="content-premium">
                <h3 className="name-premium">{member.name}</h3>
                <p className="role-premium">{member.role}</p>
                
                <div className="skills-section-premium">
                  <div className="skills-grid-premium">
                    {member?.technologies?.map((skill) => (
                      <span key={skill} className="skill-pill-premium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}