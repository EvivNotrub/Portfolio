import "./contactForm.scss";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_7s3blms",
        "template_h0dq0xs",
        form.current,
        "owysP7P1HSFXLsPTL",
      );
      console.log("success , result: ", result);
      alert("Message sent successfully !");
      // TODO: // Handle success
    } catch (error) {
      console.log("error", error);
      alert("Message failed to send !");
      // TODO: // Handle error
    }
  };

  return (
    <form ref={form} className="contactForm" onSubmit={sendEmail}>
      <div className="fields">
        <div className="field">
          <label htmlFor="name">Your full Name:</label>
          <input type="text" id="name" name="user_name" />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="user_email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows={8} name="message"></textarea>
        </div>
      </div>
      <button className="submit" type="submit">
        Send Message !
      </button>
    </form>
  );
}

export default ContactForm;
