import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <section className="contact-us-section" id="contact">
      <h2>Contact Us</h2>
      
      {/* Support and Sales Contacts */}
      <div className="contact-info-container">
        <div className="contact-info">
          <h3>Support Contacts</h3>
          <p>Phone: +254 205-205-205</p>
          <p>Email: support@ispservice.com</p>

          <h3>Sales Contacts</h3>
          <p>Phone: +254 722-222-222</p>
          <p>Email: sales@ispservice.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
