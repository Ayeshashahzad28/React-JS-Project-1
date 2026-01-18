import { useState } from "react";

function StudentForm() {
  const [students, setstudents] = useState({
    Firstname: "",
    Lastname: "",
    email: "",
    course: "",
  });

  //
  const handleChange = (e) => {
    setstudents({ ...students, [e.target.name]: e.target.value });
  };

  // page reload
  const handlesubmit = (e) => {
    e.preventDefault();
    alert("student added: " + students.Firstname + " " + students.Lastname);
    setstudents({
      Firstname: "",
      Lastname: "",
      email: "",
      course: "",
    });
  };
  return (
    <form onSubmit={handlesubmit}>
      <h2>Enrolled Students</h2>

      {/* First Name */}
      <label>Student Name:</label>
      <input
        type="text"
        placeholder="First Name"
        name="Firstname"
        value={students.Firstname}
        onChange={handleChange}
        required
      />

      {/* Last Name */}
      <input
        type="text"
        placeholder="Last Name"
        name="Lastname"
        value={students.Lastname}
        onChange={handleChange}
        required
      />

      {/* birthdate */}
      <label>Birth Date:</label>
      <input type="date" />

      {/* gender */}
      <div className="radio-group">
        <label>Gender:</label>
        <div className="radio-btn">
          <label>
            <input type="radio" name="gender" value="Male" />
            Male
          </label>

          <label>
            <input type="radio" name="gender" value="Female" />
            Female
          </label>
        </div>
      </div>

      {/* Students Email */}
      <label>Email Address</label>
      <input
        type="email"
        placeholder="abc@gmail.com"
        name="email"
        value={students.email}
        onChange={handleChange}
        required
      />

      {/* student Courses */}
      <label>Course Enrollment</label>
      <select name="course" id="course" onChange={handleChange}>
        <option value="course">Select Course</option>
        <option value="course">Web Development</option>
        <option value="course">Cyber Security</option>
        <option value="course">Graphic Designing</option>
        <option value="course">Software Development</option>
        <option value="course">Networking</option>
        <option value="course">Cloud Computing</option>
        <option value="course">Digital Media Marketing</option>
        <option value="course">Al Machine Learning</option>
        <option value="course">Shopify / Amazon</option>
      </select>

      {/* submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
