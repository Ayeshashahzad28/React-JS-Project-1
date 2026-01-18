import { useState } from "react";

function StudentForm() {
  const [students, setstudents] = useState({
    Firstname: "",
    Lastname: "",
    Birthdate: "",
    Gender: "",
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
      Birthdate: "",
      Gender: "",
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
      <input
        type="date"
        name="Birthdate"
        value={students.Birthdate}
        onChange={handleChange}
      />

      {/* gender */}
      <div className="radio-group">
        <label>Gender:</label>
        <div className="radio-btn">
          <label>
            <input
              type="radio"
              name="Gender"
              value="Male"
              checked={students.Gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="Gender"
              value="Female"
              checked={students.Gender === "Female"}
              onChange={handleChange}
            />
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
      <select
        name="course"
        id="course"
        value={students.course}
        onChange={handleChange}
      >
        <option value="">Select Course</option>
        <option value="Web Development">Web Development</option>
        <option value="Cyber Security">Cyber Security</option>
        <option value="Graphic Designing">Graphic Designing</option>
        <option value="Software Development">Software Development</option>
        <option value="Networking">Networking</option>
        <option value="Cloud Computing">Cloud Computing</option>
        <option value="Digital Media Marketing">Digital Media Marketing</option>
        <option value="Al Machine Learning">Al Machine Learning</option>
        <option value="Shopify / Amazon">Shopify / Amazon</option>
      </select>

      {/* submit button */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
