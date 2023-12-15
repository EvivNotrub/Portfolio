import "./contactForm.scss";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { validForm } from "../../utils/helpers/fieldValidation";

function ContactForm() {
  const form = useRef();
  async function send() {
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
  }

  const sendForm = async (e) => {
    e.preventDefault();
    const name = e.target.user_name.value;
    const mail = e.target.user_email.value;
    const message = e.target.message.value;
    const phone = e.target.user_phone.value;
    if (!validForm(name, mail, message, phone)) {
      return;
    }
    send();
  };
  return (
    <form ref={form} className="contactForm" onSubmit={sendForm}>
      <div className="fields">
        <div className="field">
          <label htmlFor="name">
            Your full Name: <span className="asterisk">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            maxLength={35}
          />
        </div>
        <div className="field">
          <label htmlFor="email">
            E-mail: <span className="asterisk">*</span>
          </label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="user_phone"
            minLength="9"
            maxLength="16"
          />
        </div>
        <div className="field">
          <label htmlFor="message">
            Message: <span className="asterisk">*</span>
          </label>
          <textarea
            id="message"
            rows={8}
            name="message"
            required
            minLength={30}
            maxLength={700}
          ></textarea>
        </div>
      </div>
      <div className="contactForm__footer">
        <button className="submit" type="submit">
          Send Message !
        </button>
        <span className="asterisk">* Required fields</span>
      </div>
    </form>
  );
}

export default ContactForm;
