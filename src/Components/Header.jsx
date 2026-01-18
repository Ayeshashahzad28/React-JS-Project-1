import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h2>Coursify</h2>
      <div className="nav-Links">
        <Link to="/">Home</Link>
        <Link to="/Courses">Courses</Link>
        <Link to="/studentForm">Add Students</Link>
        <Link to="/Students">Students Detail</Link>
      </div>
    </nav>
  );
}

export default Header;
