import { Link, NavLink } from "react-router-dom";

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

function Cart({ cart, cartCount, updateQuantity, removeFromCart }) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= 999 ? 0 : 59;
  const total = subtotal + shipping;

  const checkout = () => {
    window.alert(
      "Thank you for shopping with LittleSteps! This is a demo checkout. No payment has been taken."
    );
  };

  return (
    <>
      <Navbar cartCount={cartCount} />

      <main className="ls-page ls-cart-page">
        <section className="ls-page-banner cart-banner">
          <div className="container text-center">
            <span className="ls-eyebrow">A FEW LITTLE FAVOURITES</span>
            <h1>Your Shopping Bag</h1>
            <p>Your little one's next favourite outfit is waiting.</p>
            <div className="ls-breadcrumb">
              <Link to="/">Home</Link> <i className="bi bi-chevron-right"></i> Shopping Bag
            </div>
          </div>
        </section>

        <section className="container ls-cart-section">
          {cart.length === 0 ? (
            <div className="ls-empty-state" data-aos="fade-up">
              <div className="ls-empty-icon"><i className="bi bi-bag-heart"></i></div>
              <h2>Your bag is feeling a little empty.</h2>
              <p>Let's find something lovely for your little one.</p>
              <Link to="/products" className="ls-btn-primary">
                Explore Kidswear <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          ) : (
            <div className="row g-4 align-items-start">
              <div className="col-lg-8">
                <div className="ls-cart-panel">
                  <div className="ls-cart-panel-heading">
                    <h3>Your little finds</h3>
                    <span>{cartCount} item(s)</span>
                  </div>

                  {cart.map((item) => (
                    <div className="ls-cart-item" key={item.id}>
                      <Link to="/products" className="ls-cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </Link>

                      <div className="ls-cart-item-details">
                        <span className="ls-product-age">{item.age}</span>
                        <h5>{item.name}</h5>
                        <p>{item.category}</p>
                        <strong>₹{item.price.toLocaleString("en-IN")}</strong>

                        <div className="ls-cart-mobile-actions">
                          <div className="ls-quantity">
                            <button
                              aria-label={`Decrease quantity of ${item.name}`}
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              aria-label={`Increase quantity of ${item.name}`}
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>

                          <button className="ls-remove-btn" onClick={() => removeFromCart(item.id)}>
                            <i className="bi bi-trash3"></i> Remove
                          </button>
                        </div>
                      </div>

                      <div className="ls-cart-item-total">
                        <strong>₹{(item.price * item.quantity).toLocaleString("en-IN")}</strong>
                      </div>
                    </div>
                  ))}

                  <Link to="/products" className="ls-continue-link">
                    <i className="bi bi-arrow-left"></i> Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="ls-order-summary">
                  <span className="ls-eyebrow">THE LITTLE TOTAL</span>
                  <h3>Order Summary</h3>

                  <div className="ls-summary-line">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="ls-summary-line">
                    <span>Delivery</span>
                    <span>{shipping === 0 ? "FREE" : `₹${shipping}`}</span>
                  </div>

                  {subtotal > 0 && subtotal < 999 && (
                    <p className="ls-shipping-note">
                      Add ₹{(999 - subtotal).toLocaleString("en-IN")} more for free delivery.
                    </p>
                  )}

                  <div className="ls-summary-total">
                    <strong>Total</strong>
                    <strong>₹{total.toLocaleString("en-IN")}</strong>
                  </div>

                  <button className="ls-btn-primary ls-checkout-btn" onClick={checkout}>
                    Proceed to Checkout <i className="bi bi-arrow-right"></i>
                  </button>

                  <div className="ls-pay-icons center">
                    <img src={iconVisa} alt="Visa" />
                    <img src={iconMastercard} alt="Mastercard" />
                    <img src={iconPaypal} alt="PayPal" />
                  </div>

                  <p className="ls-secure-note">
                    <i className="bi bi-shield-check"></i>
                    Demo checkout. No payment is processed.
                  </p>

                  <div className="ls-payment-note">
                    <i className="bi bi-heart-fill"></i>
                    Happy little outfits, on their way.
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Cart;