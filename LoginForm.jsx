import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    age: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{3,15}$/;
    if (formData.username && !usernameRegex.test(formData.username)) {
      newErrors.username = "Username must be 4–16 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (formData.mobile && !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (formData.age && (formData.age < 18 || formData.age > 60)) {
      newErrors.age = "Age must be between 18 and 60";
    }

    if (formData.password.length < 6 || formData.password.length > 12) {
      newErrors.password = "Password must be 6–12 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful!");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-box">
        
        <h2>Login</h2>

        <label>Username</label>
        <input
          type="text"
          value={formData.username}
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        {errors.username && <p className="error">{errors.username}</p>}

        <label>Email</label>
        <input
          type="text"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Mobile Number</label>
        <input
          type="text"
          value={formData.mobile}
          onChange={(e) =>
            setFormData({ ...formData, mobile: e.target.value })
          }
        />
        {errors.mobile && <p className="error">{errors.mobile}</p>}

        <label>Age</label>
        <input
          type="number"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
        />
        {errors.age && <p className="error">{errors.age}</p>}

        <label>Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
