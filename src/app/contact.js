import React, { useState } from "react";
import NavBar from "./navigation/navigate";

// TO BE USED Issue #
// eslint-disable-next-line no-unused-vars
function ContactForm() {
  const [name, setName] = useState('');
  const handleSubmit = (event) => {
    // eslint-disable-next-line no-alert
    alert(`Submitted: ${name}`);
    event.preventDefault();
  }
  return (
    <div id="cForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            value={name}
            id="name"
            required="required"
            onChange={e => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <form
        action="mailto:woskanet@gmail.com"
        method="POST"
        encType="multipart/form-data"
        name="emailSvc"
      >
        <input type="text" size="19" name="Email" />
        <button type="submit" value="Submit">Send</button>
      </form>
    </div>
  )
}

function Contact() {
  return (
    <>
      <NavBar navTag={5} /><br />
      <h3>Feel free to email me at <a href="mailto:contact@woska.net">contact@woska.net</a></h3>
    </>
  );
}

export default Contact;
