import React from "react";

const TitleHeader = ({ title, subtitle, className = "" }) => {
  return (
    <header className={`title-header ${className}`}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
    </header>
  );
};

  export default TitleHeader;