import { useState } from "react";
import React from "react";

function Contact() {
  return (
    <div className="form-container">
      Contact form
      <form action="" className="form">
        <input type="text" placeholder="Full Name" name="name" />
        <input
          type="email"
          placeholder="your-email@mail.com"
          name="email"
          id=""
        />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea
          name="message"
          placeholder="...type your message"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
