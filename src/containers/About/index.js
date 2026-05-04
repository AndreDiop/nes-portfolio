import React from "react";
import "../About/styles.css";

const About = () => {
  return (
    <div>
      <div className="nes-container is-rounded" id="aboutContainer">
        <h1>About Me</h1>
        <section className="message" id="aboutMessageSection">
          <div className="nes-balloon" id="aboutBalloon">
            <p>
              I'm a Software Developer at Fannie Mae (2021–present), coordinating
              application deployments across test, staging, and production using
              Jenkins and UCD. I own incident response, pipeline support, and
              platform reliability for Appian-based business-critical systems —
              the kind of work that keeps production running at 2am.
            </p>
          </div>
          <div className="nes-balloon from-left" id="aboutBalloonLeft">
            <p>
              Off the clock you'll find me on the mats training Brazilian
              Jiu-Jitsu (blue belt, working on it), grinding Settlers of Catan
              until no one wants to play with me, or arguing that the Aerobie
              Orbiter is the greatest invention known to humanity.
            </p>
          </div>
        </section>

        <img
          src="https://media.giphy.com/media/7eW3Rof21dV3MZ948r/giphy.gif"
          width="200"
          height="200"
          alt="8-bit stylized portrait of Andre Diop"
          id="andrePicture"
        />
      </div>
    </div>
  );
};

export default About;
