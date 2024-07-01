import { useState } from "react";
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types'; // Import PropTypes

const Dark = ({ onToggleDarkMode }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    onToggleDarkMode();
  };

  return (
    <Button
      onClick={handleToggle}
      className={`me-3 border-0 ${isToggled ? 'bg-main' : 'bg-second'}`}
    >
      {isToggled ? (
        <>
          <i className="bi bi-moon-stars-fill fs-3"></i>
        </>
      ) : (
        <>
          <i className="bi bi-brightness-high-fill fs-3"></i>
        </>
      )}
    </Button>
  );
}
Dark.propTypes = {
  onToggleDarkMode: PropTypes.func.isRequired,
};

export default Dark;
