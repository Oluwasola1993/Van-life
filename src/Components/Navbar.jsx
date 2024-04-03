import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const NavLinks = [
    {
      name: "#VANLIFE",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Vans",
      path: "/van",
    },
    {
      name: "Sign in",
      path: "/signin",
    },
  ];

  return (
    <>
      <div className="container-fluid" id="nav-link">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <ul
              className="d-flex justify-content-around mt-3 py-3"
              style={{
                listStyleType: "none",
                fontSize: "16px",
              }}
            >
              {NavLinks.map((link) => (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "fw-bold text-dark text-decoration-underline fs-5"
                      : null
                  }
                  key={link.name}
                  to={link.path}
                  style={{ textDecoration: "none", color: "#908d89" }}
                >
                  <li>{link.name}</li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
