import dev1 from '/images/hero-section/dev1.png'
import dev2 from '/images/hero-section/dev2.png'
import dev3 from '/images/hero-section/dev3.png'
import dev4 from '/images/hero-section/dev4.png'
import dev5 from '/images/hero-section/dev5.png'
import marriott from '/images/our-work/marriott.webp'
import tap1ce from '/images/our-work/tap1ce.webp'
import doccure from '/images/our-work/doccure.webp'
import vmc from '/images/our-work/vmc.svg'
import ccl from '/images/our-work/ccl.webp'

export const developmentTeam = {
    engineers: [
        {
            id: 'nisarg',
            name: 'Nisarg',
            role: 'Senior Software Architect',
            experience: '5 Years Exp',
            technologies: ['React.js', 'Next.js', 'Node.js', 'AWS'],
            image: dev1,
            project: tap1ce,
            gradient: 'linear-gradient(135deg, rgba(255, 100, 51, 0.12) 0%, rgba(255, 100, 51, 0.02) 100%)'
        },
        {
            id: 'abhishek',
            name: 'Abhishek',
            role: 'Full Stack Engineer',
            experience: '3 Years Exp',
            technologies: ['React.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
            image: dev2,
            project: doccure,
            gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(59, 130, 246, 0.02) 100%)'
        },
        {
            id: 'dhairy',
            name: 'Dhairy',
            role: 'AI & Automation Engineer',
            experience: '3 Years Exp',
            technologies: ['Python', 'OpenAI API', 'LangChain', 'n8n'],
            image: dev3,
            project: marriott,
            gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(139, 92, 246, 0.02) 100%)'
        },
        {
            id: 'avinash',
            name: 'Avinash',
            role: 'Cloud & DevOps Engineer',
            experience: '4 Years Exp',
            technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
            image: dev4,
            project: ccl,
            gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0.02) 100%)'
        },
        {
            id: 'charmy',
            name: 'Charmy',
            role: 'UI/UX Product Designer',
            experience: '2 Years Exp',
            technologies: ['Figma', 'UI Design', 'UX Research', 'Design Systems'],
            image: dev5,
            project: vmc,
            gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(16, 185, 129, 0.02) 100%)'
        },
    ]
};