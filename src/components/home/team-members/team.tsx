import { useState, useEffect, useRef } from 'react';
import './team.css';

import dev1 from '../../../assets/image/dev1.avif';
import dev2 from '../../../assets/image/dev2.avif';
import dev3 from '../../../assets/image/dev3.avif';
import dev4 from '../../../assets/image/dev4.avif';
import dev5 from '../../../assets/image/dev5.avif';

export default function Team() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!teamRef.current) return;
      const rect = teamRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Trigger collapse when the component's top is scrolled up to 60% of viewport
      if (rect.top < viewportHeight * 0.6) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`team-wrapper ${isCollapsed ? 'collapsed' : ''}`} ref={teamRef}>
      <div className="team">

        <div className="member half-circle dev1">
          <div className="shape"></div>
          <img src={dev1} alt="Software" />
          <div className="label-container">
            <span className="label-default">Software</span>
            <span className="label-collapsed">Software developers</span>
          </div>
        </div>

        <div className="member square dev2">
          <div className="shape"></div>
          <img src={dev2} alt="QA" />
          <div className="label-container">
            <span className="label-default">QA</span>
            <span className="label-collapsed">QA engineers</span>
          </div>
        </div>

        <div className="member circle dev3">
          <div className="shape"></div>
          <img src={dev3} alt="UX" />
          <div className="label-container">
            <span className="label-default">UX</span>
            <span className="label-collapsed">UX designers</span>
          </div>
        </div>

        <div className="member triangle dev4">
          <div className="shape"></div>
          <img src={dev4} alt="Data" />
          <div className="label-container">
            <span className="label-default">Data</span>
            <span className="label-collapsed">Data scientists</span>
          </div>
        </div>

        <div className="member semi-circle dev5">
          <div className="shape"></div>
          <img src={dev5} alt="Project" />
          <div className="label-container">
            <span className="label-default">Project</span>
            <span className="label-collapsed">Project managers</span>
          </div>
        </div>

      </div>
    </div>
  );
}