import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dark from "./Dark";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { LgLogo, SmLogo, WhiteLogo } from "../../images";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const { isDarkMode } = useDarkMode();

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleIconClick = () => {
    setIsInputVisible(true);
  };

  const handleCloseClick = () => {
    setIsInputVisible(false);
    setSearchTerm("");
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handleNavbarLinkClick = () => {
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarToggler && navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    };

    const navLinks = document.querySelectorAll(".nav-link");
    const navbarBrand = document.querySelector(".navbar-brand");

    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavbarLinkClick);
    });

    if (navbarBrand) {
      navbarBrand.addEventListener("click", handleNavbarLinkClick);
    }

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavbarLinkClick);
      });

      if (navbarBrand) {
        navbarBrand.removeEventListener("click", handleNavbarLinkClick);
      }
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg  ${isDarkMode ? "darkmode2" : "bg-main text-dark"
        }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand me-auto" to={`/`}>
          {isLargeScreen ? (
            <img
              src={isDarkMode ? WhiteLogo : LgLogo}
              alt="Logo"
              width="150"
              height="100"
            />
          ) : (
            <img src={SmLogo} alt="Logo" width="100" height="50" />
          )}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                aria-current="page"
                to={`/`}
              >
                Home
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                aria-current="page"
                to={`/unicamp`}
              >
                UniCamp
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                to={`/course`}
              >
                Learn
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                to={`/euphoria`}
              >
                Euphoria
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                to={`/sandboxing`}
              >
                Sandboxing
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                to={`/Founder's-club`}
              >
                Founder&apos;s club
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                to={`/career`}
              >
                Career
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                to={`/services`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item me-4">
              <Link
                className={`nav-link fs-5 ${isDarkMode ? "text-light" : "text-dark"
                  }`}
                to={`/contact-us`}
              >
                Contact US
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {!isInputVisible && (
              <div
                className="bg-secondary text-white rounded-circle fs-3 d-flex align-items-center justify-content-center p-2 me-3"
                style={{ cursor: "pointer", height: "50px", width: "50px" }}
                onClick={handleIconClick}
              >
                <i className="bi bi-search"></i>
              </div>
            )}
            {isInputVisible && (
              <form className="d-flex align-items-center gap-3" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleInputChange}
                />
                <button
                  className="btn text-dark btn-outline-secondary bg-secondary me-3"
                  type="submit"
                >
                  Submit
                </button>
                <div
                  className="bg-primary text-white rounded-circle fs-3 d-flex align-items-center justify-content-center p-2 me-3"
                  style={{ cursor: "pointer", height: "50px", width: "50px" }}
                  onClick={handleCloseClick}
                >
                  <i className="bi bi-x-lg"></i>
                </div>
              </form>
            )}
            <Dark />
            <DropdownButton
              id="dropdown-basic-button"
              title={
                <img
                  src="https://avatars.githubusercontent.com/u/72682273?v=4"
                  className="rounded-circle img-fluid shadow"
                  style={{ width: "50px", cursor: "pointer" }}
                  alt="Avatar"
                />
              }
              align="end"
              variant=""
            >
              <Dropdown.Item href="/myprofile">Profile</Dropdown.Item>
              <Dropdown.Item href="/">Settings</Dropdown.Item>
              <Dropdown.Item href="/login">Logout</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
