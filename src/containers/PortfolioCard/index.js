import React from "react";
import "../PortfolioCard/styles.css";

const index = ({
  name,
  picture,
  deployedLink,
  githubLink,
  projectInfo,
  tech1,
  tech2,
  tech3,
}) => {
  return (
    <div className="nes-balloon nes-pointer" id="portfolioCard">
      <p> {name}</p>
      <img src={picture} width="360" height="180" id="id" alt="alt text here" />

      <hr />

      <p> {projectInfo} </p>
      <hr />

      <span className="nes-badge">
        <span className="is-warning">{tech1}</span>
      </span>
      <span className="nes-badge">
        <span className="is-warning">{tech2}</span>
      </span>
      {tech3 && (
        <span className="nes-badge">
          <span className="is-warning">{tech3}</span>
        </span>
      )}

      <hr />

      <a
        className="nes-btn"
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        id="portfolioRepoButton"
      >
        Github Repo
      </a>

      <a
        className="nes-btn is-primary"
        href={deployedLink}
        target="_blank"
        rel="noreferrer"
        id="portfolioDeployLinkButton"
      >
        Deployed Link
      </a>
    </div>
  );
};

export default index;
