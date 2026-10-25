import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import trendyStyles from "../assets/image/feature_trendy_styles.jpg";
import iconInstagram from "../assets/image/icon_instagram.png";
import iconFacebook from "../assets/image/icon_facebook.png";
import iconPinterest from "../assets/image/icon_pinterest.png";
import iconYoutube from "../assets/image/icon_youtube.png";
import iconVisa from "../assets/image/icon_visa.png";
import iconMastercard from "../assets/image/icon_mastercard.png";
import iconPaypal from "../assets/image/icon_paypal.png";

function Logo({ size = 40 }) {
  return (
    <svg
      className="ls-logo-svg"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      role="img"
      aria-label="LittleSteps logo"
    >
      <rect width="40" height="40" rx="12" fill="#367d9a" />
      <g fill="#ffffff">
        <ellipse cx="14" cy="26" rx="4.2" ry="5.6" transform="rotate(-12 14 26)" />
        <circle cx="10" cy="17.5" r="1.7" />
        <circle cx="13.8" cy="16" r="1.7" />
        <circle cx="17.6" cy="17" r="1.7" />
        <ellipse cx="27" cy="18" rx="4.2" ry="5.6" transform="rotate(12 27 18)" />
        <circle cx="23.2" cy="9.5" r="1.7" />
        <circle cx="27" cy="8" r="1.7" />
        <circle cx="30.8" cy="9" r="1.7" />
      </g>
    </svg>
  );
}

function Navbar({ cartCount }) {
  const navClass = ({ isActive }) => "nav-link" + (isActive ? " active" : "");

  return (
    <nav className="navbar navbar-expand-lg ls-navbar">
      <div className="container">
        <Link className="navbar-brand ls-brand" to="/">
          <Logo />
          <span>
            LittleSteps<span className="brand-dot">.</span>
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#lsNav"
          aria-controls="lsNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="lsNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item"><NavLink end className={navClass} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={navClass} to="/products">Shop</NavLink></li>
            <li className="nav-item"><NavLink className={navClass} to="/about">Our Story</NavLink></li>
            <li className="nav-item"><NavLink className={navClass} to="/contact">Contact</NavLink></li>
          </ul>

          <Link to="/cart" className="ls-cart-link">
            <i className="bi bi-bag-heart"></i>
            <span>Bag</span>
            <span className="ls-cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="ls-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <Link className="footer-brand" to="/">
              <Logo size={34} /> LittleSteps.
            </Link>
            <p>
              Little clothes for big adventures. Comfortable styles made for
              every little milestone.
            </p>
            <div className="ls-pay-icons">
              <img src={iconVisa} alt="Visa" />
              <img src={iconMastercard} alt="Mastercard" />
              <img src={iconPaypal} alt="PayPal" />
            </div>
          </div>

          <div className="col-6 col-lg-2">
            <h6>Explore</h6>
            <Link to="/">Home</Link>
            <Link to="/products">Shop All</Link>
            <Link to="/about">Our Story</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-lg-3">
            <h6>Customer Care</h6>
            <Link to="/contact">Help &amp; Support</Link>
            <Link to="/products">Size Guide</Link>
            <Link to="/cart">Shopping Bag</Link>
            <a href="mailto:hello@littlesteps.example">Email Us</a>
          </div>

          <div className="col-lg-3">
            <h6>Stay in the loop</h6>
            <p>New collections, happy little styles, and more.</p>
            <div className="ls-socials">
              <a href="https://www.instagram.com/" aria-label="Instagram"><img src={iconInstagram} alt="" /></a>
              <a href="https://www.facebook.com/" aria-label="Facebook"><img src={iconFacebook} alt="" /></a>
              <a href="https://www.pinterest.com/" aria-label="Pinterest"><img src={iconPinterest} alt="" /></a>
              <a href="https://www.youtube.com/" aria-label="YouTube"><img src={iconYoutube} alt="" /></a>
            </div>
          </div>
        </div>

        <div className="ls-footer-bottom">
          <span>© 2026 LittleSteps Kidswear. All rights reserved.</span>
          <span>Made with love for little ones.</span>
        </div>
      </div>
    </footer>
  );
}

function Contact({ cartCount }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Order enquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "Order enquiry", message: "" });
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="ls-page">
        <section className="ls-page-banner contact-banner">
          <div className="container text-center">
            <span className="ls-eyebrow">WE'RE HERE FOR YOU</span>
            <h1>Let's Talk Little Things.</h1>
            <p>Questions about sizes, styles, or orders? We'd love to help.</p>
            <div className="ls-breadcrumb">
              <Link to="/">Home</Link> <i className="bi bi-chevron-right"></i> Contact
            </div>
          </div>
        </section>

        <section className="container ls-contact-section">
          <div className="row g-4 g-lg-5">
            <div className="col-lg-5" data-aos="fade-right">
              <span className="ls-eyebrow">SAY HELLO</span>
              <h2>Every little question is welcome.</h2>
              <p className="ls-contact-intro">
                We're happy to help you explore age groups, find a style,
                or understand your shopping bag.
              </p>

              <div className="ls-contact-card">
                <div className="ls-contact-icon"><i className="bi bi-envelope-heart"></i></div>
                <div>
                  <h6>Email us</h6>
                  <a href="mailto:hello@littlesteps.example">hello@littlesteps.example</a>
                </div>
              </div>

              <div className="ls-contact-card">
                <div className="ls-contact-icon"><i className="bi bi-clock-history"></i></div>
                <div>
                  <h6>Support hours</h6>
                  <p>Monday – Saturday</p>
                  <p>10:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="ls-contact-card">
                <div className="ls-contact-icon"><i className="bi bi-chat-heart"></i></div>
                <div>
                  <h6>Need shopping help?</h6>
                  <Link to="/products">Browse the collection</Link>
                </div>
              </div>

              <div className="ls-contact-image">
                <img src={trendyStyles} alt="LittleSteps kidswear collection" loading="lazy" />
                <div>Little outfits, lots of love.</div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="ls-contact-form-card">
                <span className="ls-eyebrow">SEND US A MESSAGE</span>
                <h3>How can we help?</h3>
                <p>Fill in the details below and we'll be happy to hear from you.</p>

                {submitted && (
                  <div className="alert alert-success" role="status">
                    <i className="bi bi-check-circle-fill"></i>
                    Thank you! Your demo message has been submitted.
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contactName">Your name</label>
                      <input
                        id="contactName"
                        className="form-control ls-input"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="contactEmail">Email address</label>
                      <input
                        id="contactEmail"
                        className="form-control ls-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="contactSubject">What is it about?</label>
                      <select
                        id="contactSubject"
                        className="form-select ls-input"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                      >
                        <option>Order enquiry</option>
                        <option>Size and fit</option>
                        <option>Product question</option>
                        <option>Return or exchange</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="contactMessage">Your message</label>
                      <textarea
                        id="contactMessage"
                        className="form-control ls-input"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        placeholder="Tell us how we can help..."
                        required
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="ls-btn-primary">
                        Send Message <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;