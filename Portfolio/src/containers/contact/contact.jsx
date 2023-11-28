import { useOutletContext } from "react-router-dom";

import ContactForm from "../forms/contactForm";
import "./contact.scss";

function Contact() {
  const outletClass = useOutletContext();

  return (
    <div className={"contact" + " " + outletClass}>
      <h2>Contact</h2>
      <p>Contact en cours de construction</p>
      <ContactForm />
    </div>
  );
}

export default Contact;
