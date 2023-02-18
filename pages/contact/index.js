import React, { useState } from "react";
import styles from './contact.module.scss'

function Contact() {

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [hide, setHide] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    const formData = {}

    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return; 
      formData[field.name] = field.value;
    });

    const res = await fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSuccess(!success);
    } else {
      setError(!error);
    }

    setHide(!hide);
  }


  return (
 
    <div id="contact" className="page-container" >
      <div className={styles.success} style={{ display: success ? "block" : "none" }}>
        <p>Thank you for getting in touch!</p>
      </div>
      <div className={styles.success} style={{ display: error ? "block" : "none" }}>
        <p>Error! <br/>Please refresh and try again or contact me at <a href="mailto:acekisch@gmail.com">acekisch@gmail.com</a></p>
      </div>

        <form 
          name="contact" 
          method="POST" 
          onSubmit={handleOnSubmit} 
          className={styles.contact} 
          style={{ display: hide ? "none" : "grid" }}
        >
          <div className="honey">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="off" />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="off" />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" autoComplete="off"></textarea>
          </div>

          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="nameTrue" hidden>Name</label>
          <input type="text" name="nameTrue" placeholder="Name" required/>

          <label htmlFor="emailTrue" hidden>Email</label>
          <input type="email" name="emailTrue" placeholder="Email" required/>

          <label htmlFor="messageTrue" hidden>Message</label>
          <textarea name="messageTrue" placeholder="Message" required></textarea>
          <button type="submit" className="btn">Send</button>

        </form>
        <style jsx>{`
          .honey {
            display: none;
          }
        `}</style>
      </div>
    


  );
}

export default Contact;