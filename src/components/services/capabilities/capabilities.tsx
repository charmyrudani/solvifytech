import { useState } from 'react';
import './capabilities.css';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function Capabilities({ data }: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  if (!data || !data.capabilities) return null;
  const activeCapability = data.capabilities[activeIndex];

  return (
    <div className="capabilities-section py-5">
      <div className="container">
        <div className="capabilities-header mb-5">
          <h6 className="text-uppercase fw-bold capabilities-label">{data.label}</h6>
          <p className=" mb-3">{data.title}</p>
          <p className=" text-muted capabilities-desc">{data.description}</p>
        </div>

        <div className="row g-4 capabilities-content">
          <div className="col-lg-5 col-md-5">
            <div className="capabilities-list d-flex flex-column gap-2">
              {data.capabilities.map((cap: any, index: number) => (
                <div
                  key={index}
                  className={`capability-item ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <FaRegCheckCircle className="capability-icon" />
                  <span className="capability-title">{cap.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-lg-7 col-md-7 d-flex flex-column"
            style={{
              justifyContent: activeIndex === 0 ? 'flex-start' : (activeIndex === data.capabilities.length - 1 ? 'flex-end' : 'center')
            }}>
            <div className="capability-details p-4">
              <p className="capability-description mb-4">{activeCapability.description}</p>
              <div className="tools-grid">
                {activeCapability.tools.map((tool: any, idx: number) => (
                  <ToolCard key={`${activeCapability.title}-${tool.name}-${idx}`} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: any }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="tool-card border rounded d-flex align-items-center justify-content-center position-relative overflow-hidden">
      {!imgError && tool.logo ? (
        <img
          src={tool.logo}
          alt={tool.name}
          className="tool-logo img-fluid"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="tool-name-fallback fw-bold">{tool.name}</span>
      )}

      {/* <FiExternalLink className="external-icon position-absolute top-0 end-0 m-2" /> */}

      <div className="tool-hover-bottom position-absolute bottom-0 start-0 w-100 d-flex align-items-center justify-content-center">
        <span className="tool-hover-name text-white fw-bold">{tool.name}</span>
      </div>
    </div>
  );
}