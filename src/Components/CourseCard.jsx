function CourseCard({ title, description, duration, onEnroll }) {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="duration">Duration: {duration}</span>
      <button className="enroll-btn" onClick={() => onEnroll(title)}>
        Enroll Now
      </button>
    </div>
  );
}

export default CourseCard;
