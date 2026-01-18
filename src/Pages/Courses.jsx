import { useState } from "react";
import CourseCard from "../Components/CourseCard";

function Courses() {
  const [studentCount, setStudentCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const courses = [
    {
      id: 1,
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, React",
      duration: "6 months",
    },
    {
      id: 2,
      title: "Cyber Security",
      description: "Network security and ethical hacking",
      duration: "4 months",
    },
    {
      id: 3,
      title: "Graphic Designing",
      description: "Adobe tools and design principles",
      duration: "3 months",
    },
    {
      id: 4,
      title: "Software Development",
      description: "Full-stack development skills",
      duration: "8 months",
    },
    {
      id: 5,
      title: "Networking",
      description: "Network infrastructure and protocols",
      duration: "5 months",
    },
    {
      id: 6,
      title: "Cloud Computing",
      description: "AWS, Azure, and cloud services",
      duration: "4 months",
    },
    {
      id: 7,
      title: "Digital Media Marketing",
      description: "SEO, social media, and content marketing",
      duration: "3 months",
    },
    {
      id: 8,
      title: "AI Machine Learning",
      description: "Python, ML algorithms, and deep learning",
      duration: "6 months",
    },
    {
      id: 9,
      title: "Shopify / Amazon",
      description: "E-commerce setup and management",
      duration: "2 months",
    },
  ];

  const handleEnroll = (courseTitle) => {
    const newCount = studentCount + 1;
    setStudentCount(newCount);
    setPopupMessage(`Student Enrolled in ${courseTitle} (Total: ${newCount})`);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="courses">
      <h1>Available Courses</h1>

      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            duration={course.duration}
            onEnroll={handleEnroll}
          />
        ))}
      </div>

      {/* Enrolled Students Button */}
      <div className="enrolled-btn-wrap">
        <button className="enrolled-btn">
          Enrolled Students: {studentCount}
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
