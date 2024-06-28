import React from "react";
import "../About/styles.css";

const index = () => {
  return (
    <div>
      <div className="nes-container is-rounded" id="aboutContainer">
        <h1>About Me</h1>
        <section className="message" id="aboutMessageSection">
          <div className="nes-balloon " id="aboutBalloon">
            <p>
              My name is Andre Diop and I am an Atlanta based Full Stack
              Developer.
              I am responsible for all parts of the development lifecycle and
              bring a creative and aesthetic touch to all projects.
            </p>
          </div>
          <div className="nes-balloon from-left" id="aboutBalloonLeft">
            <p>
              Aside from deploying awesomely responsive mobile first websites
              and applications, I can be found training in Brazilian Jiu Jitsu
              (I'm a blue belt), playing Settlers of Catan (I'm unstoppable) or
              trying to master the Aerobie Orbiter (it's amazing!).
            </p>
          </div>
        </section>

        <img
          src="https://media.giphy.com/media/7eW3Rof21dV3MZ948r/giphy.gif"
          width="200"
          height="200"
          alt="8-bit stylized picture of Andre Diop"
          id="andrePicture"
        />
      </div>
    </div>
  );
};

export default index;
