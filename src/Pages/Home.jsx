import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Student Course Management System</h1>
        <p>Manage courses, students, and enrollment easily in one place.</p>
        <Link to="/" className="hero-btn">
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="features">
        <Link to="/courses" className="feature-link">
          <div className="feature-card">
            <h3>📚 Courses</h3>
            <p>View and manage all available courses easily.</p>
          </div>
        </Link>

        <Link to="/students" className="feature-link">
          <div className="feature-card">
            <h3>👨‍🎓 Students</h3>
            <p>Add, update, and manage student records.</p>
          </div>
        </Link>

        <Link to="/studentForm" className="feature-link">
          <div className="feature-card">
            <h3>📝 Enrollment</h3>
            <p>Enroll students into courses quickly.</p>
          </div>
        </Link>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Start Managing Today</h2>
        <p>
          Start managing today with a reliable platform that simplifies course
          and student management <br />
          while improving efficiency and organization.
        </p>{" "}
        <br /> <br />
        <Link to="/courses" className="cta-btn">
          Explore Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
