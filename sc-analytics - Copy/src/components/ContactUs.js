import { Component } from "react";
import ContactForm from "./ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h2>CONTACT US</h2>
      <hr />
      <h3>
        Got any tech problems?? Feel free to contact us!
      </h3>
      
      <div className="contactForm">
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};
export default ContactUs;
