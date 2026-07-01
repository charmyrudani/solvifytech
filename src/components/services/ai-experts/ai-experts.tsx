import "./ai-experts.css";

const tools = [
  "/images/tool-tech/devin.svg",
  "/images/tool-tech/github.svg",
  "/images/tool-tech/cody.svg",
  "/images/tool-tech/cursor.svg",
  "/images/tool-tech/retool.svg",
  "/images/tool-tech/gemini.svg",
  "/images/tool-tech/copilot.svg",
  "/images/tool-tech/ollama.svg",
  "/images/tool-tech/windsurf.svg",
];

function AIExperts() {
  return (
    <section className="aiExpertsSection">
      <div className="aiExpertsWrapper">
        <div className="aiExpertsLeft">
          <span className="aiExpertsTag"> AI EXPERTS </span>
          <h2 className="aiExpertsHeading">
            Work with AI-augmented developers.
          </h2>
          <p className="aiExpertsDescription">
            Every developer we provide uses modern AI coding tools to ship faster than ever while producing cleaner, more consistent code.
          </p>
        </div>

        <div className="aiExpertsGrid">
          {tools.map((icon, index) => (
            <div className="aiExpertsCard" key={index}>
              <img src={icon} alt="AI Tool" className="aiExpertsIcon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIExperts;