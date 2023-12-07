import ContactForm from "../../containers/forms/contactForm";
import "./contact.scss";

function Contact() {
  return (
    <main data-testid="contact-testid" className="container">
      <h1 className="contact-title">Contact</h1>
      <div className="contact-wrapper">
        <ContactForm />
      </div>
    </main>
  );
}

export default Contact;
