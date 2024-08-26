import React from "react";
import image from "../../assests/imgey.jpg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Dr. Adan Saman</span>
        <span className="headerTitleLg">Educational Blog</span>
      </div>

      <img className="headerImg" src={image} alt="students graduating" /><br />
      <br />
      <br />
      <hr />
      <hr />
    </div> 
  );
}

export default Header;
