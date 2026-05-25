import React from 'react';

const user = 'itsjustAndre';
const domain = 'gmail.com';

const Footer = () => {
  return (
    <footer id="footer">
      <span className="muted">Andre Diop · {new Date().getFullYear()}</span>
      <span className="muted">{`${user}@${domain}`}</span>
    </footer>
  );
};

export default Footer;
