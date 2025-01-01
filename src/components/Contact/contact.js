import React, { useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all the fields before submitting.');
      return;
    }

    emailjs
      .sendForm('service_cmlatp7', 'template_axo1cri', form.current, '7LyF7P8vPFoZBGEnd')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Has Been Sent!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTittle">My clients</h1>
        <p className="clientDesc">
          I didn't work for any company yet. I'm still a student, but I would love to work for these companies in the future.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPage">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" className="name" placeholder="Your Name" />
          <input type="email" name="email" className="email" placeholder="Your Email" />
          <textarea name="message" rows="5" placeholder="Your message" className="msg"></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="Links">
            <a href="https://www.facebook.com/profile.php?id=100093587065545&mibextid=LQQJ4d">
              <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://twitter.com/Dioti684361">
              <img src={TwitterIcon} alt="Twitter" className="link" />
            </a>
            <a href="https://www.youtube.com/@tidianidiawara9975">
              <img src={YoutubeIcon} alt="YouTube" className="link" />
            </a>
            <a href="https://instagram.com/cheicktidianidiawara?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
              <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
