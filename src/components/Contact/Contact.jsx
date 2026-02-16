import React, { useState } from "react";
import "./Contact.css";

import mail_icon from "../../assets/mail_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);

    // IMPORTANT: Your Web3Forms Access Key
    formData.append("access_key", "91769733-8060-4922-852a-e6b3b8c924d6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const res = await response.json();

      if (res.success) {
        setResult("Message sent successfully! 🚀");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="contact">

      <h1 className="contact-main-title">
        Get in <span>touch</span>
      </h1>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2>Let's talk</h2>
          <p>
            I’m currently available to take on new projects, so feel free
            to send me a message about anything that you want me to work on.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <img src={mail_icon} alt="mail" />
              <span>akankshathotwe07@gmail.com</span>
            </div>

            <div className="info-item">
              <img src={phone_icon} alt="phone" />
              <span>+91 XXXXX XXXXX</span>
            </div>

            <div className="info-item">
              <img src={location_icon} alt="location" />
              <span>Maharashtra, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={onSubmit} className="contact-right">

          {/* Hidden Subject Field */}
          <input 
            type="hidden" 
            name="subject" 
            value="New Portfolio Contact Message" 
          />

          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required 
          />

          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            required 
          />

          <textarea 
            name="message"
            placeholder="Write your message here" 
            rows="6" 
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit now"}
          </button>

          {result && <p className="form-result">{result}</p>}

        </form>

      </div>
    </div>
  );
};

export default Contact;
