import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import useDarkMode from "../../hooks/useDarkMode";

const Dark = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button
      onClick={toggleDarkMode}
      className={`me-3 border-0 ${isDarkMode ? "bg-main" : "bg-second"}`}
    >
      {isDarkMode ? (
        <i className="bi bi-moon-stars-fill fs-3"></i>
      ) : (
        <i className="bi bi-brightness-high-fill fs-3"></i>
      )}
    </Button>
  );
};

Dark.propTypes = {
  onToggleDarkMode: PropTypes.func.isRequired,
};

export default Dark;
