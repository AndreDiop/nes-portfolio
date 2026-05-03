import React from 'react';

const Icon = ({ icon, label }) => {
  return (
    <div className="icon-item">
      <i className={icon}></i>
      {label && <p className="icon-label">{label}</p>}
    </div>
  );
};

export default Icon;
