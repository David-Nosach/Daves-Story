import React from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section
      style={{
        width: "100%",
        padding: "20px",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <ContactForm />
    </section>
  );
};

export default Contact;
