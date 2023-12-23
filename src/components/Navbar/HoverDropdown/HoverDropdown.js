import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

export default function HoverDropdown({ defaultIcon, hoveredIcon, children }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdown = () => {
    setShowDropdown(true);
  };

  const handleHideDropdown = () => {
    setShowDropdown(false);
  };

  const icon = showDropdown ? hoveredIcon : defaultIcon;

  return (
    <NavDropdown
      show={showDropdown}
      onMouseEnter={handleShowDropdown}
      onMouseLeave={handleHideDropdown}
      title={<img src={icon} alt="dropdown_icon" />}
    >
      {children}
    </NavDropdown>
  );
}
