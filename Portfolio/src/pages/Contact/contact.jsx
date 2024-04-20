import ContactForm from "../../containers/forms/contactForm";

import "./contact.scss";
import textContent from "../../data/pagesTextContent/contactPage.json";
import { useLanguage } from "../../utils/contexts/reactContext/language/useLang";

function Contact() {
  const { language } = useLanguage();
  const title = textContent.pageTitle[language]
    ? textContent.pageTitle[language]
    : "Contact";
  document.title = title + " - Werlé Barthélémy";

  return (
    <main data-testid="contact-testid" className="container">
      <div className="contact-banner" data-after-content={title}>
        <h1 className="contact-banner__title">{title}</h1>
      </div>
      <div className="contact-wrapper">
        <ContactForm textContent={textContent.contactForm[language]} />
      </div>
    </main>
  );
}

export default Contact;
