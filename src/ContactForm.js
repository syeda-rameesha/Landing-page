import React, {useState} from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // shows success/error message

  // update state when user types
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  // submit the form
  async function handleSubmit(e) {
    e.preventDefault(); // don't refresh the page

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Thanks! Your message was sent ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Could not reach server ❌");
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-text">
          <h2>Get in touch</h2>
          <p>Questions? Feedback? Want a demo? Send us a message.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="you@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="How can we help?"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {status && <p className="status-text">{status}</p>}
        </form>
      </div>
    </section>
  );
}