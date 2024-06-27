import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { LgLogo, SmLogo } from '../../images';

const Navbar = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isToggled, setIsToggled] = useState(false);
  const [isColorChanged, setIsColorChanged] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleIconClick = () => {
    setIsInputVisible(true);
  };

  const handleCloseClick = () => {
    setIsInputVisible(false);
    setSearchTerm('');
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleToggle = () => {
    setIsToggled(!isToggled);
    setIsColorChanged(!isColorChanged);
  };

  useEffect(() => {
    const handleNavbarLinkClick = () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarToggler && navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    };

    const navLinks = document.querySelectorAll('.nav-link');
    const navbarBrand = document.querySelector('.navbar-brand');

    navLinks.forEach(link => {
      link.addEventListener('click', handleNavbarLinkClick);
    });

    if (navbarBrand) {
      navbarBrand.addEventListener('click', handleNavbarLinkClick);
    }

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavbarLinkClick);
      });

      if (navbarBrand) {
        navbarBrand.removeEventListener('click', handleNavbarLinkClick);
      }
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg text-dark ${isColorChanged ? 'darkmode' : 'bg-main ? text-white'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand me-auto" to={`/`}>
          {isLargeScreen ? (
            <img src={LgLogo} alt="Logo" width="200" height="180" />
          ) : (
            <img src={SmLogo} alt="Logo" width="100" height="80" />
          )}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item me-4">
              <Link className="nav-link active text-dark fs-5" aria-current="page" to={`/`}>Home</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link text-dark fs-5" to={`/`}>Course</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link text-dark fs-5" to={`/`}>Study Abroad</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link text-dark fs-5" to={`/`}>Contact Us</Link>
            </li>
            <li className="nav-item me-4">
              <Link className="nav-link text-dark fs-5" to={`/`}>Sandboxing</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {!isInputVisible && (
              <div
                className="bg-secondary text-white rounded-circle fs-3 d-flex align-items-center justify-content-center p-2 me-3"
                style={{ cursor: 'pointer', height: '50px', width: '50px' }}
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
                <button className="btn text-dark btn-outline-secondary bg-secondary me-3" type="submit">
                  Submit
                </button>
                <div
                  className="bg-main text-white rounded-circle fs-3 d-flex align-items-center justify-content-center p-2 me-3"
                  style={{ cursor: 'pointer', height: '50px', width: '50px' }}
                  onClick={handleCloseClick}
                >
                  <i className="bi bi-x-lg"></i>
                </div>
              </form>
            )}
            <Button
              variant={isToggled ? 'secondary' : 'primary'}
              onClick={handleToggle}
              className="me-3"
            >
              {isToggled ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                  </svg>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                    <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                </>
              )}
            </Button>
            <div className="me-3">
              <img
                src="https://avatars.githubusercontent.com/u/72682273?v=4"
                className="rounded-circle img-fluid shadow"
                style={{ width: '50px' }}
                alt="Avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
