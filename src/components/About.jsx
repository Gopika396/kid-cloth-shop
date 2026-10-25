import { Link, NavLink } from "react-router-dom";

import lifestyleBanner from "../assets/image/lifestyle_banner.jpg";
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

function About({ cartCount }) {
  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="ls-page">
        <section className="ls-page-banner about-banner">
          <div className="container text-center">
            <span className="ls-eyebrow">A LITTLE LOVE IN EVERY STITCH</span>
            <h1>Our Little Story</h1>
            <p>Big childhood memories begin with little things.</p>
            <div className="ls-breadcrumb">
              <Link to="/">Home</Link> <i className="bi bi-chevron-right"></i> Our Story
            </div>
          </div>
        </section>

        <section className="container ls-about-intro">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="ls-about-image">
                <img src={lifestyleBanner} alt="LittleSteps children's fashion" loading="lazy" />
              </div>
              <div className="ls-about-badge">
                <i className="bi bi-heart-fill"></i>
                <span>Made for</span>
                <strong>Little Joys</strong>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left">
              <span className="ls-eyebrow">HELLO, LITTLE WORLD!</span>
              <h2>Childhood moves fast. Let them enjoy every step.</h2>
              <p>
                LittleSteps is a kidswear concept built around the idea that
                children's clothes should feel good, look playful, and make
                everyday adventures a little more special.
              </p>
              <p>
                From the first tiny outfits to big-kid everyday favourites,
                our age-based collections help parents explore styles that
                suit each growing stage.
              </p>
              <Link to="/products" className="ls-btn-primary">
                Explore the Collection <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>

        <section className="ls-values-section">
          <div className="container">
            <div className="ls-section-heading centered">
              <div>
                <span className="ls-eyebrow">WHAT WE BELIEVE</span>
                <h2>Little details, lots of love.</h2>
                <p>Three ideas guide our little world.</p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-4" data-aos="fade-up">
                <div className="ls-value-card value-peach">
                  <div className="ls-value-icon"><i className="bi bi-cloud"></i></div>
                  <h4>Comfort Comes First</h4>
                  <p>Everyday styles should feel easy enough for play, rest, and everything in between.</p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="ls-value-card value-mint">
                  <div className="ls-value-icon"><i className="bi bi-palette"></i></div>
                  <h4>Made for Movement</h4>
                  <p>Playful styles belong in playground adventures and precious family moments.</p>
                </div>
              </div>

              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="ls-value-card value-lilac">
                  <div className="ls-value-icon"><i className="bi bi-balloon-heart"></i></div>
                  <h4>Every Stage Matters</h4>
                  <p>Our age-group collections make it simple to browse styles as little ones grow.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container ls-about-cta">
          <div>
            <span className="ls-eyebrow">READY FOR THEIR NEXT ADVENTURE?</span>
            <h2>Let's find their next favourite outfit.</h2>
            <p>Browse our collection by age and discover something special.</p>
            <Link to="/products" className="ls-btn-primary">
              Shop LittleSteps <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;