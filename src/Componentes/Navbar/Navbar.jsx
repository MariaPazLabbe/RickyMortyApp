import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

//navbar desarrollado con bootstrap
const NavbarHeader = ({ brand }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand text-uppercase" href="/">
            {brand}
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavbarHeader;
