import React from 'react';

const user = 'itsjustAndre';
const domain = 'gmail.com';
const email = `${user}@${domain}`;

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-cmd">
          <span className="prompt">$</span> contact --andre
        </p>
        <hr className="section-divider" />

        <p className="contact-blurb">
          I build things that ship and stay shipped. If you're working on
          something interesting — or need someone who can own a feature end
          to end — reach out.
        </p>
        <p className="contact-human">
          {'// BJJ blue belt · Settlers of Catan · Aerobie Orbiter evangelist'}
        </p>

        <div className="contact-links">
          <a href={`mailto:${email}`}>email ↗</a>
          <a
            href="https://www.linkedin.com/in/andre-diop-998754200/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin ↗
          </a>
          <a
            href="https://github.com/AndreDiop"
            target="_blank"
            rel="noreferrer"
          >
            github ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
