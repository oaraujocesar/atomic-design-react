import React from "react";

import "./style.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <h1>Logo</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#link">Link</a>
        </li>
        <li>
          <a href="#zelda">Zelda</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
