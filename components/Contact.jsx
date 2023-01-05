import { useState } from "react";
import React from "react";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(data);
  };

  return (
    <div className="form-container">
      Contact form
      <form action="" className="form" method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={data.name}
          placeholder="Full Name"
          name="name"
        />
        <input
          type="email"
          onChange={handleChange}
          value={data.email}
          placeholder="your-email@mail.com"
          name="email"
          id=""
        />
        <input
          type="text"
          placeholder="Subject"
          onChange={handleChange}
          value={data.subject}
          name="subject"
        />
        <textarea
          name="message"
          onChange={handleChange}
          value={data.message}
          placeholder="...type your message"
          id=""
          cols="30"
          rows="10"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
