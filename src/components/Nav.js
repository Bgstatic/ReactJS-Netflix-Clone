import React, { useState, useEffect } from "react";
import "../styles/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/110px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />
      <ul className="primary-navigation-tab">
        <li className="navigation-tab">
          <a href="https://www.netflix.com/tr-en/">Home</a>
        </li>
        <li className="navigation-tab">
          <a href="https://www.netflix.com/tr-en/browse/genre/83" >TV Shows</a>
        </li>
        <li className="navigation-tab">
          <a href="https://www.netflix.com/tr-en/browse/genre/34399">Movies</a>
        </li>
        <li className="navigation-tab">
          <a href="https://www.netflix.com/tr-en/browse/genre/839338">Latest</a>
        </li>
        <li className="navigation-tab">
          <a href="https://www.netflix.com/tr-en/">My List</a>
        </li>
      </ul>
      <img
        className="nav__avatar"
        src="https://occ-0-3947-2568.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSJ3NGhrqYg-bYI2LrJmE02crA5U8YUeIzG0Scdlzq0I3WE7MUaLem29yAwoBVyvyUw-ntR13pZVo5bO3iOQGvXb5GfO.png?r=a9c"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
