import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const formMess = document.querySelector(".form-message");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yaddjni",
        "template_e01zwn9",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez rééssayez</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
        <h2>contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input type="email" name="email" required autoComplete="off" id="email" />
        <label>Message</label>
        <textarea name="message" required />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
