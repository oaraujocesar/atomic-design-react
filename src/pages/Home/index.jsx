import React from "react";
import Auth from "templates/Auth";

import "./style.scss";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="cover"></div>
      <div className="form">
        <Auth />
      </div>  
    </div>
  );
};

export default Home;
