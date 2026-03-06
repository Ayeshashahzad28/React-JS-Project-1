import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      <h2>Coursify</h2>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-Links ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/Courses" onClick={() => setIsOpen(false)}>Courses</Link>
        <Link to="/studentForm" onClick={() => setIsOpen(false)}>Add Students</Link>
        <Link to="/Students" onClick={() => setIsOpen(false)}>Students Detail</Link>
      </div>
    </nav>
  );
}

export default Header;