import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleClick(event) {
    if (!isLoggedIn) {
      alert("Please sign Up before navigating to the Home page.");
      event.preventDefault();
    }
  }

  return (
    <nav>
      <ul className={style.list}>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/SignUp">SignUp</Link>
        </li>
      </ul>
    </nav>
  );
}
