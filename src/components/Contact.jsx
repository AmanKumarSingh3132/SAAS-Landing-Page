import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-background">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out to us using the information below, and our team will get back to you as soon as possible.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem' }}>
          <li><strong>Phone:</strong> (123) 456-7890</li>
          <li><strong>Email:</strong> info@mycompany.com</li>
          <li><strong>Address:</strong> 123 Main Street, Cityville, Country</li>
        </ul>
        <p>
          You can also fill out our contact form and we’ll respond promptly.
        </p>
      </div>
    </div>
  );
}

export default Contact;