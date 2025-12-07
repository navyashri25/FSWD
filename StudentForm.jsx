import { useState } from "react";
import "../../App.css";
import bgImg from "../../assets/Dowanload.jpeg";

function StudentForm() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    id: "",
    about: "",
    skills: [],
  });

  const handleChanges = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "skills") {
      let updatedSkills = [...values.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }

      setValues({ ...values, skills: updatedSkills });
      return;
    }

    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted data:", values);
    alert("Registration Successful!");
  };

  const handleReset = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
      gender: "",
      contact: "",
      subject: "",
      id: "",
      about: "",
      skills: [],
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h1>Student Registration Form</h1>

        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            value={values.firstname}
            onChange={handleChanges}
            required
          />

          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
            value={values.lastname}
            onChange={handleChanges}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={values.email}
            onChange={handleChanges}
            required
          />

          <label>Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter Contact"
            value={values.contact}
            onChange={handleChanges}
            required
          />

          <label>Gender</label>
          <div className="gender-row">
            <label>
              <input type="radio" name="gender" value="male" onChange={handleChanges} />
              Male
            </label>

            <label>
              <input type="radio" name="gender" value="female" onChange={handleChanges} />
              Female
            </label>

            <label>
              <input type="radio" name="gender" value="others" onChange={handleChanges} />
              Others
            </label>
          </div>

          <label>Subject</label>
          <select name="subject" value={values.subject} onChange={handleChanges}>
            <option value="">Select Subject</option>
            <option value="math">Math</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
          </select>

          <label>Skills</label>
          <div className="skills-container">
            {["HTML", "CSS", "JavaScript", "React", "Python"].map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={values.skills.includes(skill)}
                  onChange={handleChanges}
                />
                {skill}
              </label>
            ))}
          </div>

          <label>ID Proof</label>
          <input
            type="file"
            name="id"
            onChange={(e) =>
              setValues({ ...values, id: e.target.files[0] })
            }
          />

          <label>About</label>
          <textarea
            name="about"
            placeholder="Enter Description"
            value={values.about}
            onChange={handleChanges}
          ></textarea>

          <div className="button-row">
            <button type="button" onClick={handleReset}>
              Reset
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentForm;
