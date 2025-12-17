import { useState } from "react";

function CourseEnrollment() {
  const [studentName, setStudentName] = useState("");
  const [registerNo, setRegisterNo] = useState("");
  const [year, setYear] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledList, setEnrolledList] = useState([]);

  const enrollCourse = () => {
    if (studentName && registerNo && year && course) {
      setEnrolledList([
        ...enrolledList,
        { studentName, registerNo, year, course }
      ]);

      setStudentName("");
      setRegisterNo("");
      setYear("");
      setCourse("");
    }
  };

  return (
    <div className="page">
      <div className="enroll-wrapper">

        <div className="card">
          <h3> Course Enrollment</h3>

          <label>Student Name</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <label>Register Number</label>
          <input
            type="text"
            value={registerNo}
            onChange={(e) => setRegisterNo(e.target.value)}
          />

          <label>Year</label>
          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>

          <label>Course</label>
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="">Select Course</option>
            <option>Artificial Intelligence</option>
            <option>Machine Learning</option>
            <option>Data Science</option>
            <option>Cloud Computing</option>
            <option>Internet of Things</option>
          </select>

          <button onClick={enrollCourse}>
            Enroll Course
          </button>
        </div>

        <div className="card">
          <h3> Enrolled Students</h3>

          {enrolledList.length === 0 && (
            <p>No enrollments yet</p>
          )}

          {enrolledList.map((item, index) => (
            <div key={index} className="live-item">
              <p><b>Name:</b> {item.studentName}</p>
              <p><b>Register No:</b> {item.registerNo}</p>
              <p><b>Year:</b> {item.year}</p>
              <p><b>Course:</b> {item.course}</p>
              <hr />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CourseEnrollment;
