import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import StudentForm from "./Components/StudentForm";
import Students from "./Pages/Students";
// import Users from "./Pages/CourseDetails";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/students" element={<Students />} />
        {/* <Route path="/users/:id" element={<Users />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
