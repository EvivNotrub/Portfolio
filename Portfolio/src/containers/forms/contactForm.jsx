import { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { validForm } from "../../utils/helpers/fieldValidation";
import "./contactForm.scss";
//TODO: handle short message message or veiw
function ContactForm({ textContent }) {
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
            {textContent.name ? textContent.name : "Votre Nom complet"}
            {": "}
            <span className="asterisk">*</span>
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
            {textContent.email ? textContent.email : "E-mail:"}
            {": "}
            <span className="asterisk">*</span>
          </label>
          <input type="email" id="email" name="user_email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">
            {textContent.tel ? textContent.tel : "Numéro de téléphone:"}
            {": "}
          </label>
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
            {textContent.message ? textContent.message : "Message:"}
            {": "}
            <span className="asterisk">*</span>
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
          {textContent.send ? textContent.send : "Envoyer le message"} !
        </button>
        <span className="asterisk">
          * {textContent.info ? textContent.info : "Champs obligatoires"}
        </span>
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  textContent: PropTypes.objectOf(PropTypes.string),
};

export default ContactForm;
