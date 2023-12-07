import "./contactForm.scss";

function ContactForm() {
  return (
    <form className="contactForm">
      <div className="fields">
        <div className="field">
          <label htmlFor="name">Your full Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="field">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" />
        </div>
        <div className="field">
          <label htmlFor="message">Message:</label>
          <textarea id="message" rows={8}></textarea>
        </div>
      </div>
      <button className="submit" type="submit">
        Send Message !
      </button>
    </form>
  );
}

export default ContactForm;
