import { Component } from "react";
import ContactForm from "./ContactForm";
import "./contact.css";

const contact = () => {
  return (
    <div style={{ textAlign: "center", color: "#303030", marginTop: "3%"}}>
      <h1 style={{'text-shadow': '-2px 2px 1px grey' , 'color':'#303030'}}>Contact Us</h1>
      <p>
        Got any problems? Feel free to contact us!
      </p>
      <div className="contactForm">
        <ContactForm></ContactForm>
      </div>

      <div>
        <p><u>You can also reach us at the following:</u></p>
        <div><b>Email:</b> monkeysassociation@gmail.com</div>
        <div><b>Linkedin:</b> MonkeysAssociation13</div>
        <div><b>Facebook:</b> Monkey's Association Limited</div>
      </div>
    </div>
  );
};
export default contact;
