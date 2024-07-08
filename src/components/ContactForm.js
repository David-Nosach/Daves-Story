import React, { useState } from "react";
import "./ContactForm.css"; // Ensure this path is correct

const ContactForm = () => {
  // State for form fields and errors
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle changes in input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    // Remove any error for this field if it exists
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  // Handle onBlur event to validate fields
  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (!value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `${name} is required`,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation and possibly prepare data for submission
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    // Check if there are any errors before submitting
    if (Object.keys(newErrors).length === 0) {
      // Submit the data
      console.log("Form Data:", form);
      // Here you might want to send the data to a server
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
