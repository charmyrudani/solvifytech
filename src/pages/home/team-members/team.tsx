import './team.css';

import dev1 from '/images/hero-section/dev1.png';
import dev2 from '/images/hero-section/dev2.png';
import dev3 from '/images/hero-section/dev3.png';
import dev4 from '/images/hero-section/dev4.png';
import dev5 from '/images/hero-section/dev5.png';

const teamMembers = [
  {
    id: 'nisarg',
    name: 'Nisarg',
    role: 'Senior Software Architect',
    experience: '5 Years Exp',
    skills: ['React.js', 'Next.js', 'Node.js', 'AWS'],
    img: dev1,
    gradient: 'linear-gradient(135deg, rgba(255, 100, 51, 0.12) 0%, rgba(255, 100, 51, 0.02) 100%)'
  },
  {
    id: 'abhishek',
    name: 'Abhishek',
    role: 'Full Stack Engineer',
    experience: '3 Years Exp',
    skills: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    img: dev2,
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.02) 100%)'
  },
  {
    id: 'dhairy',
    name: 'Dhairy',
    role: 'AI & Automation Engineer',
    experience: '3 Years Exp',
    skills: ['Python', 'OpenAI API', 'LangChain', 'n8n'],
    img: dev3,
    gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.02) 100%)'
  },
  {
    id: 'avinash',
    name: 'Avinash',
    role: 'Cloud & DevOps Engineer',
    experience: '4 Years Exp',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    img: dev4,
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.02) 100%)'
  },
  {
    id: 'charmy',
    name: 'Charmy',
    role: 'UI/UX Product Designer',
    experience: '2 Years Exp',
    skills: ['Figma', 'UI Design', 'UX Research', 'Design Systems'],
    img: dev5,
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.02) 100%)'
  }
];

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
          {teamMembers.map((member) => (
            <div key={member.id} className="card-premium">
              <div className="avatar-container-premium" style={{ background: member.gradient }}>
                <img src={member.img} alt={member.name} className="avatar-img-premium" />
                <span className="exp-tag-premium">{member.experience}</span>
              </div>
              
              <div className="content-premium">
                <h3 className="name-premium">{member.name}</h3>
                <p className="role-premium">{member.role}</p>
                
                <div className="skills-section-premium">
                  <div className="skills-grid-premium">
                    {member.skills.map((skill) => (
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