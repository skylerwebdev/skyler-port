import React from "react";

import "../style/css/ContactForm.css";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    });
    console
      .log("TCL: ContactForm -> ...this.state", this.state)
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Name"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <textarea
            name="message"
            value={message}
            placeholder="Message"
            onChange={this.handleChange}
          />
        </p>
        <p>
          <button type="submit">Send</button>
          <button type="reset">Reset</button>
        </p>
      </form>
    );
  }
}

export default ContactForm;
